import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./NavLinks.module.scss";
import ThemeContext from "../../store/theme-context";

const NavLinks = (props) => {
  const { t, i18n } = useTranslation();

  const themeCtx = useContext(ThemeContext);

  const navLinksClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <ul className={`${navLinksClasses} ${props.className}`}>
      <li>
        <a onClick={props.onClose ? props.onClose : null} href="#about_us">
          {t("nav_link_about_us")}
        </a>
      </li>
      <li>
        <a onClick={props.onClose ? props.onClose : null} href="#services">
          {t("nav_link_services")}
        </a>
      </li>
      <li>
        <a onClick={props.onClose ? props.onClose : null} href="#process">
          {t("nav_link_process")}
        </a>
      </li>
      <li>
        <a onClick={props.onClose ? props.onClose : null} href="#clients">
          {t("nav_link_clients")}
        </a>
      </li>
      <li>
        <a onClick={props.onClose ? props.onClose : null} href="#contact">
          {t("nav_link_contact")}
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
