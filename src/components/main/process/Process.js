import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Process.module.scss";
import ThemeContext from "../../../store/theme-context";

const Process = (props) => {
  const { t, i18n } = useTranslation();
  const themeCtx = useContext(ThemeContext);

  const processClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <section id="process" className={processClasses}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("process_title")}</h1>

        <ul className={styles.process_list}>
          <li className={styles.process_item}>
            <h2>{t("process_understand")}</h2>
            <p>{t("process_understand_description")}</p>
            <span>01</span>
          </li>
          <li className={styles.process_item}>
            <h2>{t("process_explore")}</h2>
            <p>{t("process_explore_description")}</p>
            <span>02</span>
          </li>
          <li className={styles.process_item}>
            <h2>{t("process_materialize")}</h2>
            <p>{t("process_materialize_description")}</p>
            <span>03</span>
          </li>
          <li className={styles.process_item}>
            <h2>{t("process_improve")}</h2>
            <p>{t("process_improve_description")}</p>
            <span>04</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Process;
