import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const skills = {
  programmingLanguages: ["JavaScript", "TypeScript", "Java", "Python", "C#"],
  frameworks: ["React", "Next.js","Express.js", "React Native", "ASP.NET"],
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

const About = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Container
      sx={{
        marginTop: "5rem",
        padding: "2rem",
        backgroundColor: isDarkMode ? "#121212" : "#F5F5F5",
      }}
    >
      {/* Introduction Section */}
      <Element name="introduction">
        <Box sx={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: isDarkMode ? "#E0E0E0" : "#333",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{ color: isDarkMode ? "#B0B0B0" : "#666" }}
            >
              I'm a Full-Stack developer with a passion for creating innovative
              solutions and engaging user experiences.
            </Typography>
          </motion.div>
        </Box>
      </Element>

      {/* Experience Section */}
      <Element name="experience">
        <Typography
          variant="h4"
          sx={{
            color: isDarkMode ? "#E0E0E0" : "#333",
            fontWeight: 700,
            marginBottom: "2rem",
          }}
        >
          Experience
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card
                sx={{
                  borderRadius: "12px",
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                  boxShadow: `0px 4px 15px ${
                    isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
                  }`,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: isDarkMode ? "#E0E0E0" : "#333",
                      fontWeight: 600,
                    }}
                  >
                    Full Stack Developer
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDarkMode ? "#B0B0B0" : "#666"}
                  >
                    Led the development of complex web applications, integrating
                    frontend and backend technologies to deliver complete
                    solutions.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card
                sx={{
                  borderRadius: "12px",
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                  boxShadow: `0px 4px 15px ${
                    isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
                  }`,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: isDarkMode ? "#E0E0E0" : "#333",
                      fontWeight: 600,
                    }}
                  >
                    Mobile App Developer
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDarkMode ? "#B0B0B0" : "#666"}
                  >
                    Designed and developed mobile applications with a focus on
                    user experience and performance across multiple platforms.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Element>

      {/* Skills Section */}
      <Element name="skills">
        <Typography
          variant="h4"
          sx={{
            color: isDarkMode ? "#E0E0E0" : "#333",
            fontWeight: 700,
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          Most Mastered
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card
                sx={{
                  borderRadius: "12px",
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                  boxShadow: `0px 4px 15px ${
                    isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
                  }`,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: isDarkMode ? "#E0E0E0" : "#333",
                      fontWeight: 600,
                    }}
                  >
                    JavaScript
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDarkMode ? "#B0B0B0" : "#666"}
                  >
                    Proficient in modern JavaScript frameworks and libraries.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginTop: "2rem",
            padding: "2rem",
            background: isDarkMode ? "#1E1E1E" : "#FFFFFF",
            borderRadius: "12px",
            boxShadow: `0px 4px 20px ${
              isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
            }`,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginBottom: "2rem",
              fontWeight: 700,
              color: isDarkMode ? "#E0E0E0" : "#333",
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(skills).map(([category, items]) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <Box
                  sx={{
                    padding: "1rem",
                    background: isDarkMode ? "#2E2E2E" : "#F5F5F5",
                    borderRadius: "12px",
                    boxShadow: `0 2px 10px ${
                      isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
                    }`,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      marginBottom: "1rem",
                      color: isDarkMode ? "#E0E0E0" : "#333",
                    }}
                  >
                    {category.charAt(0).toUpperCase() +
                      category.slice(1).replace(/([A-Z])/g, " $1")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      justifyContent: "center",
                    }}
                  >
                    {items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{
                          backgroundColor: isDarkMode
                            ? "rgb(200, 158, 252)"
                            : "rgb(71, 145, 219)",
                          color: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                          margin: "0.2rem",
                          borderRadius: "8px",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Element>
    </Container>
  );
};

export default About;
