import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Reveal, Tween } from 'react-gsap';


export default function Home({ data }) {
    const projs = data.projs.edges
    const comps = data.comp.edges
    console.log(projs)
  return (
    <Layout>
      <div>
          <br/>

{projs.map((proj)=>(
    <Reveal >
        <Tween from={{ opacity: 0 }} duration={2}> 
            <div className="card col-md-12" style={{margin: 10, background:"aliceblue"}}>
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
      <br/>
       { comps.map((node,key) => (
         <div key={key} className="row">
            <Reveal >
            <Tween from={{ opacity: 0 }} duration={2}>
                <div className="card col-md-12" style={{margin: 10,background:"powderblue"}}>
                            <h3>{node.node.data.Name}</h3>
                                <div className="card-body">
                                    <img src={node.node.data.Attachments[0].url} style={{width: 180}}/>
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: node.node.data.competances.childMarkdownRemark.excerpt }}></p>
                                    <h4><span className="badge badge-info">{node.node.data.cats.join(",")}</span></h4>
                                </div>
                </div>
            </Tween>
            </Reveal>
                    
           </div>         
                ))}
    </Layout>
  )
}

export const query = graphql`
 query Myhomepage {
  comp: allAirtable(filter: {table: {eq: "cv"}}, sort: {fields: data___cats}) {
    edges {
      node {
        data {
          Name
          cats
          competances {
          childMarkdownRemark{
            excerpt}
          }
          Attachments{
            url
          }
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