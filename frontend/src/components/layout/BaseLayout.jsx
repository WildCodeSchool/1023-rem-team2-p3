import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MoonIcon from "../../assets/icons/moon.svg";
import SunIcon from "../../assets/icons/sun.svg";
import { DARK_THEME, LIGHT_THEME } from "../../constants/themeConstants";
import { ThemeContext } from "../../context/ThemeContext";
import Sidebar from "../sidebar/Sidebar";

function BaseLayout() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Permet d'ajouter le dark mode

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <div className="relative page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          alt="theme-icon"
        />
      </button>
    </div>
  );
}

export default BaseLayout;
