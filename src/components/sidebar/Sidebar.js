import React from "react"
import classNames from "classnames"
import styled from 'styled-components'
import { useSidebar } from '../../hooks/sidebar/useSidebar'
import { StyledSidebar } from './styled/StyledSidebar'

const SidebarComponent = ({
    width = '250px',
    collapsedWidth = '80px',
    defaultCollapsed = false,
    className,
    children,
    transitionDuration = 300,
    ...rest
  },
  ref,
) =>
{
  const 
  {
    updateSidebarState,
    collapsed: collapsedContext,
    width: widthContext,
    collapsedWidth: collapsedWidthContext,
    toggled: toggledContext,
    transitionDuration: transitionDurationContext,
  } 
  = useSidebar()

  React.useEffect(() => 
  {
    updateSidebarState({ width, collapsedWidth })
  }, [width, collapsedWidth, updateSidebarState ])

  React.useEffect(() => 
  {
    updateSidebarState({
      collapsed: defaultCollapsed,
      transitionDuration,
      toggled: false,
    })
  }, [defaultCollapsed, transitionDuration, updateSidebarState])

  return (
    <StyledSidebar
      ref={ref}
      collapsed={collapsedContext}
      toggled={toggledContext}
      width={widthContext}
      collapsedWidth={collapsedWidthContext}
      transitionDuration={transitionDurationContext ?? 300}
      className={classNames(
      'sidebar',
        { collapsed: collapsedContext, toggled: toggledContext },
        className,
      )}
      {...rest}
    >
      {children}
    </StyledSidebar>
  )
}

export const Sidebar = React.forwardRef(SidebarComponent)