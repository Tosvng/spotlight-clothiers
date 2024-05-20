import { Box, styled } from "@mui/material";

export const StyledNavItem = styled(Box)(
  ({ theme, isselected, isdesktop }) => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.contrast,
    backgroundColor: isselected ? theme.palette.action.active : "",
    borderRadius: "990px",
    borderBottom: isdesktop ? "0px" : "1px",
    borderColor: isdesktop ? "0" : "Divider",

    "&:hover": {
      backgroundColor: isselected
        ? theme.palette.action.active
        : theme.palette.action.hover,
    },
    transition: "200ms ease-in",
  })
);
