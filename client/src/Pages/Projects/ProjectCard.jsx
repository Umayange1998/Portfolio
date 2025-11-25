import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function ProjectCard({ title, description, image, url, githubLink }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 500,
        borderRadius: "15px",
        position: "relative",
        overflow: "hidden",
        mx:'auto'
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.85))",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          height: 450,
          position: "relative",
          zIndex: 3,
          padding: "20px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
      
          gap: 2,
         
        }}
      >
        <Box >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>  </Box>
          <Box
            sx={{
              maxHeight:300,
              mt: "auto",
              overflow: "scroll",
              mb: "auto",
            }}
          >
            <Typography variant="body2" sx={{ mb: 2 }}>
              {description}
            </Typography>
          </Box>
      

        <Box >
          {url && (
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                textTransform: "none",
                p: 1,
                mr: 1,
              }}
              onClick={() => window.open(url, "_blank")}
            >
              Visit
              <ArrowOutwardIcon sx={{ ml: "10px" }} />
            </Button>
          )}
          {githubLink && (
            <Button
              variant="contained"
              sx={{
                background: "white",
                color: "black",
                textTransform: "none",
              }}
              onClick={() => window.open(githubLink, "_blank")}
            >
              Source
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}

export default ProjectCard;
