import { Box, Container, Typography, Link } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const Footer = () => {
  return (
    <div>
        <Container sx={{display: 'flex', justifyContent: "space-between", alignItems: "flex-start", cursor: "pointer"}}>
            <Box component="div">
                <Typography variant="body1" fontWeight="600" fontSize="18">
                    Get in touch
                </Typography>
                <Typography variant="body2" >
                    About Us
                </Typography>
                <Typography variant="body2">
                    Careers
                </Typography>
                <Typography variant="body2">
                    Press Releases
                </Typography>
            </Box>
            <Box component="div" sx={{display: 'flex', justifyContent: "space-between", flexDirection: "column",alignItems: ""}}>
                <Typography variant="body1" fontWeight="600" fontSize="18" >
                    Connections
                </Typography>
                <Link href="http://www.facebook.com">Facebook</Link>
                <Link href="http://www.twitter.com">Twitter</Link>
                <Link href="http://www.instagram.com">Instagram</Link>
                <Link href="http://www.youtube.com">Youtube</Link>
                <Link href="http://www.linkedin.com">LinkedIn</Link>
            </Box>
            <Box component="div">
                <Typography variant="body1" fontWeight="600" fontSize="18" >
                    Earnings
                </Typography>
                <Typography variant="body2">
                    Advertise your product
                </Typography>
                <Typography variant="body2">
                    Sell on Market
                </Typography>
            </Box>
            <Box component="div">
                <Typography variant="body1" fontWeight="600" fontSize="18">
                    Account
                </Typography>
                <Typography variant="body2">
                    Your Account
                </Typography>
                <Typography variant="body2">
                    Returns Centre
                </Typography>
                <Typography variant="body2">
                    100 % purchase protection
                </Typography>
                <Typography variant="body2">
                    Chat with us
                </Typography>
                <Typography variant="body2">
                    Help
                </Typography>
            </Box>
        </Container>

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', borderBottom: 'none' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          variant='standard'
          defaultValue="USD"
          sx={{border: 'none', '& .MuiInputBase-root:before': {border: 'none'}, '& .MuiInputBase-root:after': {border: 'none'}}}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
    </Box>
    </div>
  )
}

export default Footer