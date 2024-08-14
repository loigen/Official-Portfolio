import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Footer from "./components/Footer";
import NoInternetConnection from "./pages/NoInternetConnection";
import { CustomThemeProvider, useTheme } from "./contexts/ThemeContext";

const AppContent = () => {
  const { theme } = useTheme();
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      window.location.reload();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div style={{ paddingTop: "64px" }}>
      {isOnline ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <NoInternetConnection />
      )}
    </div>
  );
};

const App = () => (
  <CustomThemeProvider>
    <Router>
      <CssBaseline />
      <Navbar />
      <AppContent />
      <ThemeToggleButton />
      <Footer />
    </Router>
  </CustomThemeProvider>
);

export default App;
