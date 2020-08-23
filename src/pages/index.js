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
     const dbs = comps.filter(function (node) {
      return node.node.data.cats[0]==="Basses de données";
      }) 
      const fram = comps.filter(function (node) {
        return node.node.data.cats[0]==="Frameworks-librairies";
        }) 
        const gproj = comps.filter(function (node) {
          return node.node.data.cats[0]==="Gestion de projet";
          })   


  return (
    <Layout>
    <br/>
   
<div className="row">
<div className="col">
   <ul className="nav nav flex-column" style={{position :"fixed"}}>
        <li className="nav-item">
        <Link to='/#projs' className="nav-link" style={{margin: 10, background:"skyblue"}}>Projets</Link>
        </li>
        <li className="nav-item">
        <Link to='/#langs' className="nav-link" style={{margin: 10, background:"darkseagreen"}}>Langages de programmation</Link>
        </li>
        <li className="nav-item">
        <Link to='/#sys' className="nav-link" style={{margin: 10, background:"darksalmon"}}>Système</Link>
        </li>
        <li className="nav-item">
        <Link to='/#dbs' className="nav-link" style={{margin: 10, background:"wheat"}}>Basses de données</Link>
        </li>
        <li className="nav-item">
        <Link to='/#fram' className="nav-link" style={{margin: 10, background:"papayawhip"}}>Frameworks-librairies</Link>
        </li>
        <li className="nav-item">
        <Link to='/#gproj' className="nav-link" style={{margin: 10, background:"pink"}}>Gestion de projet</Link>
        </li>
      </ul>
  </div>

  <div className="col-sm-8">
   <h3  style={{margin: 10, background:"skyblue" ,textAlign : "center",border:"1px"}} id={'projs'}>Projets</h3>
                            {projs.map((proj,key)=>(
                                <Reveal key={key}>
                                    <Tween from={{ opacity: 0 }} duration={2}> 
                                        <div  className="card" style={{margin: 10, background:"skyblue"}}>
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
                        <h3 className="card " style={{margin: 10, background:"darkseagreen" ,textAlign : "center",border:"1px"}} id={'langs'}>Langages de programmation</h3>
                        { langages.map((node,key) => (
                                <Reveal key={key}>
                                <Tween from={{ opacity: 0 }} duration={2}>
                                <div className="card " style={{margin: 10,background:"darkseagreen"}}>
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
                            <h3 className="card " style={{margin: 10, background:"darksalmon" ,textAlign : "center",border:"1px"}} id={'sys'}>Système</h3>
                            { sys.map((node,key) => (
                                    <Reveal key={key}>
                                    <Tween from={{ opacity: 0 }} duration={2}>
                                        <div className="card" style={{margin: 10,background:"darksalmon"}}>
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

<h3 className="card " style={{margin: 10, background:"wheat" ,textAlign : "center",border:"1px"}} id={'dbs'}>Basses de données</h3>
                            { dbs.map((node,key) => (
                                    <Reveal key={key}>
                                    <Tween from={{ opacity: 0 }} duration={2}>
                                        <div className="card" style={{margin: 10,background:"wheat"}}>
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
<h3 className="card " style={{margin: 10, background:"papayawhip" ,textAlign : "center",border:"1px"}} id={'fram'}>Frameworks-librairies</h3>
                            { fram.map((node,key) => (
                                    <Reveal key={key}>
                                    <Tween from={{ opacity: 0 }} duration={2}>
                                        <div className="card" style={{margin: 10,background:"papayawhip"}}>
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
<h3 className="card " style={{margin: 10, background:"pink" ,textAlign : "center",border:"1px"}} id={'gproj'}>Gestion de projet</h3>
                            { gproj.map((node,key) => (
                                    <Reveal key={key}>
                                    <Tween from={{ opacity: 0 }} duration={2}>
                                        <div className="card" style={{margin: 10,background:"pink"}}>
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