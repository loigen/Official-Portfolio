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

const ContactForm = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Math.random() > 0.5 ? setSuccess(true) : setError(true);

      // Optionally clear form data on successful submission
      if (Math.random() > 0.5) {
        setFormData({ name: "", email: "", message: "" });
      }
    }, 2000);
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
        open={success || error}
        autoHideDuration={6000}
        onClose={() => {
          setSuccess(false);
          setError(false);
        }}
        action={
          <Button
            color="inherit"
            onClick={() => {
              setSuccess(false);
              setError(false);
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
          }}
          severity={success ? "success" : "error"}
          sx={{
            backgroundColor: success
              ? theme.palette.success.main
              : theme.palette.error.main,
            color: theme.palette.getContrastText(
              success ? theme.palette.success.main : theme.palette.error.main
            ),
          }}
        >
          {success
            ? "Message sent successfully!"
            : "Message failed to send. Please try again."}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactForm;
