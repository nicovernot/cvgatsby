import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "@reach/router"


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
  <h4>Example heading <span class="badge badge-secondary">Projets</span></h4> 
  { post.data.projets1.map((node) =>(
    <Link to={node} style={{margin: 10}}>{node}</Link>
  ))}
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
          projets1
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