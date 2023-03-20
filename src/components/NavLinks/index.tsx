import * as React from "react";
import { Tabs, Box, Tab } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ITabPanelProps } from "./Interfaces";
import { Home } from "src/pages/Home";

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Box>
  );
};

const TabsProps = (index: number) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const NavLinks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "WOMEN", index: 0 },
    { label: "Men", index: 1 },
    { label: "Kids", index: 2 },
    { label: "Home", index: 3 },
    { label: "Entertainment", index: 4 },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="primary"
        TabIndicatorProps={{
          style: { display: "none" },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: " #F9F9F9",
                  color: value === index ? "#6A983C" : "inherit",
                  fontWeight: value === index ? "bold" : "normal",
                }}
              >
                {tab.label}
                <ArrowDropDownIcon
                  sx={{ color: "#6A983C", fontSize: "medium" }}
                />
              </Box>
            }
            {...TabsProps(index)}
          />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        Women
      </TabPanel>
      <TabPanel value={value} index={1}>
        Men
      </TabPanel>
      <TabPanel value={value} index={2}>
        Kids
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Entertainment
      </TabPanel>
    </Box>
  );
};

export default NavLinks;
