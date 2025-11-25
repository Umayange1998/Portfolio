import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

function Resume() {
  return (
    <Grid
      container
      spacing={2}
      height={{ md: "100vh" }}
      sx={{ width: "100%" }}
      display={"flex"}
      justifyContent="center"
      my={15}
    >
      <Grid
        size={12}
        height={{ md: "8vh" }}
        sx={{
          mx: { xs: 5, md: 10, lg: 20 },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            color: "white",
            fontSize: { xs: "2rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          My Resume
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        size={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          height={{ md: "50vh" }}
          sx={{
            pl: { xs: 5, md: 10, lg: 20 },
            pr: 5,
          }}
        >
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Experiance
            </Typography>
          </Grid>
          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              borderBottomWidth: "2px",
              my: 1.5,
            }}
          />
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  color: "white",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
                }}
              >
                Intern Software Engineer
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontFamily: "Roboto",
                  color: "grey",
                  fontSize: { xs: ".5rem", md: "1.2rem" },
                }}
              >
                mobiOS Private Ltd.
              </Typography>
            </Box>
            <Box sx={{ alignContent: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  color: "white",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
                  p: 1,
                  border: "1px solid white",
                }}
              >
                Sep.2023 - March.2024
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          height={{ md: "50vh" }}
          sx={{
            pr: { xs: 5, md: 10 },
            pl: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Roboto",
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Education
            </Typography>
          </Box>
          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              borderBottomWidth: "2px",
              my: 1.5,
            }}
          />
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  textAlign: "left",
                  color: "white",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
                }}
              >
                B.Sc.(Hons) in Information Technology
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontFamily: "Roboto",
                  color: "grey",
                  fontSize: { xs: ".5rem", md: "1.2rem" },
                }}
              >
                University of Kelaniya.
              </Typography>
            </Box>
            <Box sx={{ alignContent: "center" }}>
              <Typography
                sx={{
                  width: 150,
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "white",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
                  p: 1,
                  border: "1px solid white",
                }}
              >
                2021 - 2024
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  textAlign: "left",
                  color: "white",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
                }}
              >
                Bachelor of Information Technology(BIT)
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontFamily: "Roboto",
                  color: "grey",
                  fontSize: { xs: ".5rem", md: "1.2rem" },
                }}
              >
                University of Colombo.
              </Typography>
            </Box>
            <Box sx={{ alignContent: "center" }}>
              <Typography
                sx={{
                  width: 150,
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "white",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
                  p: 1,
                  border: "1px solid white",
                }}
              >
                2022 - Present
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={12}
        height={{ md: "8vh" }}
        sx={{
          mb:10,
          pl: { xs: 5, md: 10, lg: 20 },
           pr: { xs: 5, md: 10 },
          display: "flex",
          justifyContent: "flex-end" ,
        }}
      >
        <Box sx={{ my: "10px" }}>
          <a
            href="/CV/Kavindu_Umayange.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              color="black"
              variant="contained"
              sx={{
                background: "white",
                height: { xs: "40px", sm: "50px" },
                width: { xs: "150px", sm: "160px", md: "180px" },
                // mx: { xs: "5px", sm: "20px", md: "50px" },
              }}
            >
              Download CV
              <VerticalAlignBottomIcon
                sx={{ ml: "5px", display: { xs: "none", md: "flex" } }}
              />
            </Button>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Resume;
