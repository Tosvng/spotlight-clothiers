import { Box } from "@mui/material";

function HeroAsBackground() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        backgroundImage: "url(../assets/FullHero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        },
        zIndex: 1,
      }}
    />
  );
}

export default HeroAsBackground;
