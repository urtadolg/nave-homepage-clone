import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./SenecaQuote.module.scss";
import ThemeContext from "../../../store/theme-context";

const SenecaQuote = (props) => {
  const { t, i18n } = useTranslation();

  const themeCtx = useContext(ThemeContext);

  const senecaQuoteClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <section className={senecaQuoteClasses}>
      <div className={styles.content}>
        <p>{t("seneca_quote_text")}</p>
        <span className={styles.author}>_Seneca</span>
      </div>
    </section>
  );
};

export default SenecaQuote;
