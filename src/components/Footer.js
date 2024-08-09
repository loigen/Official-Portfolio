import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      style={{
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        padding: "20px 0",
        borderTop: `1px solid ${
          theme.palette.mode === "light"
            ? theme.palette.divider
            : "rgba(255, 255, 255, 0.12)"
        }`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          style={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: "2px",
              marginBottom: "8px",
              color: theme.palette.text.primary,
            }}
          >
            LOIGEN LARIOSA
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontFamily: "'Roboto', sans-serif",
              color: theme.palette.text.secondary,
            }}
          >
            {"© "}
            <Link
              color="inherit"
              href="https://official-portfolio-tan-alpha.vercel.app/about"
              style={{
                color: theme.palette.primary.main,
                textShadow:
                  theme.palette.mode === "light"
                    ? "none"
                    : "0 0 8px rgba(0, 212, 255, 0.7)",
              }}
            >
              Loigen
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
