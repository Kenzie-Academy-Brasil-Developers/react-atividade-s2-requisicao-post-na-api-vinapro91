import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
const theme = createTheme({
  palette: {
    primary: {
      light: "#67daff",
      main: "#00a9f4",
      dark: "#007ac1",
      contrastText: "#000000",
    },
    secondary: {
      light: "#69e2ff",
      main: "#00b0ff",
      dark: "#0081cb",
      contrastText: "#000000",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
