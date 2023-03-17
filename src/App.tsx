import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Navbar />
          <Home />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
