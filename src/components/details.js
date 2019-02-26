import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from './layout'
import styled from 'react-emotion'

const MainWrapper = styled('div')`
  min-height: 85vh;
  padding: 15vh 5vw 2vh 5vw;
  display: flex;
  @media (max-width: 767px) {
    display: block;
    padding: 3vh;
  }
`
const DetailsWrapper = styled('div')`
  width: 40%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const GalleryWrapper = styled('div')`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 5vh;
  }
`

const ImgWrapper = styled(Img)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 12px;
`

const Title = styled('h1')`
  font-size: 4rem;
  margin-bottom: 3rem;
  @media (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const Subtitle = styled('h3')`
  margin-bottom: 40px;
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`

const Details = ({ data, location }) => {
  const { markdownRemark: book } = data

  return (
    <Layout pathname={location.pathname}>
      <MainWrapper>
        <DetailsWrapper>
          <Title>{book.frontmatter.title}</Title>

          {book.frontmatter.author !== undefined &&
          book.frontmatter.author !== '' &&
          book.frontmatter.author !== null ? (
            <Subtitle>{book.frontmatter.author}</Subtitle>
          ) : null}

          {book.frontmatter.publisher !== undefined &&
          book.frontmatter.publisher !== '' &&
          book.frontmatter.publisher !== null ? (
            <Subtitle>{`Publisher: ${book.frontmatter.publisher}`}</Subtitle>
          ) : null}

          {book.frontmatter.publish_date !== undefined &&
          book.frontmatter.publish_date !== null &&
          book.frontmatter.publish_date !== '' ? (
            <Subtitle>
              {`Publish Date: ${new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(new Date(Date.parse(book.frontmatter.publish_date)))}
              `}
            </Subtitle>
          ) : null}

          {book.frontmatter.translator !== undefined &&
          book.frontmatter.translator !== '' &&
          book.frontmatter.translator !== null ? (
            <Subtitle>{`Translator: ${book.frontmatter.translator}`}</Subtitle>
          ) : null}

          {book.frontmatter.notes !== undefined &&
          book.frontmatter.notes !== '' &&
          book.frontmatter.notes !== null ? (
            <Subtitle>{`Notes: ${book.frontmatter.notes}`}</Subtitle>
          ) : null}
        </DetailsWrapper>
        <GalleryWrapper>
          <ImgWrapper fluid={book.frontmatter.cover.childImageSharp.fluid} />
          {!book.frontmatter.mockup.childImageSharp.fluid.src.includes(
            'logo.png'
          ) ? (
            <ImgWrapper fluid={book.frontmatter.mockup.childImageSharp.fluid} />
          ) : null}
          {!book.frontmatter.mockup1.childImageSharp.fluid.src.includes(
            'logo.png'
          ) ? (
            <ImgWrapper
              fluid={book.frontmatter.mockup1.childImageSharp.fluid}
            />
          ) : null}
          {!book.frontmatter.mockup2.childImageSharp.fluid.src.includes(
            'logo.png'
          ) ? (
            <ImgWrapper
              fluid={book.frontmatter.mockup2.childImageSharp.fluid}
            />
          ) : null}
          {!book.frontmatter.mockup3.childImageSharp.fluid.src.includes(
            'logo.png'
          ) ? (
            <ImgWrapper
              fluid={book.frontmatter.mockup3.childImageSharp.fluid}
            />
          ) : null}
          {!book.frontmatter.mockup4.childImageSharp.fluid.src.includes(
            'logo.png'
          ) ? (
            <ImgWrapper
              fluid={book.frontmatter.mockup4.childImageSharp.fluid}
            />
          ) : null}
        </GalleryWrapper>
      </MainWrapper>
    </Layout>
  )
}

export default Details

export const postQuery = graphql`
  query ItemPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        translator
        publisher
        publish_date
        notes
        featured
        type
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
        mockup1 {
          childImageSharp {
            fluid(maxWidth: 700) {
              srcSet
              sizes
              aspectRatio
              src
            }
          }
        }
        mockup2 {
          childImageSharp {
            fluid(maxWidth: 700) {
              srcSet
              sizes
              aspectRatio
              src
            }
          }
        }
        mockup3 {
          childImageSharp {
            fluid(maxWidth: 700) {
              srcSet
              sizes
              aspectRatio
              src
            }
          }
        }
        mockup4 {
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
`
