import { Card, CardMedia, Typography, styled, Stack, Button, Box } from '@mui/material'
import laptop from '../Assets/laptop.jpg'

const CardStyle = {
    width: '268px', 
    height: '323px', 
    border:'1px solid #D1D1D1', 
    borderRadius: '12px', 
    padding: '16px', 
    background: '#fff',
    marginBottom: '20px',
    position: 'relative'
}
const CustomTypography = styled(Typography)({
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '22px',
    color: '#151515'
}) 
const titleStyle = {
    marginBottom: '16px', 
    fontFamily: 'Open Sans, sans-serif', 
    fontWeight: '400', 
    fontSize: '12px', 
    lineHeight: '16px', 
    color: '#575757',
    textTransform: 'none',
}
const BuyButton = styled(Button)({
    background: '#6A983C',
    border: '2px solid #46760A',
    borderRadius: '12px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '22px',
    textTransform: 'none',
    color: '#fff'
})

const discountStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#6A983C', 
    background: '#f4f8ec', 
    borderRadius: '12px', 
    width:'52px', 
    height:'18px', 
    padding: '0 8px',
    position: 'absolute',
    top: '22px',
    left: '15px'
}
const ProductInfoCard = () => {
  return (
    <Card sx={CardStyle}>
        <CardMedia 
            sx={{ height: '180px',width: '236px', marginBottom: '16px'}}
            image={laptop}
            title="open laptop"/>
        <CustomTypography variant='h4' sx={{marginBottom: '4px'}}>Product Title</CustomTypography>
        <CustomTypography variant='body2' sx={titleStyle}>Space for a small product description </CustomTypography>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <CustomTypography sx={{fontWeight: '600', fontSize: '18px', lineHeight: '27px',}}>7000 NGN</CustomTypography>
            <BuyButton>Buy now</BuyButton>
        </Stack>
        <Box sx={discountStyle}>36%</Box>
    </Card>
  )
}

export default ProductInfoCard