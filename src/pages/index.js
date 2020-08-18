import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Reveal, Tween } from 'react-gsap'; 


export default function Home({ data }) {
 console.log(data)
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