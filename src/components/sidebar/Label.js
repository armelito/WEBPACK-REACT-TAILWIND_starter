import React from "react"

const SidebarLabel = (item, index, activeIndex) =>
{
  return (
    <Link to={item.to} key={index}>
      <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
        <div className="sidebar__menu__item__icon">
            {item.icon}
        </div>
        <div className="sidebar__menu__item__text">
            {item.display}
        </div>
      </div>
    </Link>
  )
}

export default SidebarLabel