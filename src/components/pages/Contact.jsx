import React from "react";
import Layout from "../layout/Layout";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import bckgrd from "../layout/bckgrd.jpg";
import "../../styles/HomeStyles.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "sshrinivas840@gmail.com", // Replace with your EmailJS service ID
        "sshrinivas840@gmail.com", // Replace with your EmailJS template ID
        e.target,
        "sshrinivas840@gmail.com" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Clear form
  };

  return (
    <Layout>
      <Grid container >
        {/* Contact page with background */}
        <div
          className="contact-page"
          style={{
            backgroundImage: `url(${bckgrd})`,
            minHeight: "100vh",
            width:"100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop:"-50px",
          }}
        >
          {/* Overlay to enhance readability */}
          <div className="overlay"></div>

          {/* Centered form */}
          <Grid container justifyContent="center" alignItems="center" sx={{ zIndex: 2 }}>
            <Grid item sx={11} sm={8} md={6}>
              <Box className="contact-box glassBox fade-in">
                <Typography variant="h3" className="contact-title">
                  Contact Us
                </Typography>
                <Typography variant="h6" className="contact-subtitle">
                  We’d love to hear from you. Feel free to reach out with questions or feedback!
                </Typography>

                {/* Contact form */}
                <form className="contact-form" onSubmit={sendEmail}>
                  <TextField
                    name="name"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    sx={{
                      padding: "1rem",
                      borderRadius: 5,
                      backgroundColor: "#ff9800", // Example color for the button
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Layout>
  );
};

export default Contact;
