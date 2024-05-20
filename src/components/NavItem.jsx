import PropTypes from "prop-types";
import { Typography, useMediaQuery } from "@mui/material";
import { StyledNavItem } from "./styles";

const NavItem = ({ name, selectedItem, setSelectedItem }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const isSelected = name === selectedItem;

  const handleOnClick = () => {
    setSelectedItem(name);
  };

  return (
    <StyledNavItem
      px={4}
      py={2}
      isselected={isSelected}
      isdesktop={isDesktop}
      onClick={handleOnClick}
    >
      <Typography variant="h6">{name}</Typography>
    </StyledNavItem>
  );
};

export default NavItem;

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  selectedItem: PropTypes.string,
  setSelectedItem: PropTypes.func,
};
