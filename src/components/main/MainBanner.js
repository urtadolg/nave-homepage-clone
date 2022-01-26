import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./MainBanner.module.scss";
import ThemeContext from "../../store/theme-context";

const MainBanner = (props) => {
  const themeCtx = useContext(ThemeContext);

  const mainBannerClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  const { t, i18n } = useTranslation();

  return (
    <section className={mainBannerClasses}>
      <div>
        <p>
          <b>nave.rs</b>
          {t("main_header_nave_description")}
        </p>
        <div className={styles.big_circle} />
        <div className={styles.small_circle} />
        <a className={styles.btn_about_us} href="#about-us">
          <svg width="42" height="20" viewBox="0 0 42 20" fill="none">
            <path
              d="M41 2L21 18L0.999999 2"
              stroke="white"
              strokeWidth="3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default MainBanner;
