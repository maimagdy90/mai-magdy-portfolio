import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from 'react-emotion'
import { Link } from '@reach/router'

const ContentWrapper = styled('div')`
  margin: 16px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 90vw;
  margin: auto;
`

const ImgWrapper = styled(Img)`
  width: 100%;
  border-radius: 5px;
`
const LinkWrapper = styled(Link)`
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  height: 400px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: 0.3s;
  display: flex;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }
  @media (max-width: 500px) {
    width: 90%;
    margin: 8px auto;
  }
  @media (min-width: 501px) and (max-width: 767px) {
    width: 48%;
    margin: 12px 1%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 30%;
    margin: 12px 1.5%;
  }
  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 23%;
    margin: 12px 1%;
    height: 500px;
  }
  @media (min-width: 1400px) {
    width: 23%;
    margin: 12px 1%;
    height: 500px;
  }
`

const Artwork = ({ data, location }) => {
  const { allMarkdownRemark: covers } = data

  return (
    <Layout pathname={location.pathname}>
      <ContentWrapper>
        {covers
          ? covers.edges.map(item => (
              <LinkWrapper
                key={item.node.id}
                to="/details"
                state={{
                  item: item.node,
                }}
              >
                <ImgWrapper
                  fluid={item.node.frontmatter.cover.childImageSharp.fluid}
                />
              </LinkWrapper>
            ))
          : null}
      </ContentWrapper>
    </Layout>
  )
}

export default Artwork

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "art" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            translator
            publisher
            publish_date
            notes
            featured
            cover {
              childImageSharp {
                fluid(maxWidth: 700) {
                  srcSet
                  sizes
                  aspectRatio
                  src
                }
              }
            }
            mockup {
              childImageSharp {
                fluid(maxWidth: 700) {
                  srcSet
                  sizes
                  aspectRatio
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
