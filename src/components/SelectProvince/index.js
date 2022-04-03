import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function SelectProvince({ allProvince }) {
  const customProvinces = [
    ...new Set(allProvince?.map((item) => item.province)),
  ].map((province) => allProvince?.find((item) => item.province === province));

  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //autoSelect first item
  useEffect(() => {
    setValue(customProvinces?.[0]?.province);
  }, [allProvince]);

  console.log(value);
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {customProvinces?.map((item) => (
              <Tab
                key={item?._id}
                label={item.province}
                value={item.province}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value={value}>Item One</TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}
