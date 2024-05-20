import { Box, styled } from "@mui/material";

const navColor = "#b2d0d366";
const backDrop = "blur(8px) saturate(178%)";

export const NavBackground = styled(Box)(() => ({
  position: "sticky",
  top: "5px",
  width: "fit-content",
  display: "flex",
  backdropFilter: backDrop,
  backgroundColor: navColor,
  borderRadius: "9999px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  zIndex: 2,
}));

export const StyledNavMenu = styled(Box)(() => ({
  position: "fixed",
  top: "85px",
  left: "50%",
  transform: "translate(-50%,0)",
  width: "60%",
  display: "flex",
  flexDirection: "column",
  backdropFilter: backDrop,
  backgroundColor: navColor,
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  borderBottomLeftRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  zIndex: "2",
  alignItems: "center",
  transition: "transform 2s",
}));
