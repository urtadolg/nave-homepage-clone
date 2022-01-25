import { createContext } from "react";

const ThemeContext = createContext({
  changeTheme: () => {},
  theme: false,
});

export default ThemeContext;
