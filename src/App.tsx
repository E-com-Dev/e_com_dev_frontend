import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import SubNav from "./components/SubNav/SubNav";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
// import ProductInfoTab from "./components/ProductInfoTab/ProductInfoTab"


function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box>
          {/* <Navbar /> */}
          {/* <SubNav /> */}
          <ProductInfo />
          {/* <Footer /> */}
          {/* <ProductInfoTab /> */}
          {/* <ProductInfoTab /> */}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
