import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Tabs, Tab, Typography, Box, Badge} from '@mui/material';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: '48px 0px 0px 0px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ProductInfoTab(){
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'white', width: {xs: '100%', md:'45.16%'}, marginTop: '100px'}}>
      <Box sx={{borderBottom: ' 1px solid #F5F5F5'}}>
        <Tabs
        sx={{background: '#fff', '& .MuiTabs-indicator': {backgroundColor: '#6A983C'}}}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
            <Tab label="Description" {...a11yProps(0)} sx={{'&.MuiTab-root':{fontFamily:'Poppins, sans-serif', fontSize: {xs:'16px', md:'18px'}, fontWeight: '600', lineHeight: '27px', color: '#151515', fontStyle: 'normal', textTransform: 'initial',alignItems: 'start', paddingLeft: '0px', paddingBottom: '0px'}}}/>
            <Tab label="Reviews" icon={<Badge  color='success' badgeContent={18} /> } iconPosition='end' {...a11yProps(0)} sx={{'&.MuiTab-root':{fontFamily:'Poppins, sans-serif', fontSize: {xs:'16px', md:'18px'}, fontWeight: '600', lineHeight: '27px', color: '#151515', fontStyle: 'normal', textTransform: 'initial', paddingBottom: '0px'}}}/>
            <Tab label="Questions" icon={<Badge color='success' badgeContent={18} /> } iconPosition='end' {...a11yProps(0)} sx={{'&.MuiTab-root':{fontFamily:'Poppins, sans-serif', fontSize: {xs:'16px', md:'18px'}, fontWeight: '600', lineHeight: '27px', color: '#151515', fontStyle: 'normal', textTransform: 'initial', paddingBottom: '0px'}, '&.MuiBadge-badge': {gap: '10px', backgroundColor: '#f9f9f9', color: '#6A983C'}}}/>
        </Tabs>
      </Box>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant='h6' sx={{fontFamily:'Open Sans, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', color: '#151515', fontStyle: 'normal', marginBottom: '8px'}}>Origin</Typography>
          <Typography variant='body1' sx={{fontFamily:'Open Sans, sans-serif', fontSize: '14px', fontWeight: '400', lineHeight: '19px', color: '#151515', fontStyle: 'normal', width: '100%'}}>
            As the seller of this laptop, I want to make it clear that the device is brand new and has not been previously used. I purchased it directly from the manufacturer, and it has been sitting in its original packaging since then.
            However, I am leaving the country soon and need to sell the laptop quickly. Moving abroad can be expensive, and I'm looking to generate some extra cash to help with those expenses. As a result, I'm offering the laptop at a discounted rate compared to its original price.
            I understand that buying a laptop from a private seller can be risky, so I want to assure you that the laptop is in excellent condition. I have taken great care to keep it in its original packaging to protect it from any damage. I'm also happy to let you inspect the laptop and test it out before making a purchase to ensure that it meets your expectations.
            While I'm sad to part with this laptop, I hope that it can find a new owner who will appreciate it as much as I did. If you have any questions or concerns, please don't hesitate to reach out to me. I want to make sure that you're completely satisfied with your purchase.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Reviews
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Questions
        </TabPanel>
    </Box>
  );
}