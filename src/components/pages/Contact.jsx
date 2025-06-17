import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Info */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">sshrinivas840.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">+91 7338169359</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <WhatsAppIcon color="success" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <a
                  href="https://wa.me/917338169359"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Chat on WhatsApp
                </a>
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Optional Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Send a Message
            </Typography>
            <form
              action="https://formspree.io/f/mrbkknly" // replace with actual Formspree ID or backend
              method="POST"
            >
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                name="email"
                type="email"
                label="Your Email"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                name="message"
                label="Message"
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
