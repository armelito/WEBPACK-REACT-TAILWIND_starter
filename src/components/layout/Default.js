import React from "react"
import Header from "./Header"

const DefaultLayout = ({ children }) => 
{
  return (
    <section>
      <Header/>
      <div>{ children }</div>
    </section>
  )
}

export default DefaultLayout
