import React from "react";
import { ThemeProvider, createTheme } from "@chainsafe/common-theme";
import {
  CssBaseline, Router
} from "@chainsafe/common-components"
import Routes from "./Routes";

const theme = createTheme({
  globalStyling: {
    body: {
      fontFamily: 'Neue Montreal, Arial',
      backgroundColor: "#f5f5f5",
      // overflowX: "hidden",
    },
  },
  themeConfig: {
    typography: {
      h1: {
        lineHeight: "1.2em",
      }
    }
  },
})

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;