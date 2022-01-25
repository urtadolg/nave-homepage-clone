import React, { useState } from "react";
import ThemeContext from "./theme-context";

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("Light");

  const changeTheme = (newTheme) => setTheme(newTheme);

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        theme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
