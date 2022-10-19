import React from "react"
import sidebarNavItems from './items'
import OrganizationLabel from './OrganizationLabel'
import SidebarLabel from './Label'

const Sidebar = () =>
{
  return (
    <nav className="sidebar">
      <OrganizationLabel />
      {
        sidebarNavItems.map((item, index) => 
        ( 
          <SidebarLabel key={index} item={item} index={index} /> 
        ))
      }
    </nav>
  )
}

export default Sidebar