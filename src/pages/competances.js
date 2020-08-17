import React from 'react'
import Layout from '../components/layout';
import { Reveal, Tween } from 'react-gsap';
const params = new URLSearchParams(document.location.search.substring(1));
const param =params.get("cat"); 
let boolparam =false


export default function competances({data}) {
     
    let result = data.allAirtable.edges
    let filterdata = result.filter(function (node) {
     if(param) return node.node.data.cats[0]===decodeURI(param);
     return node
  })
    console.log(filterdata) 
    
    {
    return (
      <Layout>
          <br/>
           { param ? "param":"pas param"}
          <div className="container-fluid">
                { filterdata.map((node,key) => (
         <div key={key} className="row">
            <Reveal >
            <Tween from={{ opacity: 0 }} duration={2}>
                <div className="card col-md-12" style={{margin: 10}}>
                            <h3>{key}  --{node.node.data.Name}</h3>
                                <div className="card-body alert-info">
                                    <img src={node.node.data.Attachments[0].url} style={{width: 180}}/>
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: node.node.data.competances.childMarkdownRemark.html }}></p>
                                    <h4><span className="badge badge-info">{node.node.data.cats.join(",")}</span></h4>
                                </div>
                </div>
            </Tween>
            </Reveal>
                    
           </div>         
                ))}
           </div>  
      </Layout>
    );
  };
};

export const query = graphql`
  query {
    allAirtable{
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