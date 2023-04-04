import React from "react";
import { CssBaseline} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import {Routes, Route} from 'react-router-dom'
// import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Home from "./pages/Home/Home";



function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/productinfo' element={<ProductInfo />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
