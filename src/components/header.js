import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { FaBars } from 'react-icons/fa'
import logo from '../../static/images/assets/logo.png'

const CollapsedNavWrapper = styled('div')`
  position: absolute;
  right: 8px;
`
const HeaderWrapper = styled('div')`
  align-items: flex-start;
  display: flex;
  padding: 16px;
  height: 66px;
  width: 100%;
  background-color: #ecb400;
  @media (max-width: 767px) {
    width: 100vw;
  }
`
const StyledLink = styled(Link)`
  display: flex;
  font-weight: 400;
  align-items: center;
  max-width: 100px;
  text-decoration: none;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`
const StyledLinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  max-width: 100px;
  position: relative;
`

const StyledLinkCollapsedNavItem = styled(Link)`
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  font-family: ${props => props.theme.fontFamily.body};
  color: #818181;
  display: block;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: #f1f1f1;
  }
`

const Nav = styled('nav')`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    padding-bottom: 8px;
    color: black;
    margin-right: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
  }
  @media (max-width: 767px) {
    display: none;
  }
`

const CollapsedNav = styled('div')`
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: hidden;
`
const CloseCollapsedNavIcon = styled('a')`
  position: absolute;
  top: 16px;
  right: 24px;
  font-size: 50px;
  color: #818181;
`

const CollapsedNavMenu = styled('div')`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`

const CollapsedNavIcon = styled('span')`
  font-size: 30px;
  cursor: pointer;
  display: block;
  margin-right: 24px;
  @media (min-width: 767px) {
    display: none;
  }
`

const Logo = styled('img')`
  @media (max-width: 400px) {
    width: 70px;
  }
`

const HamburgerIcon = styled(FaBars)`
  color: black;
`

function openNav() {
  document.getElementById('CollapsedNav').style.height = '100vh'
  document.getElementById('CollapsedNavIcon').style.display = 'none'
}

function closeNav() {
  document.getElementById('CollapsedNav').style.height = '0%'
  document.getElementById('CollapsedNavIcon').style.display = ''
}

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLinkLogo to="/">
        <Logo src={logo} alt="Logo" />
      </StyledLinkLogo>
      <CollapsedNavWrapper>
        <CollapsedNavIcon id="CollapsedNavIcon" onClick={openNav}>
          <HamburgerIcon />
        </CollapsedNavIcon>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/books">Books</StyledLink>
          <StyledLink to="/campaigns">Campaigns</StyledLink>
          <StyledLink to="/artworks">Artworks</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Nav>
        <CollapsedNav id="CollapsedNav">
          <CloseCollapsedNavIcon onClick={closeNav}>
            &times;
          </CloseCollapsedNavIcon>
          <CollapsedNavMenu>
            <StyledLinkCollapsedNavItem to="/">Home</StyledLinkCollapsedNavItem>
            <StyledLinkCollapsedNavItem to="/books">
              Books
            </StyledLinkCollapsedNavItem>
            <StyledLinkCollapsedNavItem to="/campaigns">
              Campaigns
            </StyledLinkCollapsedNavItem>
            <StyledLinkCollapsedNavItem to="/artworks">
              Artworks
            </StyledLinkCollapsedNavItem>
            <StyledLinkCollapsedNavItem to="/about">
              About
            </StyledLinkCollapsedNavItem>
          </CollapsedNavMenu>
        </CollapsedNav>
      </CollapsedNavWrapper>
    </HeaderWrapper>
  )
}

export default Header
