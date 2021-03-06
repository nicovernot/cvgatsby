import React from 'react'
import Layout from '../components/layout';
import { Reveal, Tween } from 'react-gsap';
import { graphql } from "gatsby"

const param =""; 



export default function competances({data}) {
     
    let result = data.allAirtable.edges
    let filterdata = result.filter(function (node) {
     if(param) return node.node.data.cats[0]===decodeURI(param);
     return node
    })
     
    {
    return(
      <Layout>
          <br/>
        
          
                { filterdata.map((node,key) => (
         <div key={key} className="row">
            <Reveal >
            <Tween from={{ opacity: 0 }} duration={2}>
                <div className="card col-md-12" style={{margin: 10,background:"powderblue"}}>
                            <h3>{node.node.data.Name}</h3>
                                <div className="card-body">
                                    <img src={node.node.data.Attachments[0].url} style={{width: 180}} alt={node.node.data.Name}/>
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: node.node.data.competances.childMarkdownRemark.html }}></p>
                                    <h4><span className="badge badge-info">{node.node.data.cats.join(",")}</span></h4>
                                </div>
                </div>
            </Tween>
            </Reveal>
                    
           </div>         
                ))}
          
      </Layout>
    );
  };
};

export const query = graphql`
 query MyQuery {
    allAirtable(filter:{table:{eq:"cv"}}){
        edges {
        node {
            data {
            Attachments {
                url
            }
            Name
            cats
            competances {
                childMarkdownRemark {
                html
                frontmatter {
                    title
                }
                }
            }
            }
        }
        }
    }
  }

`