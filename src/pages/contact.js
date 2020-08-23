import React from "react"
import Layout from "../components/layout"


export default function Contact() {
  return (
      <Layout>
  <br/>
    <div>

      <br/>
      <h3>Pour me contacter cliquez sur le lien qui suit</h3>
      <div className="jumbotron alert-success">
      <a className="badge badge-success"
      href="javascript:void(
        window.open(
          'https://form.jotform.com/202341320663342',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
     Formulaire contact
    </a>
</div>
      
     

    </div>
      </Layout>
  )
}