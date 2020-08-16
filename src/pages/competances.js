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
<div className="card" >

  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div style={{ padding: 10 }}>
    <CustomQueryStringComponent />
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
              Name
              competances {
                childMarkdownRemark {
                  excerpt
                  frontmatter {
                    date
                    title
                  }
                  html
                }
              }
            }
          }
        }
      }
    }

`