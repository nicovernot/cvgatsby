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
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
        Compétences:
        </h1>
        <br/>
<Link to="/competences?cat=Langages de programmation"  style={{padding: '1.5rem' }}>Langages de programmation</Link>
<Link to="/competences?cat=Basses de données"  style={{margin: '1.5rem' }}>Basses de données</Link>
{projs.map((proj)=>(
<Link  to={proj.node.data.Name} style={{padding: '1.5rem' }}>{proj.node.data.Name}</Link>
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