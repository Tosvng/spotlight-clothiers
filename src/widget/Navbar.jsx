import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Appointments", path: "/appointments" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label}>
            <Button
              component={Link}
              to={item.path}
              fullWidth
              sx={{
                color:
                  location.pathname === item.path
                    ? "primary.main"
                    : "text.primary",
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box component={Link} to="/" sx={{ textDecoration: "none" }}>
          {/* Add your logo here */}
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            SPOTLIGHT CLOTHIERS
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  backgroundColor: "background.paper",
                  width: 240,
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color:
                    location.pathname === item.path
                      ? "primary.main"
                      : "text.primary",
                  borderBottom: location.pathname === item.path ? 2 : 0,
                  borderColor: "primary.main",
                  borderRadius: 0,
                  px: 2,
                  "&:hover": {
                    color: "primary.light",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
