import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  Grid,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import avatarImage from "../assets/avatar.jpg";

const skills = {
  programmingLanguages: ["JavaScript", "TypeScript", "Java", "Python", "C#"],
  frameworks: ["React", "Next.js", "Express.js", "React Native", "ASP.NET"],
  toolsAndTechnologies: [
    "Node.js",
    "Tailwind CSS",
    "Sass",
    "MongoDB",
    "SQL",
    "Figma",
    "AI Management",
    "Material UI",
    "Shadcn UI",
    "bootstrap",
  ],
  roles: ["Mobile App Developer", "Web Developer", "Full Stack Developer"],
};

const Home = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        width: "100vw",
        marginTop: "2rem",
        padding: "1rem",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "4rem 2rem",
          background: theme.palette.background.paper,
          borderRadius: "16px",
          boxShadow: `0px 8px 30px ${theme.palette.text.primary}60`,
          color: theme.palette.text.primary,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "120%",
            height: "120%",
            background: `radial-gradient(circle, ${theme.palette.primary.main}40, transparent)`,
            zIndex: -1,
            filter: "blur(20px)",
            transform: "scale(1.5)",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Avatar
            src={avatarImage}
            alt="Avatar"
            sx={{
              width: { xs: 120, sm: 150 },
              height: { xs: 120, sm: 150 },
              margin: "0 auto",
              border: `6px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 30px ${theme.palette.primary.main}60`,
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.15)",
                boxShadow: `0 0 40px ${theme.palette.primary.main}80`,
              },
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "1rem",
              letterSpacing: "0.5rem",
              textShadow: `1px 1px 4px ${theme.palette.text.primary}50`,
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Welcome, Let's Work Together.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              marginBottom: "2rem",
              lineHeight: 1.6,
              maxWidth: "800px",
              margin: "0 auto",
              textShadow: `0 0 8px ${theme.palette.text.primary}30`,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            I'm a Software Developer focused on creating modern, visually
            engaging applications using cutting-edge technologies. Skilled in
            JavaScript, TypeScript, Java, Python, and C#, I work with frameworks
            like React, Next.js, and ASP.NET. My experience spans web and mobile
            development, with a strong command of tools like Node.js, Tailwind
            CSS, and MongoDB to deliver innovative, high-quality solutions.
          </Typography>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "0.75rem 2rem",
                fontWeight: 600,
                fontSize: { xs: "0.875rem", sm: "1.1rem" },
                borderRadius: "50px",
                boxShadow: `0 4px 15px ${theme.palette.primary.main}50`,
                transition: "background 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  background: theme.palette.primary.dark,
                  transform: "scale(1.1)",
                  boxShadow: `0 6px 20px ${theme.palette.primary.main}60`,
                },
              }}
            >
              Explore My Work
            </Button>
          </Link>
        </motion.div>

        {/* Skills Section */}
        <Box
          sx={{
            marginTop: "4rem",
            padding: "2rem",
            background: theme.palette.background.default,
            borderRadius: "12px",
            boxShadow: `0px 4px 20px ${theme.palette.text.primary}30`,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ marginBottom: "2rem", fontWeight: 700 }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={3}>
            {/* Programming Languages */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  padding: "1rem",
                  background: theme.palette.background.paper,
                  borderRadius: "12px",
                  boxShadow: `0 2px 10px ${theme.palette.text.primary}20`,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ marginBottom: "1rem" }}
                >
                  Programming Languages
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  {skills.programmingLanguages.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        margin: "0.2rem",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Frameworks */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  padding: "1rem",
                  background: theme.palette.background.paper,
                  borderRadius: "12px",
                  boxShadow: `0 2px 10px ${theme.palette.text.primary}20`,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ marginBottom: "1rem" }}
                >
                  Frameworks
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  {skills.frameworks.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        margin: "0.2rem",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Tools and Technologies */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  padding: "1rem",
                  background: theme.palette.background.paper,
                  borderRadius: "12px",
                  boxShadow: `0 2px 10px ${theme.palette.text.primary}20`,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ marginBottom: "1rem" }}
                >
                  Tools & Technologies
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  {skills.toolsAndTechnologies.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        margin: "0.2rem",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Roles */}
            <Grid item xs={12}>
              <Box
                sx={{
                  padding: "1rem",
                  background: theme.palette.background.paper,
                  borderRadius: "12px",
                  boxShadow: `0 2px 10px ${theme.palette.text.primary}20`,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ marginBottom: "1rem" }}
                >
                  Roles
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  {skills.roles.map((role) => (
                    <Chip
                      key={role}
                      label={role}
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        margin: "0.2rem",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
