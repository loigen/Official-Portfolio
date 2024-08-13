import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidationError("");

    // field validation
    if (!formData.name || !formData.email || !formData.message) {
      setValidationError("All fields are required!");
      return;
    }

    // email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setValidationError("Please enter a valid email address!");
      return;
    }

    setLoading(true);

    const serviceId = "service_8y2s72q";
    const templateId = "template_uwrgbem";
    const userId = "rJ5kPXerBg9bonHix";

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "larialosaloigen5@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={formData.name}
          onChange={handleChange}
          sx={{
            borderRadius: "8px",
            marginBottom: "1rem",
            backgroundColor: theme.palette.background.paper,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.dark,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          sx={{
            borderRadius: "8px",
            marginBottom: "1rem",
            backgroundColor: theme.palette.background.paper,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.dark,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          sx={{
            borderRadius: "8px",
            marginBottom: "1rem",
            backgroundColor: theme.palette.background.paper,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.dark,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          size="large"
          sx={{
            borderRadius: "50px",
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Send"}
        </Button>
      </form>
      <Snackbar
        open={success || error || validationError}
        autoHideDuration={6000}
        onClose={() => {
          setSuccess(false);
          setError(false);
          setValidationError("");
        }}
        action={
          <Button
            color="inherit"
            onClick={() => {
              setSuccess(false);
              setError(false);
              setValidationError("");
            }}
          >
            Close
          </Button>
        }
      >
        <Alert
          onClose={() => {
            setSuccess(false);
            setError(false);
            setValidationError("");
          }}
          severity={success ? "success" : error ? "error" : "warning"}
          sx={{
            backgroundColor: success
              ? theme.palette.success.main
              : error
              ? theme.palette.error.main
              : theme.palette.warning.main,
            color: theme.palette.getContrastText(
              success
                ? theme.palette.success.main
                : error
                ? theme.palette.error.main
                : theme.palette.warning.main
            ),
          }}
        >
          {success
            ? "Message sent successfully!"
            : error
            ? "Message failed to send. Please try again."
            : validationError}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactForm;
