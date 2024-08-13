import React, { useEffect, useState } from "react";
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
import { useTheme } from "@mui/material/styles";
import { useSpring, animated } from "@react-spring/web";
import avatarImage1 from "../assets/avatar.jpg";
import avatarImage2 from "../assets/avatar1.jpg";

const typingText = "Welcome, Let's Work Together.";
const replaceText = "I am Loigen Lariosa";

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

const Home = () => {
  const theme = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const isDarkMode = theme.palette.mode === "dark";
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const mintGreenStroke = isDarkMode ? "0 0 1px #00bfae, 0 0 5px #00bfae" : "";
  const avatarImages = [avatarImage1, avatarImage2];

  const [springProps, setSpringProps] = useSpring(() => ({
    text: "",
    config: { duration: 50 },
  }));

  useEffect(() => {
    const typingSpeed = 100;
    const replaceDelay = 3000;
    const replaceSpeed = 100;

    const typeText = (text) => {
      let index = 0;
      const typingInterval = setInterval(() => {
        setSpringProps({ text: text.substring(0, index + 1) });
        index += 1;
        if (index > text.length) {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(!isTyping), replaceDelay);
        }
      }, typingSpeed);
    };

    typeText(isTyping ? typingText : replaceText);
  }, [isTyping, setSpringProps]);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setAvatarIndex((prevIndex) => (prevIndex + 1) % avatarImages.length);
        setFlipped(false);
      }, 500);
    }, 4000);

    return () => clearInterval(flipInterval);
  }, []);

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
        <Box
          sx={{
            perspective: "1000px",
            width: { xs: 150, sm: 200, md: 250 },
            margin: "0 auto",
          }}
        >
          <Avatar
            src={avatarImages[avatarIndex]}
            alt="Avatar"
            sx={{
              width: { xs: 150, sm: 200, md: 250 },
              height: { xs: 150, sm: 200, md: 250 },
              border: `6px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 30px ${theme.palette.primary.main}60`,
              transition: "transform 0.5s ease",
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              backfaceVisibility: "hidden",
              "&:hover": {
                transform: `scale(1.15) ${
                  flipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }`,
                boxShadow: `0 0 40px ${theme.palette.primary.main}80`,
              },
            }}
          />
        </Box>
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <animated.div
            style={{
              ...springProps,
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: `2px solid ${theme.palette.primary.main}`,
              fontSize: { xs: "5rem", sm: "6rem" },
              fontWeight: 700,
              marginTop: "1rem",
              marginBottom: "1rem",
              letterSpacing: "0.5rem",
              textShadow: `1px 1px 4px ${theme.palette.text.primary}50`,
              color: theme.palette.text.primary,
              whiteSpace: "pre",
              display: "inline-block",
            }}
          >
            {springProps.text}
          </animated.div>
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
              sx={{
                marginBottom: "2rem",
                fontWeight: 700,
                textShadow: mintGreenStroke,
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
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
