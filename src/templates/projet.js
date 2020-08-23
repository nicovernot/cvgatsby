import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"



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
                                        <h5 className="badge badge-secondary">Lien depot github</h5>
                                        <a href={projs.data.url} className="badge badge-info">{projs.data.url}</a>
                                        <h5 className="badge badge-secondary">Competances</h5>
                                        <br/>
                                        <ul class="nav">
                                        {projs.data.Name__from_cv_.map((comp)=>(
                                          <Link  to={'/'+comp} className="nav-lik" style={{padding: '1.5rem' }}><p  className="badge badge-dark">{comp}</p></Link> 
                                        ))}
                                        </ul>
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
      url
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