import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detect if the screen size is mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Toggle drawer open state
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(145deg, #0d0d0d, #1a1a1a)"
              : "linear-gradient(145deg, #ffffff, #f0f0f0)",
          boxShadow: `0 4px 20px ${theme.palette.primary.main}50`,
          backdropFilter: "blur(10px)",
          transition: "background 0.3s ease",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: theme.palette.primary.main,
              textShadow:
                theme.palette.mode === "dark"
                  ? "0 0 10px rgba(0, 255, 255, 0.8)"
                  : "0 0 10px rgba(0, 0, 0, 0.5)",
              transition: "color 0.3s ease",
              "&:hover": {
                color: theme.palette.primary.light,
              },
            }}
          >
            LOIGEN A. LARIOSA
          </Typography>

          {/* Menu Icon for Mobile */}
          {isMobile && (
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: "block", md: "none" },
                color:
                  theme.palette.mode === "light" ? "#000" : "#fff", // Set color based on theme mode
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
              style={{ display: "flex", gap: "1rem" }}
            >
              {["Home", "About", "Projects", "Contact"].map((text, index) => {
                const route = `/${text.toLowerCase()}`;
                const isActive = location.pathname === route;

                return (
                  <Button
                    key={index}
                    color="inherit"
                    component={Link}
                    to={route}
                    sx={{
                      position: "relative",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "0.875rem",
                      transition:
                        "color 0.3s ease, border-bottom 0.3s ease, transform 0.3s ease",
                      border: "none",
                      borderBottom: isActive
                        ? `2px solid ${theme.palette.primary.light}`
                        : "none",
                      color:
                        theme.palette.mode === "dark" && !isActive
                          ? "#f0f0f0"
                          : theme.palette.mode === "light" && !isActive
                          ? "black"
                          : theme.palette.primary.light,
                      boxShadow: "none",
                      "&:hover": {
                        color: theme.palette.primary.light,
                        borderBottom: `2px solid ${theme.palette.primary.light}`,
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {text}
                  </Button>
                );
              })}
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            background: "linear-gradient(145deg, #1e1e1e, #0d0d0d)",
            color: "#e0e0e0",
            width: 250,
            border: "none",
            borderRadius: "0 12px 12px 0",
            boxShadow: `0 4px 20px ${theme.palette.primary.main}50`,
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            LOIGEN
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ color: "#e0e0e0" }} />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "#333" }} />
        <List>
          {["Home", "About", "Projects", "Contact"].map((text, index) => {
            const route = `/${text.toLowerCase()}`;
            const isActive = location.pathname === route;

            return (
              <ListItem
                button
                key={index}
                component={Link}
                to={route}
                onClick={toggleDrawer(false)}
                sx={{
                  color: isActive ? theme.palette.primary.light : "#e0e0e0",
                  borderRadius: "8px",
                  transition: "background 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
