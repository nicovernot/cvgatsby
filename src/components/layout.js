import React from "react"
import {StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Helmet } from 'react-helmet';

export default function Layout({ children}) {

  return (
    <div >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nicolas Vernot</title>
                <script src="https://kit.fontawesome.com/1c451dcf6c.js" crossorigin="anonymous"></script>
            </Helmet>
            <div style={{ margin: `3rem auto`,padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
         <nav className="navbar navbar-expand-sm alert-info navbar-ligth fixed-top">
        <a paintDrip color="aliceblue" href="/" style={{ textShadow: `none`, backgroundcolor: `azure` }}>
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

        </a>
        <ul style={{ listStyle: `none`, float: `right` }}>

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
    </nav>
      </header>
    </div>
      <div className="container">

      {children}
      </div>
        </div>
    
  )
}

