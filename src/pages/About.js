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
  programmingLanguages: [
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "PHP", url: "https://www.php.net/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Java", url: "https://www.oracle.com/java/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  ],
  frameworks: [
    { name: "React", url: "https://reactjs.org/" },
    { name: "Next.js", url: "https://nextjs.org/" },
    { name: "Express.js", url: "https://expressjs.com/" },
    { name: "React Native", url: "https://reactnative.dev/" },
    { name: "ASP.NET", url: "https://dotnet.microsoft.com/apps/aspnet" },
  ],
  toolsAndTechnologies: [
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    { name: "Sass", url: "https://sass-lang.com/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "SQL", url: "https://www.sql.org/" },
    { name: "Figma", url: "https://www.figma.com/" },
    {
      name: "AI Management",
      url: "https://www.hostinger.com/tutorials/ai-for-websites",
    },
    { name: "Material UI", url: "https://mui.com/" },
    { name: "Shadcn UI", url: "https://ui.shadcn.com/" },
    { name: "Bootstrap", url: "https://getbootstrap.com/" },
  ],
  roles: [
    {
      name: "Mobile App Developer",
      url: "https://www.ibm.com/topics/mobile-application-development#:~:text=Mobile%20application%20development%20is%20the%20process%20of,making%20software%20for%20smartphones%2C%20tablets%20and%20digital%20assistants.",
    },
    {
      name: "Web Developer",
      url: "https://www.geeksforgeeks.org/web-development/",
    },
    {
      name: "Full Stack Developer",
      url: "https://www.coursera.org/articles/full-stack-developer",
    },
  ],
};

const About = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const mintGreenStroke = isDarkMode ? "0 0 1px #98FF98, 0 0 2px #98FF98" : "";

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
                textShadow: mintGreenStroke,
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
            textShadow: mintGreenStroke,
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
            textShadow: mintGreenStroke,
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
            backgroundColor: isDarkMode ? "#1E1E1E" : "#F5F5F5",
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
              textShadow: mintGreenStroke,

              color: isDarkMode ? "#E0E0E0" : "#333",
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {Object.entries(skills).map(([category, items]) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={category}>
                <Box
                  sx={{
                    padding: "1.5rem",
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    borderRadius: "16px",
                    boxShadow: `0 4px 20px ${
                      isDarkMode ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.15)"
                    }`,
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: `0 6px 25px ${
                        isDarkMode ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)"
                      }`,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      marginBottom: "1.2rem",
                      color: isDarkMode ? "#ffffff" : "#333333",
                      fontWeight: 600,
                      fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    }}
                  >
                    {category
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </Typography>
                  {items.map((skill, index) => (
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <Chip
                        label={skill.name}
                        color="primary"
                        variant="outlined"
                        sx={{
                          margin: "0.3rem",
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          fontWeight: 500,
                          borderRadius: "8px",
                        }}
                      />
                    </a>
                  ))}
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
