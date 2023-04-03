import { Box, CardMedia, Typography, Rating, Stack, styled, Button, TextField, InputAdornment, Divider, Checkbox, useTheme } from '@mui/material'
import toshiba1 from '../../components/Assets/toshiba1.jpg'
import toshiba2 from '../../components/Assets/toshiba2.jpg'
import toshiba3 from '../../components/Assets/toshiba3.jpg'
import compare from '../../components/Assets/compare.svg'
import { Add, Favorite, FavoriteBorder, KeyboardArrowRight } from '@mui/icons-material'
import ProductInfoTab from '../../components/ProductInfoTab/ProductInfoTab'
import ProductInfoCard from 'src/components/ProductInfoCard/ProductInfoCard'


const CustomDiv = styled('p')({
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '19px',
  color: '#A9A9A9',
})

const headingStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '140%',
  color: '#151515'
}
const CartButton = styled(Button)({
  background: '#6A983C', border: '2px solid #46760A', borderRadius: '12px',
  padding: '14px 16px',
  fontFamily: 'Poppins, sans-serif', fontStyle: 'normal',
fontWeight: '700',
fontSize: '15px', lineHeight: '22px'

})

const ProductInfo = () => {
  const theme = useTheme();
  const Cards = [1,2,3,4]
  return (
    <Box sx={{maxWidth: '1260px', padding: {xs:'0 8px 0 8px', md: '0 40px 0 40px'}}}>
      <Box>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: '6px', justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' }}}>
          <CardMedia 
            sx={{ height: { xs: '300px', sm: '436px' }, width: { xs: '100%', sm:'70%', md: '569px' }, maxWidth:'100%', objectFit: 'cover' }}
            image={toshiba1}
            title="toshiba laptop"/>
          <Box sx={{width: { xs: '100%', md: '45.16%' }, marginTop: { xs: theme.spacing(2), md: 0 }}}>
            <Box>
              <Typography variant='h3' component='h1' sx={headingStyle}>Neatly used Toshiba laptop</Typography>
              <Stack direction='row' alignItems='center' gap={1} sx={{height: '28px'}}>
                <Rating name="size-small" defaultValue={1} size="small" />
                <CustomDiv sx={{fontSize: '12px', lineHeight: '16px'}}>(1 customer review)</CustomDiv>
              </Stack>
              <CustomDiv sx={{fontSize: '17px', lineHeight: '23px', color: '#151515', marginTop: '35px', marginBottom: '0px'}}>This laptop was bought brand new. Owner is leaving the country so selling at a discouned rate</CustomDiv>
            </Box>


            <Stack direction='row' justifyContent='space-between' sx={{margin: '35px 0px'}}>
              <Box sx={{width:{xs: '100%', md:'38.47%'}}}>
                <Stack direction='row' justifyContent={{xs:'flex-start', md:'space-between'}} sx={{'&.MuiStack-root': {height: '35px'}}}>
                  <CustomDiv sx={{width: '60px'}}>SKU:</CustomDiv>
                  <CustomDiv sx={{color: '#151515', width: '86px'}}>76645</CustomDiv>
                </Stack>
                <Stack direction='row' justifyContent={{xs:'flex-start', md:'space-between'}} sx={{'&.MuiStack-root': {height: '35px'}}}>
                  <CustomDiv sx={{width: '60px'}}>Category:</CustomDiv>
                  <CustomDiv sx={{color: '#151515', width: '86px', textDecoration: 'underline'}}>Entertainment</CustomDiv>
                </Stack>
                <Stack direction='row' justifyContent={{xs:'flex-start', md:'space-between'}} sx={{'&.MuiStack-root': {height: '35px'}}}>
                  <CustomDiv sx={{width: '60px'}}>Stock:</CustomDiv>
                  <CustomDiv sx={{color: '#6A983C', width: '86px', textDecoration: 'underline'}}>In Stock</CustomDiv>
                </Stack>
              </Box>
              <Box sx={{width:{xs: '100%', md:'38.47%'}}}>
                <Stack direction='row' justifyContent={{xs:'flex-start', md:'space-between'}} sx={{'&.MuiStack-root': {height: '35px'}}}>
                  <CustomDiv sx={{width: '100px'}}>Freshness:</CustomDiv>
                  <CustomDiv sx={{color: '#151515', width: '66px'}}>1 year</CustomDiv>
                </Stack>
                <Stack direction='row' justifyContent={{xs:'flex-start', md:'space-between'}} sx={{'&.MuiStack-root': {height: '35px'}}}>
                  <CustomDiv sx={{width: '100px'}}>Delivery:</CustomDiv>
                  <CustomDiv sx={{color: '#151515', width: '66px'}}>In 2 days</CustomDiv>
                </Stack>
                <Stack direction='row' justifyContent={{xs:'flex-start', md:'space-between'}} sx={{'&.MuiStack-root': {height: '35px'}}}>
                  <CustomDiv sx={{width: '100px'}}>Delivery area:</CustomDiv>
                  <CustomDiv sx={{color: '#151515', width: '66px'}}>Lagos</CustomDiv>
                </Stack>
              </Box>
            </Stack>


            <Stack direction={{xs: 'column', md:'row'}} alignItems='center' justifyContent='space-between' sx={{border: '1px solid #F5F5F5', padding: '16px', borderRadius: '12px', width: {xs: '85%', md: '100%'}, margin: {xs: '0 auto', md: '0'}}}>
                <Stack sx={{marginBottom:{xs: '20px', md: '0px'}}}>
                  <Typography variant='body1' component='p' sx={{fontFamily: 'Poppins, sans-serif', fontStyle: 'normal', fontWeight: '600', fontSize: '26px', lineHeight: '39px', color: '#6A983C' }}>
                    150,000 NGN
                  </Typography>
                  <Typography variant='body1' component='p' sx={{fontFamily: 'Poppins, sans-serif', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '18px', color: '#A9A9A9', textDecoration: 'line-through' }}>
                  48.56 USD
                  </Typography>
                </Stack>

                <Box>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Divider orientation="vertical" variant="middle"  sx={{color: 'green', '& .MuiDivider-root': {color: 'black'}}}/>
                          Pcs
                        </InputAdornment>
                      )
                    }}
                    variant="outlined"
                    sx={{border: '1px solid #D1D1D1', width: '100px', marginBottom:{xs: '20px', md: '0px'}, '&.MuiTextField-root': {borderRadius: '12px'}}}
                  />
                </Box>

              <CartButton variant='contained' startIcon={<Add /> } sx={{textTransform: 'none'}}> Add to cart</CartButton>
            </Stack>
            <Stack direction='row' gap='20px'>
              <Stack direction='row'>
                <Checkbox icon={<FavoriteBorder sx={{color: '#E5704B'}}/>} checkedIcon={<Favorite sx={{color: '#E5704B'}}/>} />
                <CustomDiv sx={{fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '15px', lineHeight: '22px', color: '#151515', textTransform: 'none'}}>Add to my wish list</CustomDiv>
              </Stack>
              <Stack direction='row'>
                <Checkbox icon={<img src={compare} alt='' />} checkedIcon={<Favorite />} />
                <CustomDiv sx={{fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '15px', lineHeight: '22px', color: '#151515', textTransform: 'none'}}>Compare</CustomDiv>
              </Stack>
              
            </Stack>
          </Box>
        </Stack>
    
        <Stack direction={{xs: 'column', md:'row'}} sx={{justifyContent: {xs:'space-around', md:'space-between'}}}>
          <Stack alignItems='center'>
            <CardMedia 
            sx={{ height: { xs: '300px', sm: '436px' }, width: { xs: '100%', sm:'70%', md: '569px' }, maxWidth:'100%', objectFit: 'cover', marginBottom: '32px' }}
            image={toshiba2}
            title="toshiba laptop"/>
            <CardMedia 
            sx={{ height: { xs: '300px', sm: '436px' }, width: { xs: '100%', sm:'70%', md: '569px' }, maxWidth:'100%', objectFit: 'cover' }}
            image={toshiba3}
            title="toshiba laptop"/>
          </Stack>
          <ProductInfoTab />
        </Stack>
      </Box>

      <Stack direction='row' justifyContent='space-between' alignItems='center' mt={'87px'} mb={'37px'}>
        <Typography variant='body1' component='p' sx={{fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize:'18px', lineHeight:'27px', color:'#151515', textTransform:'none'}}>Related products</Typography>
        <Button variant='text' endIcon={<KeyboardArrowRight sx={{color: '#6A983C'}} />} sx={{fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize:'15px', lineHeight:'22px', color:'#151515', textTransform:'none'}}>More products</Button>
      </Stack>

      <Stack direction='row' sx={{justifyContent: {xs:'space-around', md:'space-between'}, alignItems: 'center', flexWrap: 'wrap', marginBottom: '50px'}}>
        {Cards.map(
          Card => <ProductInfoCard />
        )
        }
      </Stack>

    </Box>
    
  )
}

export default ProductInfo