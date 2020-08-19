import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Reveal, Tween } from 'react-gsap';


export default function Home({ data }) {
    const projs = data.projs.edges
    const comps = data.comp.edges
    const langages = comps.filter(function (node) {
     return node.node.data.cats[0]==="Langages de programmation";
    })
   const sys = comps.filter(function (node) {
     return node.node.data.cats[0]==="Système";
     }) 


  return (
    <Layout>
    <br/>
<div className="row">
  <div className="col-sm-4 h-100" >
   <ul class="nav nav-pills flex-column vh-100" style={{position :"fixed"}}>
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
  </div>
  <div className="col">
   <h3  style={{margin: 10, background:"aliceblue" ,textAlign : "center",border:"1px"}}>Projets</h3>
                            {projs.map((proj,key)=>(
                                <Reveal key={key}>
                                    <Tween from={{ opacity: 0 }} duration={2}> 
                                        <div  className="card" style={{margin: 10, background:"aliceblue"}}>
                                        <Link  to={proj.node.data.Name} style={{padding: '1.5rem' }}>
                                        <h5>{proj.node.data.Name}</h5>
                                        <img src={proj.node.data.attachments[0].url} alt={proj.node.data.Name} />
                                        <h6>{proj.node.data.description.childMarkdownRemark.excerpt}</h6>
                                        </Link>
                                        </div>
                                    </Tween>
                                </Reveal>    
                            ))}    

                        <br/>
                        <h3 className="card " style={{margin: 10, background:"aliceblue" ,textAlign : "center",border:"1px"}}>Langages de programmation</h3>
                        { langages.map((node,key) => (
                                <Reveal key={key}>
                                <Tween from={{ opacity: 0 }} duration={2}>
                                <div className="card " style={{margin: 10,background:"powderblue"}}>
                                        <Link  to={node.node.data.Name} style={{padding: '1.5rem' }}>
                                                    <h3>{node.node.data.Name}</h3>
                                                    <div className="card-body">
                                                        <img src={node.node.data.Attachments[0].url} style={{width: 180}}  alt={node.node.data.Name}/>
                                                        <p className="card-text" dangerouslySetInnerHTML={{ __html: node.node.data.competances.childMarkdownRemark.excerpt }}></p>
                                                        <h4><span className="badge badge-info">{node.node.data.cats.join(",")}</span></h4>
                                                    </div>
                                        </Link>            
                                </div>
                                </Tween>
                                </Reveal>
                            ))}
                        
                            <br/>
                            <h3 className="card " style={{margin: 10, background:"aliceblue" ,textAlign : "center",border:"1px"}}>Système</h3>
                            { sys.map((node,key) => (
                                    <Reveal key={key}>
                                    <Tween from={{ opacity: 0 }} duration={2}>
                                        <div className="card" style={{margin: 10,background:"powderblue"}}>
                                            <Link  to={node.node.data.Name} style={{padding: '1.5rem' }}>
                                                        <h3>{node.node.data.Name}</h3>
                                                        <div className="card-body">
                                                            <img src={node.node.data.Attachments[0].url} style={{width: 180}} alt={node.node.data.Name}/>
                                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: node.node.data.competances.childMarkdownRemark.excerpt }}></p>
                                                            <h4><span className="badge badge-info">{node.node.data.cats.join(",")}</span></h4>
                                                        </div>
                                            </Link>            
                                        </div>
                                    </Tween>
                                    </Reveal>
                                        ))}

  </div>
  
</div>

                            
                           
                    


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