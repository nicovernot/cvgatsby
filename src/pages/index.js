import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"



export default function Home({ data }) {
    const projs = data.projs.edges
    console.log(projs)
  return (
    <Layout>
      <div>
          <br/>

{projs.map((proj)=>(
<div className="card col-md-12" style={{margin: 10}}>   
    <Link  to={proj.node.data.Name} style={{padding: '1.5rem' }}>{proj.node.data.Name}</Link>
</div>
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
        }
      }
    }
  }
 
}

`