import React from "react"
import Layout from "../components/layout"


export default function Contact() {
  return (
      <Layout>
  <br/>
    <div>
      <h1>Pour me contacter cliquez sur le lien qui suit</h1>
  
      
     
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
      </Layout>
  )
}