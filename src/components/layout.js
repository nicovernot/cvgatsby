import React from "react"
import {StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Helmet } from 'react-helmet';
import { Link } from "@reach/router";

export default function Layout({ children}) {

  return (
    <div >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nicolas Vernot</title>
                <script src="https://kit.fontawesome.com/1c451dcf6c.js" crossorigin="anonymous"></script>
            </Helmet>
            <div >
      <header style={{ marginBottom: `1.5rem` }}>
         <nav className="navbar navbar-expand-md  bg-dark fixed-top navbar-dark">
        <Link paintDrip color="aliceblue" to="/">
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

        </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
        
    <li className="nav-item dropdown"  className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Compétences
      </a>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to="/#langs">Langages de programmation</Link>
        <Link className="dropdown-item" to="/#sys">Système</Link>
        <Link className="dropdown-item" to="/#dbs">Basses de données</Link>
        <Link className="dropdown-item" to="/#fram">Frameworks-librairies</Link>
        <Link className="dropdown-item" to="/#gproj">Gestion de projet</Link>
      </div>
    </li>
    <li  className="nav-item">
    <Link to="/#projs" style={{padding: '1.5rem' }}>Projets</Link>
        </li>
    <li  className="nav-item">
        <AniLink paintDrip color="beige" to="/about">
           About
        </AniLink>
        </li>
        <li  className="nav-item ">
        <AniLink paintDrip  color="azure" to="/contact" style={{padding: '1.5rem' }}>
           Contact
        </AniLink>
        </li>
        <li  className="nav-item ">
        <AniLink paintDrip color="lavender" to="/blog" style={{padding: '1.5rem' }}>
           Blog
        </AniLink>
        </li>
        </ul>
        </div>
    </nav>
      </header>
    </div>
  <br/>
  <br/>
    
        <br/>
      <div className="container">
      {children}
      </div>
        </div>
    
  )
}

