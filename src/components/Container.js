import React from "react";
import { Container as MuiContainer } from "@mui/material";

const Container = ({ children }) => (
  <MuiContainer style={{ marginTop: "1rem", marginBottom: "2rem" }}>
    {children}
  </MuiContainer>
);

export default Container;
