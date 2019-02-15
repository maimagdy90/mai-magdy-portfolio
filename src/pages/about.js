import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'react-emotion'

const ContentWrapper = styled('div')`
  padding: 32px;
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

const TitleWrapper = styled('h1')`
  color: white;
  width: 100%;
`

const Artwork = ({ data, location }) => {
  const { allMarkdownRemark: about } = data
  return (
    <Layout pathname={location.pathname}>
      <ContentWrapper>
        <TitleWrapper>{about.edges[0].node.frontmatter.title}</TitleWrapper>
        <div dangerouslySetInnerHTML={{ __html: about.edges[0].node.html }} />
      </ContentWrapper>
    </Layout>
  )
}

export default Artwork

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
