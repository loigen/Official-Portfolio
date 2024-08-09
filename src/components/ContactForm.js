// src/components/ContactForm.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Math.random() > 0.5 ? setSuccess(true) : setError(true);
    }, 2000);
  };

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          sx={{ borderRadius: "8px", marginBottom: "1rem" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
          sx={{ borderRadius: "8px", marginBottom: "1rem" }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          sx={{ borderRadius: "8px", marginBottom: "1rem" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          size="large"
          sx={{ borderRadius: "50px" }}
        >
          {loading ? <CircularProgress size={24} /> : "Send"}
        </Button>
      </form>
      <Snackbar
        open={success || error}
        autoHideDuration={6000}
        onClose={() => {
          setSuccess(false);
          setError(false);
        }}
      >
        <Alert
          onClose={() => {
            setSuccess(false);
            setError(false);
          }}
          severity={success ? "success" : "error"}
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
