import { Grid, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MultipleItems from './MultipleItems'

const Projects = () => {

  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%", }}
      
      justifyContent="center"
      mt={5}
    >
      <Grid
        size={12}
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
          Projects
        </Typography>
      </Grid>
       <Grid size={12} sx={{position:'relative', width: "100%", px: { xs: 4, md: 10, lg: 10 } }}>
        <MultipleItems/>
      </Grid>
    </Grid>
  );
};

export default Projects;
