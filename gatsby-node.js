// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

const path = require(`path`)

const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const itemDetails = path.resolve(`src/components/details.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.path !== '/about')
            createPage({
              path: edge.node.frontmatter.path,
              component: itemDetails,
              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
              context: {},
            })
        })
      })
    )
  })
}
