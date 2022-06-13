import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from "../../context/context";
import { useContext } from "react";
import { devices } from "../../../responsive";



const Container = styled.div`
  display: none;
  position: fixed;
  max-height: 50px;
  padding-top: 10px;

  /* <  background-color:black ;> */
  width: 100%;
  z-index: 5;

  justify-content: space-between;
  align-items: center;

  @media ${devices.mobileL} {
    display: flex;
  }
  @media ${devices.tablet} {
    display: flex;
  }
`;

const Logo = styled.div`
  width: max-content;
  display: flex;
  align-items: center;

  gap: 10px;
`;

const LogoText = styled.p`
  color: white;
  width: max-content;

  font-size: 12px;
  font-weight: 300;
  @media ${devices.tablet} {
    font-size: 12px;
  }
  @media ${devices.mobileL} {
    display: none;
  }
`;

const Image = styled.img`
  width: 120px;
`;

const NavContainer = styled.div`
  display: flex;
  /* background-color: hsl(357, 84%, 38%); */
  backdrop-filter:blur(5px) ;

  /* background-color:hsla(0, 0%, 0%, 0.589); ; */
  /* background-color:black; */

  opacity: ${(props) => (props.openMenu ? "1" : "0")};
  transition: 2s ease-in-out;
  transform: translateX(${(props) => (props.openMenu ? "0" : "100vw")});

  height: 100vh;
  top: 0;
  right: 0;

  justify-content: start;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.openMenu ? "200px" : "0px")};
  @media ${devices.mobileM} {
    width: ${(props) => (props.openMenu ? "100%" : "0px")};
  }

  @media ${devices.mobileS} {
    width: ${(props) => (props.openMenu ? "100%" : "0px")};
  }

  @media ${devices.mobileL} {
    width: ${(props) => (props.openMenu ? "100%" : "0px")};
  }
  @media ${devices.tablet} {
    width: ${(props) => (props.openMenu ? "100%" : "0px")};
  }
`;

const Close = styled.div`
  align-self: start;
  position: relative;
  color: white;
  font-size:30px ;
  font-weight:200 ;
  left: 10px;
`;

const List = styled.ul`
  display: flex;
  /* transform:translateX(200px) ; */
  flex-direction: column;
  align-items: center;
  width: 100%;

  justify-content: space-between;
  height: 100%;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  height: 100%;
  width: 100%;

  position: relative;
`;

const AnchorList = styled.a`
  font-size: 20px;
  font-weight:700 ;
  display: flex;
  color:white;
  position: relative;
  z-index: 3;
  right: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 200px;
  width: 100%;
  height: 70%;
  ${ListItem}:hover & {
    color: #000000;
  }
`;

const AnchorColorBackground = styled.div`
  height: 100%;
  width: 100%;
  transition: 1s ease;

  background-color: #ffffff;
  position: absolute;
  z-index: -2;
  clip-path: circle(0% at 100% 100%);
  ${ListItem}:hover & {
    clip-path: circle(150% at 100% 110%);
    /* border-top:1px solid hsl(0, 0%, 100%) ; */
    color: #000000;
  }
`;

const Ic = styled.span`
  display: flex;
  width: max-content;
  height: max-content;
  position: relative;
  right: 20px;
  transition: opacity 1s ease;
  opacity: ${(props) => (props.openMenu ? "0" : "1")};
`;

const NavMediumDevices = ({ logo }) => {
  const [openMenu, setOpenMenu] = useContext(Context);

  console.log(openMenu);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(!openMenu);
  };

  const liContent = ["inicio", "games", "history", "resources", "characters"];

  return (
    <Container>
      <Logo>
        <Image src={logo} />
        <LogoText>konami digital entertainment B.V</LogoText>
      </Logo>

      <Ic openMenu={openMenu} onClick={handleOpen}>
        <GiHamburgerMenu style={{ color: "white" }}></GiHamburgerMenu>
      </Ic>

      <NavContainer openMenu={openMenu}>
        <Close onClick={handleClose}>x</Close>

        <List>
          {liContent.map((item) => (
            <ListItem>
              <AnchorList>
                {item}
                <AnchorColorBackground></AnchorColorBackground>
              </AnchorList>
            </ListItem>
          ))}
        </List>
      </NavContainer>
    </Container>
  );
};

export default NavMediumDevices;
