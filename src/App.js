import React, { useContext, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import ThemeContext from "./store/theme-context";
import Header from "./components/header/Header";
import MainBanner from "./components/main/main_banner/MainBanner";
import AboutUs from "./components/main/about_us/AboutUs";
import SenecaQuote from "./components/main/seneca_quote/SenecaQuote";
import Services from "./components/main/services/Services";
import Process from "./components/main/process/Process";
import Clients from "./components/main/clients/Clients";
import Contact from "./components/main/contact/Contact";
import ContactUs from "./components/main/contact/ContactUs";
import Footer from "./components/footer/Footer";

library.add(fab, faBars, faTimes);

function App() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    themeCtx.changeTheme(theme);
  }, []);

  return (
    <div>
      <Header />
      <MainBanner />
      <AboutUs />
      <SenecaQuote />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
