import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Reveal, Tween } from 'react-gsap';

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
      <Reveal repeat>
  <Tween from={{ opacity: 0 }} duration={2}>
        <h1>{post.excerpt}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Tween>
</Reveal>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(excerpt: { eq: $slug }) {
      html
      excerpt
    }
  }
`