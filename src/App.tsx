import React from "react";
import { ThemeProvider, createTheme } from "@chainsafe/common-theme";
import {
  CssBaseline, Router
} from "@chainsafe/common-components"
import Routes from "./Routes";
import nmReg from "./fonts/NeueMontreal-Regular.ttf";

const NeueMontreal = {
  fontFamily: "NeueMontreal",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('NeueMontreal-Regular),
    url(${nmReg}) format('ttf)
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
  globalStyling: {
    body: {
      fontFamily: 'Neue Montreal, Arial',
      backgroundColor: "#f5f5f5",
    },
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