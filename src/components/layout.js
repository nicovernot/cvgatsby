import React from "react"
import {StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Helmet } from 'react-helmet';

export default function Layout({ children}) {

  return (
    <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nicolas Vernot</title>
                <script src="https://kit.fontawesome.com/1c451dcf6c.js" crossorigin="anonymous"></script>
            </Helmet>
            <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <AniLink paintDrip color="aliceblue" to="/" style={{ textShadow: `none`, backgroundcolor: `azure` }}>
        <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <header>
          <h3>{data.site.siteMetadata.title}</h3>
        </header>
      )}
    />
        </AniLink>
        <ul style={{ listStyle: `none`, float: `right` }}>
        <AniLink paintDrip color="powderblue" to="/competences" style={{padding: '1.5rem' }}>
           Compétences
        </AniLink>
        <AniLink paintDrip color="beige" to="/about" style={{padding: '1.5rem' }}>
           About
        </AniLink>
        <AniLink paintDrip  color="azure" to="/contact" style={{padding: '1.5rem' }}>
           Contact
        </AniLink>
        <AniLink paintDrip color="lavender" to="/blog" style={{padding: '1.5rem' }}>
           Blog
        </AniLink>
          
        </ul>
      </header>
      {children}
    </div>
        </div>
    
  )
}

