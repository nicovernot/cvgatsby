import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Reveal, Tween } from 'react-gsap';


export default function Projet({ data }) {
  const projs = data.airtable
  console.log(projs)
  return (
    <Layout>
        <br></br>
      <div>
     
  
                                        <div  className="card" style={{margin: 10, background:"skyblue"}}>
                                    
                                        <h5>{projs.data.Name}</h5>
                                        <img src={projs.data.attachments[0].url} alt={projs.data.Name} style={{margin: 10, width:300}}/>
                                        <h6 dangerouslySetInnerHTML={{ __html:projs.data.description.childMarkdownRemark.html}}></h6>
                                        <h5 className="badge badge-secondary">Competances</h5>
                                        <br/>
                                        {projs.data.Name__from_cv_.map((comp)=>(
                                          <Link  className="badge badge-success" to={'/'+comp} className="nav-lik">{comp}</Link> 
                                        ))}
                                        </div>

                        
  
       
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($article: String!) {
    airtable(data:{Name:{eq:$article}}){
    data{
      Name
      Name__from_cv_
      attachments {
        url
      }
      description{
        childMarkdownRemark{
          html
        }
      } 
    }
  }
  }
`