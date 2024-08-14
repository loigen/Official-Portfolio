import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";
import { motion, useAnimation } from "framer-motion";
import Swal from "sweetalert2";

import wordsData from "../data/words.json";

const scrambleWord = (word) => {
  let scrambled = word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return scrambled;
};

const getAlertStyle = (isLightTheme) => ({
  customClass: {
    container: "swal-container",
    popup: isLightTheme ? "swal-popup-light" : "swal-popup-dark",
    title: "swal-title",
    content: "swal-content",
    confirmButton: isLightTheme ? "swal-confirm-light" : "swal-confirm-dark",
    cancelButton: isLightTheme ? "swal-cancel-light" : "swal-cancel-dark",
  },
  backdrop: `rgba(${isLightTheme ? "255, 255, 255" : "0, 0, 0"}, 0.4)`,
});

const NoInternetConnection = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem("highScore")) || 0
  );
  const controls = useAnimation();

  useEffect(() => {
    generateNewWord();
  }, []);

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsData.length);
    const word = wordsData[randomIndex];
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === currentWord.toLowerCase()) {
      controls
        .start({
          scale: 1.2,
          opacity: 0.8,
          transition: { duration: 0.2 },
        })
        .then(() => {
          controls.start({ scale: 1, opacity: 1 });
        });

      const newScore = score + 1;
      setScore(newScore);
      generateNewWord();

      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem("highScore", newScore);
      }

      Swal.fire({
        title: "Correct!",
        text: "You guessed the word right!",
        icon: "success",
        ...getAlertStyle(isLightTheme),
      });
    } else {
      Swal.fire({
        title: "Incorrect!",
        text: "Try again or skip to another word.",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Try Again",
        cancelButtonText: "Skip",
        ...getAlertStyle(isLightTheme),
      }).then((result) => {
        if (result.isConfirmed) {
          setUserGuess("");
        } else if (result.isDismissed) {
          generateNewWord();
          setUserGuess("");
        }
      });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="85vh"
      sx={{
        background: isLightTheme
          ? "linear-gradient(to right, #f0f0f0, #ffffff)"
          : "linear-gradient(to right, #1e1e1e, #333333)",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: isLightTheme ? "#000" : "#fff" }}
      >
        No Internet Connection
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: isLightTheme ? "#000" : "#fff", marginBottom: "2rem" }}
      >
        It seems like you are not connected to the internet. Please check your
        connection and the site will automatically refresh.
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: isLightTheme ? "#000" : "#fff", marginBottom: "1rem" }}
      >
        Guess the Word!
      </Typography>
      <Typography
        variant="body2"
        paragraph
        sx={{ color: isLightTheme ? "#000" : "#fff", marginBottom: "1rem" }}
      >
        Current Score: {score} | High Score: {highScore}
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: isLightTheme ? "#000" : "#fff", marginBottom: "1rem" }}
      >
        Scrambled Word: {scrambledWord}
      </Typography>
      <TextField
        variant="outlined"
        label="Your Guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        sx={{ marginBottom: "1rem" }}
      />
      <Button
        variant="contained"
        onClick={handleGuess}
        sx={{ marginBottom: "1rem" }}
      >
        Guess
      </Button>
    </Box>
  );
};

export default NoInternetConnection;
