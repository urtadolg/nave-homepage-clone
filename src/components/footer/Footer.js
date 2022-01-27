import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.scss";
import ThemeContext from "../../store/theme-context";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const themeCtx = useContext(ThemeContext);

  const footerClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <footer id="footer" className={footerClasses}>
      <div className={styles.quote_logo_container}>
        <h1>{t("footer_quote")}</h1>
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
      <div className={styles.address_social_container}>
        <ul className={styles.address_list_container}>
          <li className={styles.address_item}>
            <h2>Pelotas, {t("footer_address_country")}</h2>
            <p>{t("footer_address_street_pelotas")}</p>
            <span>hello.pel@nave.rs</span>
          </li>
          <li className={styles.address_item}>
            <h2>Porto Alegre, {t("footer_address_country")}</h2>
            <p>{t("footer_address_street_porto_alegre")}</p>
            <span>hello.poa@nave.rs</span>
          </li>
        </ul>

        <ul className={styles.social_list_container}>
          <li className={styles.social_item}>
            <FontAwesomeIcon size="lg" icon={["fab", "linkedin-in"]} />
          </li>
          <li>
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </li>
          <li>
            <FontAwesomeIcon size="lg" icon={["fab", "medium-m"]} />
          </li>
          <li>
            <FontAwesomeIcon size="lg" icon={["fab", "youtube"]} />
          </li>
          <li>
            <FontAwesomeIcon size="lg" icon={["fab", "github"]} />
          </li>
          <li>
            <FontAwesomeIcon size="lg" icon={["fab", "behance"]} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
