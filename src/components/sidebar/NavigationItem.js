import React from 'react'
import classnames from 'classnames'
import 
{ 
  StyledNavigationItem,
  StyledNavigationLink,
  StyledNavigationLabel
} 
from './styled/index'

export const NavigationItemComponent = (
  {
    children,
    link,
    icon,
    active = false,
  },
  ref,
) => 
{
  return (
    <StyledNavigationItem ref={ref} className={classnames('navigation-item', { active })}>
      <StyledNavigationLink to={link} className={'navigation-anchor'} active={+active}>
        <figure className="navigation-icon">{icon}</figure>
        <StyledNavigationLabel className="navigation-label">{children}</StyledNavigationLabel>
      </StyledNavigationLink>
    </StyledNavigationItem >
  )
}

export const NavigationItem = React.forwardRef(NavigationItemComponent)
