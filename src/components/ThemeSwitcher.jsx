import { useState, useRef, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher" ref={dropdownRef}>
      <button
        className="theme-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
        aria-expanded={isOpen}
      >
        <i
          className={`hn ${theme === "dark" ? "hn-moon" : "hn-sun"}`}
          aria-hidden="true"
        ></i>
        <span className="theme-switcher-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="theme-switcher-dropdown">
          <button
            className={`theme-option ${theme === "dark" ? "active" : ""}`}
            onClick={() => handleThemeChange("dark")}
            aria-label="Dark Mode"
          >
            <i className="hn hn-moon" aria-hidden="true"></i>
          </button>
          <button
            className={`theme-option ${theme === "light" ? "active" : ""}`}
            onClick={() => handleThemeChange("light")}
            aria-label="Light Mode"
          >
            <i className="hn hn-sun" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

