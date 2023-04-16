import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const darkQueryPreference = "(prefer-color-scheme: dark)";
  const [themeMode, setThemeMode] = useState(null);

  useEffect(() => {
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", themeMode === "dark");
    };

    const mediaQuery = window.matchMedia(darkQueryPreference);
    const themeChangeHandler = () => {
      const currentMode = mediaQuery.matches ? "dark" : "light";
      setThemeMode(currentMode);
    };

    const initTheme = () => {
      const userPreference = window.localStorage.getItem("themeMode");
      const initialTheme = userPreference || (mediaQuery.matches ? "dark" : "light");
      setThemeMode(initialTheme);
    };

    initTheme();
    applyTheme();
    mediaQuery.addEventListener("change", themeChangeHandler);

    return () => mediaQuery.removeEventListener("change", themeChangeHandler);
  }, [themeMode]);

  const toggleTheme = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    window.localStorage.setItem("themeMode", newThemeMode);
    setThemeMode(newThemeMode);
  };

  return [themeMode, toggleTheme];
};

export default useThemeSwitcher;
