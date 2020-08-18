import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default function Projet({ data }) {
  const post = data.airtable
  console.log(post)
  return (
    <Layout>
        <br></br>
      <div>

  <h1>{post.data.Name}</h1>
       
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($article: String!) {
    airtable(data:{Name:{eq:$article}}){
     data {
          Name
          cats
          competances{
            childMarkdownRemark{
              html
              frontmatter{
                title
              }
            }
          }
        }
  }
  }
`