import { Box } from "@mui/material";
import fullHero from "../assets/FullHero.png";

const heroHeight = "60vh";

const HeroAsBackground = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: heroHeight,
        width: "100vw",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: heroHeight,
          width: "100vw",
          top: 0,
          left: 0,
          backgroundImage:
            "linear-gradient(to bottom, rgba(17,15,16, 0.2) 0%, rgba(17,15,16, 0.5) 30%,   rgba(17,15,16, 0.8) 90%)",
        }}
      />
      <img
        src={fullHero}
        alt="hero"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default HeroAsBackground;
