import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";

import styles from "./Header.module.scss";
import LangSelector from "./LangSelector";
import NavLinks from "./NavLinks";
import Menu from "./Menu";
import Switch from "../ui/Switch";
import ThemeContext from "../../store/theme-context";

const Header = (props) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const openMenuHandler = () => {
    setMenuIsOpened(true);
  };
  const closeMenuHandler = () => {
    setMenuIsOpened(false);
  };

  const themeCtx = useContext(ThemeContext);

  const headerClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <header className={headerClasses}>
      <div className={styles.logo}>
        <svg width="35px" height="35px" viewBox="0 0 36 36" fill="none">
          <path
            d="M17.1342 26.8861L16.7241 35.6354L24.1063 26.0203L24.881 18.8203L30.9418 12.7595L35.681 0L22.9215 4.69367L16.8152 10.7544L9.61519 11.5291L0 18.9114L8.74937 18.5013L17.1342 26.8861Z"
            fill="#6600CA"
          ></path>
          <path
            d="M9.15933 21.4629L14.172 26.5211L6.74414 29.2097L9.15933 21.4629Z"
            fill="#6600CA"
          ></path>
        </svg>
      </div>
      <nav className={styles.nav}>
        <NavLinks className={styles.nav_links} />
        <LangSelector />
        <Switch />
      </nav>
      <FontAwesomeIcon
        className={styles.menu}
        onClick={openMenuHandler}
        icon="bars"
        size="2x"
      />

      <CSSTransition
        in={menuIsOpened}
        timeout={400}
        classNames="menu-transition"
        mountOnEnter
        unmountOnExit
      >
        <Menu onClose={closeMenuHandler} />
      </CSSTransition>
    </header>
  );
};

export default Header;
