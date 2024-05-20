import { Box, Button, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: { xs: 0, sm: "50%" },
          width: "100%",
          transform: { xs: "", sm: "translate(-50%,0)" },
          background: "transparent",
          display: "flex",
          flexDirection: "column",
          height: "60vh",
          paddingY: 10,
          color: "white",
          justifyContent: "end",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box marginBottom={4}>
          <Typography variant="h3">Spolight Clothiers</Typography>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque .
          </Typography>
        </Box>
        <Button
          sx={{
            paddingX: 5,
            paddingY: 1,
            fontSize: "20px",
            fontWeight: 400,
            borderRadius: "99px",
          }}
          variant="contained"
        >
          Contact Us
        </Button>
      </Box>
    </>
  );
};

export default Homepage;
