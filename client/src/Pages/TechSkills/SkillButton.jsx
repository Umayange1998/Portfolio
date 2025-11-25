import { Button, Grid, IconButton } from "@mui/material";
import React from "react";


function SkillButton(props) {
  return (
    <Grid
      xs={6}
      sm={4}
      md={3}
      mx={{ xs: "5px", sm: "10px", lg: "50px" }}
      my={2}
    >
      <Button
        color="white"
        variant="outlined"
        sx={{
          color: "white",
          height: { xs: "40px", sm: "50px" },
          width: { xs: "150px", sm: "160px", md: "180px" },
          pointerEvents: "none", // disables click + hover + pointer
          cursor: "default",
        }}
      >
        <img
          src={props.src}
          alt=""
          style={{
            height: "30px",
            width: "30px",
            marginRight:"5px"
          }}
        />
        {props.text}
      </Button>
    </Grid>
  );
}

export default SkillButton;
