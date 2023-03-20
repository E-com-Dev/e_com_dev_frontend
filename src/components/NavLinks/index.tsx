import * as React from "react";
import { Tabs, Box, Tab } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Box>
  );
};

const TabsProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const NavLinks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Women", index: 0 },
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
                }}
              >
                {tab.label}
                <ArrowDropDownIcon />
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
        Home
      </TabPanel>
      <TabPanel value={value} index={4}>
        Entertainment
      </TabPanel>
    </Box>
  );
};

export default NavLinks;
