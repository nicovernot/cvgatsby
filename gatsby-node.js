const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Airtable`) {
   const article = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `article`,
      value: article,
    })
  }

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    
  const { createPage } = actions
  const airtableprojet = await graphql(`
  query MyQuery {
  allAirtable(filter:{table:{eq:"projets"}}){
    edges {
      node {
        data {

          Name
         
          }
        }
      }
    }
  }
  `)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt 
            frontmatter {
                        title
                        } 
            html
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.title,
      },
    })
  })


    airtableprojet.data.allAirtable.edges.forEach(({node})=>{
      createPage({
      path: node.data.Name,
      component: path.resolve(`./src/templates/projet.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        article: node.data.Name,
      },
    })
  }) 

}