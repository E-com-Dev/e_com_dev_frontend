import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { Home } from "./pages/Home";

import Footer  from "./components/Footer/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          
          <Home />
          <Footer/>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
