import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/DragHandle";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TopDrawer from "../TopDrawer/TopDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const pages = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Get In Touch", id: "contact" },
  {
    label: "Github",
    id: "github",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>
    ),
    external: "https://github.com/Umayange1998",
  },
];

function ResponsiveAppBar() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  function handleOpenNavMenu() {
    setIsOpenDrawer(true);
  }

  function handleCloseNavMenu() {
    setIsOpenDrawer(false);
  }

  function handleCloseButton() {
    setIsOpenDrawer(false);
    console.log("clicked");
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#0e1419",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            
            onClick={() => {
                const element = document.getElementById("home");
                if (element) {
                  const yOffset = -80; // height of AppBar
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
                handleCloseNavMenu(); // close drawer if open
              }}
            sx={{
              cursor: "pointer",
              mr: 2,
              ml: { md: 10, lg: 20 },
              display: { xs: "none", md: "flex" },
              fontFamily: "Sacramento",
              fontWeight: 700,
              fontSize: "2rem",
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Umayange_Gamachchi
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {!isOpenDrawer && (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
            {isOpenDrawer && (
              <IconButton
                sx={{ color: "white", marginBottom: 1 }}
                onClick={handleCloseButton}
              >
                <CloseIcon />
              </IconButton>
            )}
            <TopDrawer
              isOpenDrawer={isOpenDrawer}
              items={pages}
              handleClose={handleCloseNavMenu}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => {
                const element = document.getElementById("home");
                if (element) {
                  const yOffset = -80; // height of AppBar
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
                handleCloseNavMenu(); // close drawer if open
              }}
            sx={{
              cursor: "pointer",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Sacramento",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Umayange_Gamachchi
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  handleCloseNavMenu();

                  if (page.id && !page.external) {
                    const element = document.getElementById(page.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }

                  if (page.external) {
                    window.open(page.external, "_blank");
                  }
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
                  fontSize: { xs: ".7rem", lg: "1rem" },
                }}
              >
                {page.icon && (
                  <span style={{ marginRight: 6 }}>{page.icon}</span>
                )}
                {page.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="outlined"
              color="white"
              onClick={() => {
                const element = document.getElementById("resume");
                if (element) {
                  const yOffset = -80; // height of AppBar
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
                handleCloseNavMenu(); // close drawer if open
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
