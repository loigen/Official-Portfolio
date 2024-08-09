import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const dotColors = ["#FF5733", "#33FF57", "#3357FF", "#F5FF33", "#FF33A8"];

const AnimatedDots = ({ visible }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setDots((prev) => [
          ...prev,
          {
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundColor:
              dotColors[Math.floor(Math.random() * dotColors.length)],
            key: Math.random(),
          },
        ]);
      }, 100);

      return () => clearInterval(interval);
    } else {
      setDots([]);
    }
  }, [visible]);

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
