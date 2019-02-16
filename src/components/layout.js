import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import SEO from './SEO'
import theme from '../../config/theme'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'

const LayoutWrapper = styled('div')`
  min-height: calc(100vh - 66px - 15vh);
`

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <ThemeProvider theme={theme}>
          <Fragment>
            <SEO />
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Mai Magdy Portfolio' },
                {
                  name: 'keywords',
                  content: 'graphic, design, portfolio',
                },
                { name: 'url', content: '' },
                {
                  name: 'image',
                  content: '../../static/images/assets/logo.png',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header pathname={props.pathname} />
            <LayoutWrapper>{props.children}</LayoutWrapper>
            <Footer />
          </Fragment>
        </ThemeProvider>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
