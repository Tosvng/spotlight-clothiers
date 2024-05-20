import { useState } from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavBackground, StyledNavMenu } from "./styles";
import NavItem from "../components/NavItem";
import NavButton from "../components/NavButton";

const navList = ["Home", "Services"];

const Navbar = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const [selectedItem, setSelectedItem] = useState(navList[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMeunOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuIcon = () => {
    if (isMenuOpen)
      return (
        <NavButton icon={<CloseRoundedIcon />} onClick={toggleIsMeunOpen} />
      );
    return <NavButton icon={<MenuRoundedIcon />} onClick={toggleIsMeunOpen} />;
  };

  const MobileNav = () => {
    return (
      <Box sx={{ position: "relative" }}>
        <NavBackground marginTop={2}>
          <NavItem
            name={selectedItem}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          {toggleMenuIcon()}
        </NavBackground>
        {isMenuOpen ? (
          <StyledNavMenu>
            {navList.map((item) => {
              if (item !== selectedItem)
                return (
                  <NavItem
                    key={item}
                    name={item}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                );
            })}
          </StyledNavMenu>
        ) : null}
      </Box>
    );
  };

  return (
    <Container maxWidth="sm" align="center" sx={{ paddingTop: 1 }}>
      {isDesktop ? (
        <NavBackground>
          {navList.map((item) => (
            <NavItem
              key={item}
              name={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </NavBackground>
      ) : (
        MobileNav()
      )}
    </Container>
  );
};

export default Navbar;
