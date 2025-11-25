import React from "react";
import { Grid, Typography } from "@mui/material";

function About() {
  return (
    <Grid
      container
      height={{ md: "80vh" }}
      spacing={2}
      sx={{ width: "100%", my: "50px",  }}
      justifyContent="center"
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
            fontSize: { xs: "1rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          About Me
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12 }}
                height={{md:'85vh'}}

        sx={{
          px: { xs: 5, md: 10, lg: 20 },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          Highly motivated and dedicated IT graduate specialized in Software
          Engineering with skilled in full-stack web application development.
          Proficient in designing and implementing responsive, scalable web
          solutions using modern frameworks and technologies. Adept at
          problem-solving, collaborating in team environments, and delivering
          high-quality software products. Seeking an opportunity to contribute
          to innovative projects while enhancing technical skills and
          professional growth.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
