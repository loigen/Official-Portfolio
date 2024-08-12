import React from "react";
import { Container, Typography, Box, Link, Divider } from "@mui/material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
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
      {/* Contact Information */}
      <Element name="contact-info">
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "4rem",
            padding: "2rem",
            backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
            borderRadius: "12px",
            boxShadow: `0px 4px 20px ${
              isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
            }`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: isDarkMode
                ? "linear-gradient(135deg, rgba(71, 145, 219, 0.2), rgba(200, 158, 252, 0.2))"
                : "linear-gradient(135deg, rgba(71, 145, 219, 0.2), rgba(200, 158, 252, 0.2))",
              zIndex: -1,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              color: isDarkMode ? "#E0E0E0" : "#333",
              fontWeight: 700,
              marginBottom: "1.5rem",
              textTransform: "uppercase",
              position: "relative",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: isDarkMode ? "#B0B0B0" : "#666",
              marginBottom: "2rem",
            }}
          >
            I’d love to hear from you! Whether you have questions, suggestions,
            or just want to say hi, feel free to reach out.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: isDarkMode ? "#B0B0B0" : "#666" }}
          >
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lariosaloigen5@gmail.com"
              target="_blank"
              sx={{
                color: isDarkMode ? "#E0E0E0" : "#333",
                textDecoration: "none",
                display: "block",
                fontSize: "1.1rem",
                marginBottom: "1rem",
              }}
            >
              Email: lariosaloigen5@gmail.com
            </Link>
            <Link
              href="tel:+09812929161"
              sx={{
                color: isDarkMode ? "#E0E0E0" : "#333",
                textDecoration: "none",
                fontSize: "1.1rem",
              }}
            >
              Phone: +63 981 2929 161
            </Link>
          </Typography>
        </Box>
      </Element>

      {/* Maps Section */}
      <Element name="maps">
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "4rem",
            padding: "2rem",
            backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
            borderRadius: "12px",
            boxShadow: `0px 4px 20px ${
              isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
            }`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: isDarkMode
                ? "linear-gradient(135deg, rgba(71, 145, 219, 0.2), rgba(200, 158, 252, 0.2))"
                : "linear-gradient(135deg, rgba(71, 145, 219, 0.2), rgba(200, 158, 252, 0.2))",
              zIndex: -1,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              color: isDarkMode ? "#E0E0E0" : "#333",
              fontWeight: 700,
              marginBottom: "2rem",
            }}
          >
            Find Me
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19453.095495592617!2d123.95689566171569!3d10.796251357633208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8502c2f04d811%3A0xb6d9af5718fc90b2!2sLubo%2C%20Sogod%2C%20Cebu!5e1!3m2!1sen!2sph!4v1723194920524!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: "12px",
                boxShadow: `0px 4px 20px ${
                  isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
                }`,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1217.568464508434!2d123.91571134162398!3d10.354859600433299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9989304c8be09%3A0x7840898f0fd64636!2sElizabeth%20Place%20Talamban!5e1!3m2!1sen!2sph!4v1723194890653!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: "12px",
                boxShadow: `0px 4px 20px ${
                  isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
                }`,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>
      </Element>

      {/* Contact Form */}
      <Element name="contact-form">
        <Box
          sx={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
            borderRadius: "12px",
            boxShadow: `0px 4px 20px ${
              isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
            }`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: isDarkMode
                ? "linear-gradient(135deg, rgba(71, 145, 219, 0.2), rgba(200, 158, 252, 0.2))"
                : "linear-gradient(135deg, rgba(71, 145, 219, 0.2), rgba(200, 158, 252, 0.2))",
              zIndex: -1,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: isDarkMode ? "#E0E0E0" : "#333",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              Contact Form (Coming Soon)
            </Typography>
            <Divider
              sx={{
                borderColor: isDarkMode ? "#333" : "#CCC",
                marginBottom: "1.5rem",
              }}
            />
            <Typography
              variant="body1"
              sx={{ color: isDarkMode ? "#B0B0B0" : "#666" }}
            >
              Our contact form is under development. Meanwhile, you can reach
              out using the contact information above.
            </Typography>
          </motion.div>
        </Box>
      </Element>
    </Container>
  );
};

export default Contact;
