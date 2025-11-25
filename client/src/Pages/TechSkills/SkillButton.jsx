import { Button, Grid } from "@mui/material";


function SkillButton(props) {
  return (
    <Grid
      size ={{xs:6,
      sm:4,
      md:3}}
      // mx={{ xs: "2px", sm: "10px", lg: "50px" }}
      my={2}
    >
      <Button
        color="white"
        variant="outlined"
        sx={{
          color: "white",
          height: { xs: "40px", sm: "50px" },
          width: { xs: "135px", sm: "160px", md: "180px" },
          pointerEvents: "none", // disables click + hover + pointer
          cursor: "default",
          fontSize:{xs:'.6rem', md:'1rem'}
        }}
      >
        <img
          src={props.src}
          alt=""
          style={{
            height:"30px",
            width:  "30px",
            marginRight:"5px"
          }}
        />
        {props.text}
      </Button>
    </Grid>
  );
}

export default SkillButton;
