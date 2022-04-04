import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Locations from "../../containers/locations/Locations";

export default function SelectProvince({
  allProvince,
  selectedProvince,
  setSelectedProvince,
  tours,
  error,
}) {
  const customProvinces = [
    ...new Set(allProvince?.map((item) => item.province)),
  ].map((province) => allProvince?.find((item) => item.province === province));

  const handleChange = (event, newValue) => {
    setSelectedProvince(newValue);
  };

  //autoSelect first item
  useEffect(() => {
    setSelectedProvince(customProvinces?.[0]?.province);
  }, [allProvince]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={selectedProvince}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab value={null} label="All" />
            {customProvinces?.map((item) => (
              <Tab
                key={item?._id}
                label={item.province}
                value={item.province}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value={selectedProvince}>
          {" "}
          <Locations tours={tours} error={error} />
        </TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}
