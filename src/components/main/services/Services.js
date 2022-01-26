import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Services.module.scss";
import ThemeContext from "../../../store/theme-context";

const Services = (props) => {
  const { t, i18n } = useTranslation();
  const themeCtx = useContext(ThemeContext);

  const servicesClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <section id="services" className={servicesClasses}>
      <h1 className={styles.title}>{t("services_title")}</h1>
      <div className={styles.services_details_container}>
        <ul className={styles.services_details}>
          <li className={styles.service_item}>
            <h2>_discovery</h2>
            <p>{t("services_discovery")}</p>
          </li>
          <li className={styles.service_item}>
            <h2>_experience and product design</h2>
            <p>{t("services_experience_and_product_design")}</p>
          </li>
          <li className={styles.service_item}>
            <h2>_digital products</h2>
            <p>{t("services_digital_products")}</p>
          </li>
          <li className={styles.service_item}>
            <h2>_outsorcing</h2>
            <p>{t("services_outsourcing")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
