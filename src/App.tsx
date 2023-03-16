import React from "react";
import Home from "./pages/Home/Home";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Home />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
