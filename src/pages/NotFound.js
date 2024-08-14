import React from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="85vh"
      sx={{
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(to right, #e3f2fd, #bbdefb, #90caf9)"
            : "linear-gradient(to right, #1E1E1E, #333333, #121212)",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center" mb={4}>
          <img
            src="https://img1.picmix.com/output/stamp/normal/8/7/4/5/1585478_71134.gif"
            alt="Not Found"
            style={{ width: "16rem", height: "16rem" }}
          />
        </Box>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: "6rem",
            fontWeight: "bold",
            color: theme.palette.text.primary,
            textShadow: `2px 2px 5px rgba(${
              theme.palette.mode === "light" ? "0,0,0,0.5" : "255,255,255,0.5"
            })`,
            animation: "bounce 2s infinite",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "medium",
            color: theme.palette.text.primary,
            textShadow: `1px 1px 3px rgba(${
              theme.palette.mode === "light" ? "0,0,0,0.3" : "255,255,255,0.3"
            })`,
            marginBottom: "1.5rem",
          }}
        >
          Oops! You're lost in Space
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: theme.palette.text.primary,
            marginBottom: "2rem",
            textShadow: `1px 1px 2px rgba(${
              theme.palette.mode === "light" ? "0,0,0,0.3" : "255,255,255,0.3"
            })`,
          }}
        >
          It seems like the page you're looking for doesn't exist or might have
          been moved.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#ffffff" : "#424242",
            color:
              theme.palette.mode === "light"
                ? theme.palette.primary.main
                : "#ffffff",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "50px",
            boxShadow: `0px 4px 10px rgba(${
              theme.palette.mode === "light" ? "0,0,0,0.3" : "255,255,255,0.3"
            })`,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "light"
                  ? theme.palette.primary.main
                  : "#555555",
              color: "#ffffff",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            },
          }}
        >
          Go Back Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;
