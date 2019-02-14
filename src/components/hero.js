import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Text = styled('div')`
  color: black;
  position: absolute;
  top: 15vh;
  left: 20vw;
  font-family: ${props => props.theme.fontFamily.heroText};
  text-align: center;
  width: 75vw;
  font-size: 12vw;
  font-weight: 500;
  align-items: center;
  @media (min-width: 500px) and (max-width: 767px) {
    font-size: 12vw;
    top: 25vh;
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    font-size: 12vw;
    top: 35vh;
  }
  @media (min-width: 1024px) {
    top: 40vh;
    font-size: 10vw;
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
        placeholderImage: file(relativePath: { eq: "hero-image.jpg" }) {
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
        <Img
          style={{
            width: '100%',
            maxHeight: '100vh',
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
      </Fragment>
    )}
  />
)
export default HeroImage
