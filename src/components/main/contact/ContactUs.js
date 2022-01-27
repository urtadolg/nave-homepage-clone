import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./ContactUs.module.scss";
import ThemeContext from "../../../store/theme-context";

const ContactUs = () => {
  const { t } = useTranslation();
  const themeCtx = useContext(ThemeContext);

  const contactUsClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <section id="contactUs" className={contactUsClasses}>
      <h1>{t("contact_us_title")}</h1>
      <p>{t("contact_us_description")}</p>
      <button>{t("contact_us_btn_label")}</button>
      <div className={styles.circle} />
    </section>
  );
};

export default ContactUs;
