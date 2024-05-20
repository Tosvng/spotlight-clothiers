import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CircleDisplay = ({ title, image }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "175px",
        }}
      >
        <img
          src={image}
          alt={`${title}-service`}
          style={{
            width: "175px",
            height: "175px",
            borderRadius: "100px",
            filter: "drop-shadow(1px 2px 4px #4a4317)",
          }}
        />
        <Typography variant="h6" align="center" my={2}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

CircleDisplay.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
};

export default CircleDisplay;
