import React from "react"
import containerStyles from "./container.module.css"
const handleclick = () => {
  alert('click')
}
export default function Animation({ children }) {
  return <div className={containerStyles.container}>

<button onClick={handleclick}>Click</button>
  </div>
}