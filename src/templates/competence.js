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
  <h5>{post.data.Name}</h5>
  <img src={post.data.Attachments[0].url} alt={post.data.Name} style={{margin: 10, width:300}}/>
  <h6 dangerouslySetInnerHTML={{ __html:post.data.competances.childMarkdownRemark.html}}></h6>     
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
          Attachments{
            url
          }
          competances{
            childMarkdownRemark{
              html
              
            }
          }
        }
  }
  }
`