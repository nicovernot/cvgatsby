import React from "react"


export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}