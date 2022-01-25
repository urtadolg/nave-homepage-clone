import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Menu.module.scss";
import NavLinks from "./NavLinks";
import ThemeContext from "../../store/theme-context";

const Menu = (props) => {
  const themeCtx = useContext(ThemeContext);

  const menuClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <div className={menuClasses}>
      <FontAwesomeIcon onClick={props.onClose} icon="times" size="2x" />
      <NavLinks onClose={props.onClose} />
    </div>
  );
};

export default Menu;
