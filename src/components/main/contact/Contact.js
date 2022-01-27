import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Contact.module.scss";
import ThemeContext from "../../../store/theme-context";

const Contact = () => {
  const { t } = useTranslation();
  const themeCtx = useContext(ThemeContext);

  const contactClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <section id="contact" className={contactClasses}>
      <div className={styles.content}>
        <h1>{t("contact_title")}</h1>
        <div className={styles.img_container}>
          <img
            src="https://nave.rs/assets/contact_desktop.png"
            alt="Equipe da Nave.rs"
          />
        </div>
        <ul className={styles.info_container}>
          <li className={styles.info_item}>
            <h2>{t("contact_information_title")}</h2>
            <p>hello@nave.rs</p>
          </li>
          <li className={styles.info_item}>
            <h2>{t("contact_business_title")}</h2>
            <p>
              business@nave.rs <br /> +55 53 99115-0666
            </p>
          </li>
          <li className={styles.info_item}>
            <h2>{t("contact_jobs_title")}</h2>
            <p>{t("contact_jobs_description")}</p>
          </li>
          <li className={styles.info_item}>
            <h2>{t("contact_partnerships_title")}</h2>
            <p>
              letsride@nave.rs <br /> +55 53 99115-0666
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
