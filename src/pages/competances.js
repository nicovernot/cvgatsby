import React from 'react'
import Layout from '../components/layout';
import CustomQueryStringComponent from "../components/customQueryStringComponent"
import customQueryStringComponent from '../components/customQueryStringComponent';

export default function competances({data}) {
  console.log(data)
  console.log(customQueryStringComponent)
    {
    return (
      <Layout>
          <br/>
          <div className="container-fluid">
          <div className="row">
                { data.allAirtable.edges.map((node) => (
                    <div className="card col-md-12" style={{margin: 10}}>
               <h3>{node.node.data.Name}</h3>
                    <div className="card-body">
                        <img src={node.node.data.Attachments[0].url}/>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: node.node.data.competances.childMarkdownRemark.html }}></p>

                    </div>
                    </div>
                ))}
           </div>         
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