import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./AboutUs.module.scss";
import ThemeContext from "../../../store/theme-context";

const AboutUs = (props) => {
  const { t, i18n } = useTranslation();

  const themeCtx = useContext(ThemeContext);

  const aboutUsClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <section className={aboutUsClasses}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("about_us_title")}</h1>
        <div className={styles.desc_container}>
          <p className={styles.desc}>{t("about_us_description_p1")}</p>
          <p className={styles.desc}>{t("about_us_description_p2")}</p>
          <p className={styles.desc}>{t("about_us_description_p3")}</p>
        </div>
        <h2 className={styles.quote}>{t("about_us_quote")}</h2>
        <div className={styles.circle} />
      </div>
    </section>
  );
};

export default AboutUs;
