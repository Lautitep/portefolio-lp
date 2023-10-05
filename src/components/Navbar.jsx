import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import paperPlan from '../assets/paper-plan-3.svg';

const NavbarContainer = styled.div`
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
`;

const NavbarHeader = styled.div`
  position: relative;
  background-color: ${colors.darkLila};
  height: 27vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavbarBody = styled.div`
  background-color: ${colors.lila};
  height: 73vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const P = styled.p`
  margin: 0;
  color: ${colors.white};
  font-size: 18px;
  text-transform: uppercase;
  opacity: 0.8;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 1;
    transition-duration: 0.30s;
    font-weight: bold;
  }
`;

const Logo = styled.h1`
  margin: 0;
  color: ${colors.white};
  font-size: 100px;
  font-family: 'Exo 2', sans-serif;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Letter = styled.span`
  position: absolute;
  top: 50%;
  left: 67%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  font-size: 18px;
  text-transform: uppercase;
`;

const Dev = styled.p`
  position: absolute;
  bottom: 5%;
  margin: 0;
  color: ${colors.white};
  font-size: 14px;
`;

const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 25px;
`;

const Network = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
`;

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition-duration: 0.30s;
  }
`;

function NavBar() {
    return (
      <NavbarContainer>
        <NavbarLink to="/">
          <NavbarHeader>
              <Logo>L</Logo>
              <Letter>aura</Letter>
              <Dev>Web Developer</Dev>
          </NavbarHeader>
        </NavbarLink>
        <NavbarBody>
          <Pages>
            <NavbarLink to="/works"><P>Travaux</P></NavbarLink>
            <NavbarLink to="/about"><P>À propos</P></NavbarLink>
            <NavbarLink to="/"><P>Contact</P></NavbarLink>
          </Pages>
          <Network>
            <a target="_blank" href="https://github.com/Lautitep" rel="noreferrer">
              <StyledIcon src={github} alt="lien github Laura"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/laura-petit-dev/" rel="noreferrer">
              <StyledIcon src={linkedin} alt="lien linkedin Laura"/>
            </a>
            <a target="_blank" href="mailto:" rel="noreferrer">
              <StyledIcon src={paperPlan} alt="lien email Laura"/>
            </a>
          </Network>
        </NavbarBody>
      </NavbarContainer>
    )
}

export default NavBar
