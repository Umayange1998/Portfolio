import {  Grid, Typography } from "@mui/material";
import React from "react";
import SkillButton from "./SkillButton";
import Skills from "./Skills";

function TechSkills() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%", mt: "50px" }}
      direction="column"
      justifyContent="center"
    >
      <Grid
        xs={12}
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
          Technical Skills
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"space-around"}
        sx={{
          mx: { xs: 5, sm: 10, lg: 20 },
          // mt: "10px",
        }}
      >
        {Skills.map((skill) => (
          <SkillButton key={skill.label} src={skill.icon} text={skill.label} />
        ))}
      </Grid>
    </Grid>
  );
}

export default TechSkills;
