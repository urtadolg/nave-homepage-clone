import React, { useState } from "react";
import i18next from "i18next";

import styles from "./LangSelector.module.scss";

const LangSelector = (props) => {
  const [isPtSelected, setIsPtSelected] = useState(true);
  const optionPtHandler = () => {
    i18next.changeLanguage("pt");
    setIsPtSelected(true);
  };

  const optionEnHandler = () => {
    i18next.changeLanguage("en");
    setIsPtSelected(false);
  };

  return (
    <div className={styles.container}>
      <span
        style={
          isPtSelected === true
            ? { fontWeight: "700" }
            : { fontWeight: "normal" }
        }
        className={styles.langOption}
        onClick={optionPtHandler}
      >
        pt
      </span>
      <span
        style={
          isPtSelected === false
            ? { fontWeight: "700" }
            : { fontWeight: "normal" }
        }
        className={styles.langOption}
        onClick={optionEnHandler}
      >
        en
      </span>
    </div>
  );
};

export default LangSelector;
