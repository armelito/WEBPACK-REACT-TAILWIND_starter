import React from "react"
import { Link } from "react-router-dom"

const SidebarLabel = ({ item }, index, activeIndex) =>
{
  return (
    <Link to={item.to} >
      <div className={`sidebar__nav__item ${activeIndex === index ? 'active' : ''}`}>
        <div className="sidebar__nav__item__icon">
            {item.icon}
        </div>
        <div className="sidebar__nav__item__text">
            {item.display}
        </div>
      </div>
    </Link>
  )
}

export default SidebarLabel