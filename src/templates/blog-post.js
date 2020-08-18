import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
        <br></br>
      <div>

        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <img src={post.frontmatter.featuredImage}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter:{title: { eq: $slug }}) {
      html
      
      frontmatter{
          title
          featuredImage
      }
    }
  }
`