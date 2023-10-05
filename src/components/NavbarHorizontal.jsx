import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import paperPlan from '../assets/paper-plan-3.svg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${colors.lightLila};
  /* position: fixed; */
  /* z-index: 100;
  top: 0; */
  /* @media (max-width: 1024px) {
    max-width: 1024px;
  }
  @media (max-width: 768px) {
    max-width: 768px;
  } */
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
`;

const NavbarHeader = styled.div`
  margin: 0 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 115px;
  @media (max-width: 1024px) {
    margin: 0 100px;
  }
  @media (max-width: 768px) {
    margin: 0 25px;
  }
`;

const P = styled.p`
  margin: 0;
  color: ${colors.white};
  font-size: 16px;
  text-transform: uppercase;
  opacity: 0.8;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 1;
    transition-duration: 0.30s;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Logo = styled.h1`
  color: ${colors.white};
  font-size: 26px;
  font-family: 'Exo 2', sans-serif;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  margin: 0;
  color: ${colors.white};
  font-size: 12px;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 350px;
  gap: 25px;
  @media (max-width: 1024px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    gap: 0px;
    flex-direction: column;
    justify-content: center;
  }
`;

const RightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 350px;
  gap: 25px;
  @media (max-width: 1024px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const StyledIcon = styled.img`
  width: 25px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition-duration: 0.30s;
  }
  @media (max-width: 768px) {
    width: 15px;
  }
`;

function NavBar() {
    return (
      <NavbarContainer>
        <LeftPart>
          <NavbarLink to="/works"><P>Travaux</P></NavbarLink>
          <NavbarLink to="/about"><P>A propos</P></NavbarLink>
          <NavbarLink to="/contact"><P>Contact</P></NavbarLink>
        </LeftPart>
        <NavbarLink to="/">
          <NavbarHeader>
            <Logo>LAURA</Logo>
            <Description>Développeuse web</Description>
          </NavbarHeader>
        </NavbarLink>
        <RightPart>
          <a target="_blank" href="https://github.com/Lautitep" rel="noreferrer">
            <StyledIcon src={github} alt="lien github Laura"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/laura-petit-dev/" rel="noreferrer">
            <StyledIcon src={linkedin} alt="lien linkedin Laura"/>
          </a>
          <a target="_blank" href="mailto:" rel="noreferrer">
            <StyledIcon src={paperPlan} alt="lien email Laura"/>
          </a>
        </RightPart>
      </NavbarContainer>
    )
}

export default NavBar
