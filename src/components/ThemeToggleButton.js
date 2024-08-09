import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";
import AnimatedDots from "./AnimatedDots";

const positions = [
  { bottom: "2rem", left: "2rem" },
  { bottom: "2rem", right: "2rem" },
];

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();
  const [position, setPosition] = useState(positions[0]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const currentIndex = positions.indexOf(prev);
        const nextIndex = (currentIndex + 1) % positions.length;
        return positions[nextIndex];
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatedDots visible={hover} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { type: "spring", bounce: 0.5 },
        }}
        style={{
          position: "fixed",
          zIndex: 1000,
          ...position,
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            borderRadius: "50%",
            backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ThemeToggleButton;
