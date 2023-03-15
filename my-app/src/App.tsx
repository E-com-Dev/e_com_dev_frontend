import React from "react";
import "./App.css";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Home />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
