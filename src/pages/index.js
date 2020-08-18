import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Reveal, Tween } from 'react-gsap';


export default function Home({ data }) {
    const projs = data.projs.edges
    console.log(projs)
  return (
    <Layout>
      <div>
          <br/>

{projs.map((proj)=>(
    <Reveal >
        <Tween from={{ opacity: 0 }} duration={2}> 
            <div className="card col-md-12" style={{margin: 10}}>
            <Link  to={proj.node.data.Name} style={{padding: '1.5rem' }}>
            <h5>{proj.node.data.Name}</h5>
            <img src={proj.node.data.attachments[0].url} />
            <h6>{proj.node.data.description.childMarkdownRemark.excerpt}</h6>
            </Link>
            </div>
        </Tween>
    </Reveal>    
))}    

      </div>
    </Layout>
  )
}

export const query = graphql`
 query Myhomepage {
  comp: allAirtable(filter: {table: {eq: "cv"}}) {
    edges {
      node {
        data {
          Name
          cats
        }
      }
    }
  }
  projs: allAirtable(filter: {table: {eq: "projets"}}) {
    edges {
      node {
        data {
          Name
          description{
          childMarkdownRemark{
            excerpt
          }
          }
          
          attachments {
            url
          }
        }
      }
    }
  }
 
}

`