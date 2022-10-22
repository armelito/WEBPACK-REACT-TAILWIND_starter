import React from 'react'
import classnames from 'classnames'
import { useSidebar } from '../../hooks/sidebar/useSidebar'
import { useNavigation } from '../../hooks/sidebar/useNavigation'
import { StyledNavigationItem } from './styled/StyledNavigationItem'
import { StyledNavigationLink } from './styled/StyledNavigationLink'
import { StyledNavigationLabel } from './styled/StyledNavigationLabel'

export const NavigationItemComponent = (
  {
    children,
    link,
    icon,
    className,
    active = false,
  },
  ref,
) => 
{
  const { collapsed } = useSidebar()
  const { renderNavigationItemStyles } = useNavigation()

  return (
    <StyledNavigationItem 
      ref={ref}
      className={classnames('navigation-item', { active }, className)}
      navigationItemStyles={renderNavigationItemStyles?.({ collapsed: !!collapsed, active })}
    >
      <StyledNavigationLink 
        to={link} 
        className={'navigation-anchor'} 
        active={+active}
      >
        {icon && (
          <figure className="navigation-icon">
            {icon}
          </figure>
        )}
        {children && (
          <StyledNavigationLabel className="navigation-label btn-default">
            {children}
          </StyledNavigationLabel>
        )}
      </StyledNavigationLink>
    </StyledNavigationItem >
  )
}

export const NavigationItem = React.forwardRef(NavigationItemComponent)
