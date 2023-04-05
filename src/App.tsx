import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Login from "./pages/Auth/Login/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./pages/Auth/routes";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/*" element={<AuthRoutes />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
