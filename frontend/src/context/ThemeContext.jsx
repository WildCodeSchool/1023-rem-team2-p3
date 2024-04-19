import { createContext, useState } from "react";
import PropTypes from "prop-types";
// import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(window.localStorage.getItem("themeMode")); 
  window.localStorage.setItem("themeMode", theme); // storing in the local storage

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    );
    window.localStorage.setItem("themeMode", theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
