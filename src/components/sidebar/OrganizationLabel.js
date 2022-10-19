import React from "react"
import { Link } from "react-router-dom"
import { SidebarLogoSquare, SidebarLogoSquare20, SidebarLogoSquare43 } from "../icons/sidebar/index"

const OrganizationLabel = () =>
{
  return (
    <Link to="/" >
      <figure className="sidebar__organization__logo">
        <SidebarLogoSquare />
        <SidebarLogoSquare20 />
        <SidebarLogoSquare43 />
      </figure>
      <h6 className="sidebar__organization__title">Technis</h6>
    </Link>
  )
}

export default OrganizationLabel