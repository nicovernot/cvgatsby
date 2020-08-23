import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
        <br/>
      <h3>{data.site.siteMetadata.title}</h3>
      <p>
      Depuis l'âge de cinq ou six ans mon grand père m’a appris à jouer au jeu d’échecs .Ce jeu a éveillé en moi la passion par la logique. Je me suis ensuite passionné par les jeu vidéo  à l’époque c'était pacman ou space invaders ce qui m’a conduit à m'intéresser à l’informatique. je me suis alors inscrit à la fac en informatique  mais malheureusement j’ai dû abandonner  suite à des problèmes familiaux. Mais je suis toujours resté en contact avec cette passion .

J’ai par la suite créé une entreprise  d’import-export basé sur Nice dans laquelle j’ai travaillé pendant douze ans.J'ai par la suite travaillé dans la logistique suite à un ras le bord en 2016  j’ai fais une demande de congé formation à l’afpa de saint jérôme pour un titre de développeur logiciel niveau bac+ 2 .J’ai ensuite enchaîné avec une alternance au grand port maritime de Marseille pour un diplôme bac+5 expert en système informatique.
 
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`