import React from 'react'
import styled from 'react-emotion'
import { FaFacebookF } from 'react-icons/fa'
import { FaBehanceSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const FooterWrapper = styled('div')`
  width: 100%;
  height: 15vh;
  background-color: #ecb400;
  font-family: ${props => props.theme.fontFamily.body};
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 600px) {
    display: block;
    height: 20vh;
  }
`

const IconLink = styled('a')`
  text-decoration: none;
  color: black;
`

const FooterCopyright = styled('small')`
  width: 50%;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`
const FooterCell = styled('span')`
  width: 50%;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`

const FacebookIcon = styled(FaFacebookF)`
  margin: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #3b5998;
  }
`
const BehanceIcon = styled(FaBehanceSquare)`
  margin: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #1769ff;
  }
`
const InstagramIcon = styled(FaInstagram)`
  margin: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #e1306c;
  }
`
const EnvelopeIcon = styled(FaEnvelope)`
  margin: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #b23121;
  }
`
const BreakLine = styled('br')`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterCell>
      <IconLink href="https://www.facebook.com/Mai-Magdy-Artworks-451317958250658/">
        <FacebookIcon size="30px" />
      </IconLink>
      <IconLink>
        <InstagramIcon size="30px" />
      </IconLink>
      <IconLink href="http://www.behance.net/MaiMagdy">
        <BehanceIcon size="30px" />
      </IconLink>
      <IconLink href="mailto:mai.magdy.hamid@gmail.com">
        <EnvelopeIcon size="30px" />
      </IconLink>
    </FooterCell>
    <FooterCopyright>
      Copyright © {new Date().getFullYear()} Mai Magdy Artworks. <BreakLine />
      All rights reserved.
    </FooterCopyright>
  </FooterWrapper>
)

export default Footer
