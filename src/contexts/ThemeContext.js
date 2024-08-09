import React, { createContext, useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: "light",
});

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

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
            primary: { main: "#bb86fc" },
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
