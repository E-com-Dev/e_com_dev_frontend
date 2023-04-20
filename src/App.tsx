import React from "react";
import { CssBaseline} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";


import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Home from "./pages/Home/Home";


import AuthRoutes from "./routes";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </>
  );
}

export default App;
