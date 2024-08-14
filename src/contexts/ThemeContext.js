import React, { createContext, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: "light",
});

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeMode = theme === "light" ? "light" : "dark";

  const muiTheme = createTheme({
    palette: {
      mode: themeMode,
      ...(themeMode === "light"
        ? {
            primary: { main: "#1976d2" },
            background: { default: "#f0f0f0", paper: "#ffffff" },
            text: { primary: "#000000" },
          }
        : {
            primary: { main: "#00bfae" },
            background: { default: "#121212", paper: "#1e1e1e" },
            text: { primary: "#ffffff" },
          }),
    },
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
