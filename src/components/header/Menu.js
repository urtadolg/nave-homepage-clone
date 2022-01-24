import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./Menu.module.scss";
import NavLinks from "./NavLinks";

const Menu = (props) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon onClick={props.onClose} icon="times" size="2x" />
      <NavLinks onClose={props.onClose} />
    </div>
  );
};

export default Menu;
