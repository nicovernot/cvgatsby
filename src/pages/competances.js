import React from 'react'
import Layout from '../components/layout';
import CustomQueryStringComponent from "../components/customQueryStringComponent"
import customQueryStringComponent from '../components/customQueryStringComponent';
let params = new URLSearchParams(document.location.search.substring(1));
let param = params.get("cat"); 

export default function competances({data}) {

  console.log(data)
 
    {
    return (
      <Layout>
          <br/>
          <div className="container-fluid">
                { data.allAirtable.edges.map((node,key) => (
         <div key={key} className="row">

                    <div className="card col-md-12" style={{margin: 10}}>
                <h3>{key}  --{node.node.data.Name}</h3>
                    <div className="card-body alert-info">
                        <img src={node.node.data.Attachments[0].url} style={{width: 180}}/>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: node.node.data.competances.childMarkdownRemark.html }}></p>
                       
                       <h4><span className="badge badge-info">{node.node.data.cats.join(",")}</span></h4>
                    </div>
                    </div>
           </div>         
                ))}
           </div>  
      </Layout>
    );
  };
};

export const query = graphql`
  query {
    allAirtable {
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