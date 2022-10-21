import React from "react"
import { Link } from "react-router-dom"
import { SidebarLogoSquare } from "../icons/sidebar/index"

const OrganizationLabel = () =>
{
  return (
    <Link to="/" className="organization" >
      <figure className="organization__logo">
        <SidebarLogoSquare width="43" height="43" />
      </figure>
      <h6 className="organization__title">Technis</h6>
    </Link>
  )
}

export default OrganizationLabel