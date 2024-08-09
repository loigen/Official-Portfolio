import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { CustomThemeProvider } from "./contexts/ThemeContext";

const App = () => (
  <CustomThemeProvider>
    <Router>
      <CssBaseline />
      <Navbar />
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <ThemeToggleButton />
    </Router>
  </CustomThemeProvider>
);

export default App;
