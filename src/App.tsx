import React from "react";
import { CssBaseline} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";


import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Home from "./pages/Home/Home";
import Container from '@mui/material/Container';


import AuthRoutes from "./routes";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>

        <Container maxWidth="lg">
        <Routes>
            <Route path="/*" element={<AuthRoutes /> } />
            <Route path="/" element={<Home />} />
          <Route path='/productinfo' element={<ProductInfo />} />
        </Routes>
        <Footer />

        
      </Container>
       
      </ThemeProvider>
    </>
  );
}

export default App;
