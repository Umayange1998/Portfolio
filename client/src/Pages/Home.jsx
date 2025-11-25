import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import proImage from "../Assets/pro.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
function Home() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Grid
        item
        size={12}
        sx={{ mt: "150px" }}
        display="flex"
        justifyContent="center"
      >
        <Box
          sx={{
            borderRadius: "50%",
            height: "200px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.7)",
            overflow: "hidden",
          }}
        >
          <img
            src={proImage}
            alt="profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Grid>
      <Grid size={12}>
        <Typography
          sx={{
            fontFamily: "Sacramento",
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
            color: "white",
          }}
        >
          Hi I'm Umayange
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography
          sx={{
            fontFamily: "Montserrat Alternates",
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            color: "white",
          }}
        >
          {" "}
          Software Engineer{" "}
        </Typography>
      </Grid>
      <Grid>
        <Box>
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
        <Box sx={{ my: "10px" }}>
          <a
    href="/CV/Kavindu_Umayange.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none",
      color: "inherit",  
     }} 
  >
          <Button
            color="black"
            variant="contained"
            sx={{
              background: "white",
              height: { xs: "40px", sm: "50px" },
              width: { xs: "150px", sm: "160px", md: "180px" },
              mx: { xs: "5px", sm: "20px", md: "50px" },
            }}
          >
            Download CV
            <VerticalAlignBottomIcon
              sx={{ ml: "5px", display: { xs: "none", md: "flex" } }}
            />
          </Button></a>
 
          <Button
            color="white"
            variant="outlined"
            href="#contact"
            sx={{
              color: "white",
              height: { xs: "40px", sm: "50px" },
              width: { xs: "150px", sm: "160px", md: "180px" },
              mx: { xs: "5px", sm: "20px", md: "50px" },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
