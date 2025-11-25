import React, { useState } from "react";
import { Box, Typography, Snackbar, Alert, Grid, IconButton } from "@mui/material";
import emailjs from "emailjs-com";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function ContactMe() {
  const styles = {
    input: {
      width: "100%",
      padding: "15px",
      background: "#121417",
      border: "1px solid grey",
      color: "white",
      marginBottom: "20px",
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "15px",
      background: "#121417",
      border: "1px solid grey",
      color: "white",
      marginBottom: "20px",
      outline: "none",
    },
    button: {
      background: "white",
      color: "black",
      padding: "15px 40px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: 600,
    },
  };
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validate required fields
    if (!name || !email || !message) {
      setOpenError(true);
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setOpenError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
            console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

          setOpenSuccess(true);
          form.reset();
        },
        (error) => {
          console.log("EMAILJS ERROR:", error);
          setOpenError(true);
        }
      );
  };
  return (
    <Grid
      container
      height={{ md: "60vh" }}
      spacing={2}
      sx={{ width: "100%", my: "50px" }}
      justifyContent="center"
    >
      <Grid
        size={{ md: 6 }}
        borderRight={"1px solid grey"}
        sx={{
          pl: { xs: 5, md: 10, lg: 20 },
          pr: 5,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            // fontFamily: "Roboto",
            color: "white",
            fontSize: { xs: "1rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            // fontFamily: "Roboto",
            color: "grey",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          Got something on your mind? <br />
          Send me a message—I’m here to help bring your ideas to life.
        </Typography>
        <Typography
          sx={{
            mt: "10px",
            textAlign: "left",
            // fontFamily: "Roboto",
            color: "white",
            fontSize: { xs: "1rem" },
          }}
        >
          <span style={{ fontWeight: "bold" }}>Email :</span>{" "}
          wgikumayanga@gmail.com
        </Typography>
        <Typography
          sx={{
            mt: "10px",
            textAlign: "left",
            // fontFamily: "Roboto",
            color: "white",
            fontSize: { xs: "1rem" },
          }}
        >
          <span style={{ fontWeight: "bold" }}>Phone :</span> +94-712482037
        </Typography>
        <Typography
          sx={{
            mt: "10px",
            textAlign: "left",
            // fontFamily: "Roboto",
            color: "white",
            fontSize: { xs: "1rem" },
          }}
        >
          <span style={{ fontWeight: "bold" }}>Location :</span> Colombo,
          Sri-Lanka
        </Typography>
        <Box
        sx={{
            mt:4,
            display:'flex',
            justifyContent:'flex-start'
        }}>
          <a
            href="https://www.linkedin.com/in/kavindu-umayange"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedInIcon
                sx={{
                  color: "white",
                  height: { xs: "30px", sm: "40px", md: "50px" },
                  width: { xs: "30px", sm: "40px", md: "50px" },
                }}
              />
            </IconButton>
          </a>
          <a
            href="https://github.com/Umayange1998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon
                sx={{
                  color: "white",
                  height: { xs: "30px", sm: "40px", md: "50px" },
                  width: { xs: "30px", sm: "40px", md: "50px" },
                }}
              />
            </IconButton>
          </a>
        </Box>
      </Grid>

      {/* send email */}
      <Grid
        size={{ md: 6 }}
        sx={{
          pr: { xs: 5, md: 10, lg: 20 },
          pl: 5,
        }}
      >
        <Box component="form" onSubmit={sendEmail}>
          {/* NAME */}
          <Typography sx={{ color: "white", mb: 1, textAlign: "left" }}>
            Name *
          </Typography>
          <input
            type="text"
            name="name"
            style={styles.input}
            placeholder="Your Name"
          />

          {/* EMAIL */}
          <Typography sx={{ color: "white", mb: 1, textAlign: "left" }}>
            Email *
          </Typography>
          <input
            type="email"
            name="email"
            style={styles.input}
            placeholder="Your Email"
          />

          {/* MESSAGE */}
          <Typography sx={{ color: "white", mb: 1, textAlign: "left" }}>
            Message *
          </Typography>
          <textarea
            name="message"
            rows={6}
            style={styles.textarea}
            placeholder="Message"
          ></textarea>

          {/* BUTTON */}
          <button type="submit" style={styles.button}>
            Send Message
          </button>

          {/* SUCCESS Snackbar */}
          <Snackbar
            open={openSuccess}
            autoHideDuration={3000}
            onClose={() => setOpenSuccess(false)}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Message sent successfully!
            </Alert>
          </Snackbar>

          {/* ERROR Snackbar */}
          <Snackbar
            open={openError}
            autoHideDuration={3000}
            onClose={() => setOpenError(false)}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              Please fill all fields correctly.
            </Alert>
          </Snackbar>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactMe;
