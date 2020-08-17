import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Animation from '../components/animation'
import Customll from '../components/customQueryStringComponent'
import { Reveal, Tween } from 'react-gsap'; 

export default function Home({ data }) {
 
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
        Compétences:
        </h1>
        <Animation/>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <Customll/>
        {data.allMarkdownRemark.edges.map(({ node }) => (
        <Reveal repeat>
        <Tween from={{ opacity: 0 }} duration={2}> 
         <div className="card text-center" style={{ margin: 20}} key={node.id}>
            <Link
              to={node.frontmatter.title}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}

              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
          </Tween>
</Reveal>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            
            title
          }
         
        }
      }
    }
  }
`