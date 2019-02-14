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
  }
`

const ImgWrapper = styled(Img)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 12px;
`

const BookPage = props => {
  const { location } = props
  const book = location.state.item
  return (
    <Layout pathname={location.pathname}>
      <MainWrapper>
        <DetailsWrapper>
          <h1 style={{ fontSize: '4rem' }}>{book.frontmatter.title}</h1>
          <br />
          <h3>{book.frontmatter.author}</h3>
          <br />
          {book.frontmatter.publisher && (
            <h3>{`Publisher: ${book.frontmatter.publisher}`}</h3>
          )}
          <br />
          {book.frontmatter.publish_date && (
            <h3>
              {`Publish Date: ${new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(new Date(Date.parse(book.frontmatter.publish_date)))}
              `}
            </h3>
          )}
          <br />
          {book.frontmatter.translator && (
            <h3>{`Translator: ${book.frontmatter.translator}`}</h3>
          )}
          {book.frontmatter.notes && (
            <h3>{`Notes: ${book.frontmatter.notes}`}</h3>
          )}
        </DetailsWrapper>
        <GalleryWrapper>
          <ImgWrapper fluid={book.frontmatter.cover.childImageSharp.fluid} />
          {book.frontmatter.mockup !== null && (
            <ImgWrapper fluid={book.frontmatter.mockup.childImageSharp.fluid} />
          )}
        </GalleryWrapper>
      </MainWrapper>
    </Layout>
  )
}

export default BookPage
