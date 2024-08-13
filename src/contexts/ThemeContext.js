import React, { createContext, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define the context with default values
const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: "light",
});

export const CustomThemeProvider = ({ children }) => {
  // Retrieve theme from local storage or default to "light"
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Effect to update local storage when the theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Determine MUI theme based on current theme state
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

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
