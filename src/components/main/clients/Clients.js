import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Clients.module.scss";
import ThemeContext from "../../../store/theme-context";

const Clients = () => {
  const { t } = useTranslation();
  const themeCtx = useContext(ThemeContext);

  const clientsClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <section id="clients" className={clientsClasses}>
      <div className={styles.content}>
        <h1>{t("clients")}</h1>
        <div className={styles.clients_logo_container}>
          <img src="https://nave.rs/assets/abc.png" alt="Banco ABC Brasil" />
          <img src="https://nave.rs/assets/vittude.png" alt="Vittude" />
          <img src="https://nave.rs/assets/blox.png" alt="Blox" />
          <img
            src="https://nave.rs/assets/seb.png"
            alt="Grupo SEB Sistema Educacional Brasileiro"
          />
          <img src="https://nave.rs/assets/bxblue.png" alt="Bxblue" />
          <img
            src="https://nave.rs/assets/scaffold.png"
            alt="Scaffold Education"
          />
          <img src="https://nave.rs/assets/safras.png" alt="Safras e Cifras" />
          <img
            src="https://nave.rs/assets/melhor-envio.png"
            alt="Melhor envio"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
