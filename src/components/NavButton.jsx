import PropTypes from "prop-types";

import { StyledNavItem } from "./styles";

const NavButton = ({ icon, onClick }) => {
  return (
    <StyledNavItem px={3} py={2} onClick={onClick}>
      {icon}
    </StyledNavItem>
  );
};

NavButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default NavButton;
