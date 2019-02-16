import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

import './hero.css'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#content-wrapper"]')
}

const Text = styled('div')`
  color: black;
  position: absolute;
  top: 10vh;
  left: 22vw;
  font-family: ${props => props.theme.fontFamily.heroText};
  text-align: center;
  width: 75vw;
  font-size: 12vw;
  font-weight: 500;
  align-items: center;
  @media (min-width: 500px) and (max-width: 767px) {
    font-size: 4rem;
    top: 15vh;
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    top: 20vh;
    font-size: 6rem;
  }
  @media (min-width: 1024px) {
    top: 15vh;
    font-size: 7rem;
  }
`
const Subtitle = styled('p')`
  font-family: ${props => props.theme.fontFamily.heroText};
  margin-top: 10%;
  font-size: 4.8vw;
  font-weight: 300;
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "assets/hero-image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <section className="fragment-wrapper">
          <Img
            style={{
              width: '100%',
              maxHeight: 'calc(100vh - 66px)',
              zIndex: '-1',
            }}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
          <Text>
            Mai Magdy
            <Subtitle>
              Graphic Designer <span style={{ fontWeight: 500 }}>&</span>{' '}
              Artworker
            </Subtitle>
          </Text>
          <a href="#content-wrapper" className="scroll-down" address="true" />
        </section>
      </Fragment>
    )}
  />
)
export default HeroImage
