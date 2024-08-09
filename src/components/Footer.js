import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Footer = () => (
  <footer>
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        {"© "}
        <Link color="inherit" href="https://yourwebsite.com/">
          Your Name
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  </footer>
);

export default Footer;
