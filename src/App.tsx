import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes";

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
