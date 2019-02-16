import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
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
  @media (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 2vh;
  }
`

const Subtitle = styled('h3')`
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`

const Details = props => {
  const { location } = props
  if (location.state) {
    const book = location.state.item
    return (
      <Layout pathname={location.pathname}>
        <MainWrapper>
          <DetailsWrapper>
            <Title>{book.frontmatter.title}</Title>
            <br />
            <Subtitle>{book.frontmatter.author}</Subtitle>
            <br />
            {book.frontmatter.publisher !== undefined &&
            book.frontmatter.publisher !== null ? (
              <Subtitle>{`Publisher: ${book.frontmatter.publisher}`}</Subtitle>
            ) : null}
            <br />
            {book.frontmatter.publish_date !== undefined &&
            book.frontmatter.publish_date !== null ? (
              <Subtitle>
                {`Publish Date: ${new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                }).format(new Date(Date.parse(book.frontmatter.publish_date)))}
              `}
              </Subtitle>
            ) : null}
            <br />
            {book.frontmatter.translator !== undefined &&
            book.frontmatter.translator !== null ? (
              <Subtitle>{`Translator: ${
                book.frontmatter.translator
              }`}</Subtitle>
            ) : null}
            <br />
            {book.frontmatter.notes !== undefined &&
            book.frontmatter.notes !== null ? (
              <Subtitle>{`Notes: ${book.frontmatter.notes}`}</Subtitle>
            ) : null}
          </DetailsWrapper>
          <GalleryWrapper>
            <ImgWrapper fluid={book.frontmatter.cover.childImageSharp.fluid} />
            {book.frontmatter.mockup !== undefined &&
            book.frontmatter.mockup !== null ? (
              <ImgWrapper
                fluid={book.frontmatter.mockup.childImageSharp.fluid}
              />
            ) : null}
          </GalleryWrapper>
        </MainWrapper>
      </Layout>
    )
  }
  return null
}

export default Details
