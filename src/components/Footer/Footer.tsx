import styled from '@emotion/styled';
import { Box, Container, Typography, Link } from '@mui/material';
import Button from '@mui/material/Button/Button';


const Footer = () => {

    const MyButton = styled(Button)({
        padding: 6,
        margin: 6,
        fontSize: 12,
        fontWeight: 600,
        backgroundColor: "#F5F5F5",
        borderRadius: 12,
        color: "#151515",
        "&:hover": {
            backgroundColor: "#cac6c6"
        }
    });

    const MyText = styled(Typography)({
        margin: 4,
        fontSize: 14,
        fontWeight: 400,
        color: "#6A983C",
        "&:hover": {
            cursor: "pointer",
            fontWeight: 600,
        }
    });

    const MyLink = styled(Link)({
        margin: 4,
        fontSize: 14,
        fontWeight: 400,
        textDecoration: "none",
        color: "#6A983C",
        "&:hover": {
            cursor: "pointer",
            fontWeight: 600,
        }
    });

  return (
    <div >
        <Container sx={{marginY: 4, }}>
            <Typography variant='body1' sx={{marginY: 5, fontSize: 18, fontWeight: 600, color: "#151515"}}>
                Shop By Brand
            </Typography>
            <Box sx={{marginY: 4 }}>
                {[ "Puma", "Adidas", "Phillips", "Boohoo", "Nike", "Akira", "Aldi", "Fanyo", "Eva", "Coca cola", 
                    "Apple", "Samsung", "Converse", "Bonobo", "Sean John", "Sure", "Seo tag", "Nivea", "Emzor" 
                ].map((item) => (
                    <MyButton key={item}>{item}</MyButton>
                ))}
            </Box>
        </Container>
        <Container sx={{display: 'flex', justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
            <Box component="div" sx={{margin: 2, width: { xs: 100, sm: 100, md: 200} }}>
                <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18 }} >
                    Get in touch
                </Typography>
                <MyText>
                    About Us
                </MyText>
                <MyText>
                    Careers
                </MyText>
                <MyText>
                    Press Releases
                </MyText>
            </Box>
            <Box component="div" sx={{display: 'flex', justifyContent: "space-between", flexDirection: "column", margin: 2, width: { xs:100, sm: 100, md: 200} }}>
                <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18 }} >
                    Connections
                </Typography>
                <MyLink href="http://www.facebook.com">
                    Facebook
                </MyLink>
                <MyLink href="http://www.twitter.com">
                    Twitter
                </MyLink>
                <MyLink href="http://www.instagram.com">
                    Instagram
                </MyLink>
                <MyLink href="http://www.youtube.com">
                    Youtube
                </MyLink>
                <MyLink href="http://www.linkedin.com">
                    LinkedIn
                </MyLink>
            </Box>
            <Box component="div" sx={{margin: 2, width: { xs: 100, sm: 100, md: 200}}}>
                <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18 }} >
                    Earnings
                </Typography>
                <MyText>
                    Advertise your product
                </MyText>
                <MyText>
                    Sell on Market
                </MyText>
            </Box>
            <Box component="div" sx={{margin: 2, width: { xs: 100, sm: 100, md: 200}}}>
                <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18 }}>
                    Account
                </Typography>
                <MyText>
                    Your Account
                </MyText>
                <MyText>
                    Returns Centre
                </MyText>
                <MyText>
                    100 % purchase protection
                </MyText>
                <MyText>
                    Chat with us
                </MyText>
                <MyText>
                    Help
                </MyText>
            </Box>
        </Container>
    </div>
  )
}

export default Footer