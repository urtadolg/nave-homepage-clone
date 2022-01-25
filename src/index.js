import React from "react";
import ReactDOM from "react-dom";

import ThemeProvider from "./store/ThemeProvider";
import "./index.scss";
import App from "./App";
import "./i18nextConf";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
