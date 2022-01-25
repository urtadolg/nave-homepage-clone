import React, { useContext, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header/Header";
import ThemeContext from "./store/theme-context";
import MainBanner from "./components/main/MainBanner";
import Switch from "./components/ui/Switch";
import LangSelector from "./components/header/LangSelector";
import AboutUs from "./components/main/about-us/AboutUs";
import SenecaQuote from "./components/main/seneca_quote/SenecaQuote";

library.add(fab, faBars, faTimes);

function App() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    themeCtx.changeTheme(theme);
  }, []);

  return (
    <div style={{ backgroundColor: "lightGray" }}>
      {/* <Switch />
      <LangSelector /> */}

      <Header />
      <MainBanner />
      <AboutUs />
      <SenecaQuote />
    </div>
  );
}

export default App;
