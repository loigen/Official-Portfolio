import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Modal,
} from "@mui/material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import AMS from "../assets/AMS.png";
import Brokerage from "../assets/Brokerage.png";
import Insurance from "../assets/Insurance.png";
import MLWallet from "../assets/MLwallet.png";

const projectData = [
  {
    title: "ML Brokerage",
    description:
      "Developed and maintained the ML Brokerage platform, focusing on real estate management with features for property listing, client management, and transaction processing.",
    image: Brokerage,
  },
  {
    title: "ML Insurance",
    description:
      "Worked on the ML Insurance system, enhancing insurance services with features for policy management, claims processing, and customer support.",
    image: Insurance,
  },
  {
    title: "ML Wallet Mobile App",
    description:
      "Designed and developed the ML Wallet mobile application, enabling users to manage their finances, track transactions, and handle payments efficiently.",
    image: MLWallet,
  },
  {
    title: "Appointment Management System",
    description:
      "Created a comprehensive Appointment Management System for my capstone project, featuring scheduling, notifications, and a messaging system for efficient communication.",
    image: AMS,
  },
];

const Projects = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const mintGreenStroke = isDarkMode ? "0 0 1px #98FF98, 0 0 2px #98FF98" : "";

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container
      sx={{
        marginTop: "5rem",
        padding: "2rem",
        backgroundColor: isDarkMode ? "#121212" : "#F5F5F5",
        overflow: "hidden",
      }}
    >
      {/* Featured Projects Section */}
      <Element name="projects">
        <Typography
          variant="h4"
          sx={{
            color: isDarkMode ? "#E0E0E0" : "#333",
            fontWeight: 700,
            marginBottom: "2rem",
            textAlign: "center",
            position: "relative",
            textShadow: mintGreenStroke,
          }}
        >
          Featured Projects
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              width: "100%",
              height: "2px",
              background: isDarkMode
                ? "linear-gradient(90deg, rgba(71, 145, 219, 0.7), rgba(200, 158, 252, 0.7))"
                : "linear-gradient(90deg, rgba(71, 145, 219, 0.3), rgba(200, 158, 252, 0.3))",
              transform: "translateY(-50%)",
              zIndex: -1,
            }}
          />
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <Card
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                    boxShadow: `0px 8px 24px ${
                      isDarkMode
                        ? "rgba(152, 255, 152, 0.4)" // Mint green shadow in dark mode
                        : "rgba(0,0,0,0.2)"
                    }`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: `0px 12px 32px ${
                        isDarkMode
                          ? "rgba(152, 255, 152, 0.6)" // Darker mint green shadow on hover in dark mode
                          : "rgba(0,0,0,0.3)"
                      }`,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: isDarkMode
                          ? "linear-gradient(135deg, rgba(71, 145, 219, 0.2), rgba(200, 158, 252, 0.2))"
                          : "linear-gradient(135deg, rgba(71, 145, 219, 0.1), rgba(200, 158, 252, 0.1))",
                        zIndex: -1,
                        opacity: 0.3,
                      },
                    },
                  }}
                  onClick={() => handleOpen(project)}
                >
                  <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        color: isDarkMode ? "#E0E0E0" : "#333",
                        fontWeight: 600,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={isDarkMode ? "#B0B0B0" : "#666"}
                      sx={{ marginTop: "0.5rem" }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Image Preview */}
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              maxWidth: "900px",
              bgcolor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
              borderRadius: "12px",
              boxShadow: 24,
              p: 4,
              outline: "none",
            }}
          >
            {selectedProject && (
              <>
                <CardMedia
                  component="img"
                  image={selectedProject.image}
                  alt={selectedProject.title}
                  sx={{
                    width: "100%",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    marginBottom: "1rem",
                  }}
                />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: isDarkMode ? "#E0E0E0" : "#333",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {selectedProject.title}
                </Typography>
                <Typography
                  variant="body1"
                  color={isDarkMode ? "#B0B0B0" : "#666"}
                  sx={{ marginTop: "1rem", textAlign: "center" }}
                >
                  {selectedProject.description}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Element>
    </Container>
  );
};

export default Projects;
