import React, { useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TopDrawer({ items, isOpenDrawer, handleClose }) {
  const handleItemClick = (item) => {
    handleClose(); // close drawer first

    // Scroll to section if internal
    if (item.id && !item.external) {
      const element = document.getElementById(item.id);
      if (element) {
        const yOffset = -80; // height of AppBar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    // Open external links
    if (item.external) {
      window.open(item.external, "_blank");
    }
  };

  return (
    <>
      {/* Drawer */}
      <Drawer
        anchor="top"
        open={isOpenDrawer}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backdropFilter: "blur(10px)",
            color: "black",
            top: "64px",
            paddingTop: "10px",
            backgroundColor: "transparent",
            tranbackdropFilter: "blur(10px)",
            position: "fixed",
          },
        }}
        BackdropProps={{
          sx: {
            backdropFilter: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <Box sx={{ display: "flex", px: 2, pb: 2, justifyContent: "center" }}>
          {/* Menu items */}
          <List>
            {items.map((item) => (
              <ListItemButton
                sx={{
                  textAlign: "center",
                  color: "white",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "primary.main",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
                key={item.label}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && (
                  <span style={{ marginRight: 6 }}>{item.icon}</span>
                )}
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <Box
              sx={{
                justifyContent: "center",
                display: { xs: " flex", md: "none" },
              }}
            >
              <Button
                variant="outlined"
                color="white"
                onClick={() => {
                handleItemClick({ label: "Resume", id: "resume" });
              }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontFamily: "Montserrat Alternates",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Resume
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
