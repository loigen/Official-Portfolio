import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";

const dotColors = {
  light: ["#FF5733", "#33FF57", "#3357FF", "#F5FF33", "#FF33A8"], // Light theme colors
  dark: ["#FF5722", "#4CAF50", "#2196F3", "#FFEB3B", "#E91E63"], // Dark theme colors
  mintGreen: ["#004d40", "#00796b", "#009688", "#004d40", "#80cbc4"], // Mint green theme colors
};

const AnimatedDots = ({ visible }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [dots, setDots] = useState([]);

  useEffect(() => {
    if (visible && isDesktop) {
      const interval = setInterval(() => {
        const themeMode = theme.palette.mode;
        setDots((prev) => [
          ...prev,
          {
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundColor:
              dotColors[themeMode][
                Math.floor(Math.random() * dotColors[themeMode].length)
              ],
            key: Math.random(),
          },
        ]);
      }, 100);

      return () => clearInterval(interval);
    } else {
      setDots([]);
    }
  }, [visible, isDesktop, theme.palette.mode]);

  if (!isDesktop) return null; // Do not render if not in desktop mode

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.key}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            opacity: 0.6,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
          }}
          exit={{ scale: 0, opacity: 0 }}
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            backgroundColor: dot.backgroundColor,
            top: dot.top,
            left: dot.left,
            pointerEvents: "none",
            transition: "all 0.5s ease",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedDots;
