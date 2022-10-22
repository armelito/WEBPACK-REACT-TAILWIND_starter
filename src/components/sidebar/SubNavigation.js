import React from 'react'
import classnames from 'classnames'
import { createPopper } from '@popperjs/core'
import { SubNavigationItem } from './SubNavigationItem'
import { useSidebar, useNavigation } from '../../hooks/sidebar/index'
import 
{ 
  StyledSubNavigationButton, 
  StyledNavigationLabel,
  StyledSubNavigation,
  StyledExpandIcon
}
from './styled/index'


export const SubNavigationComponent = (
  {
    children,
    label,
    open: openSubmenu,
    defaultOpen,
    active = false,
    onOpenChange,
    onClick,
  },
  ref,
) => 
{
  const { collapsed, transitionDuration } = useSidebar()
  const { renderNavigationItemStyles, closeOnClick } = useNavigation()

  const [open, setOpen] = React.useState(!!defaultOpen)
  const [openDefault, setOpenDefault] = React.useState(!!defaultOpen)
  const [openWhenCollapsed, setOpenWhenCollapsed] = React.useState(false)
  const [popperInstance, setPopperInstance] = React.useState()

  // Create a unique key for each node
  const childNodes = React.Children.toArray(children).filter(Boolean)

  const anchorRef = React.useRef(null)
  const SubMenuContentRef = React.useRef(null)

  const handleSlideToggle = (event) => 
  {
    onClick?.(event)

    if (typeof openSubmenu === 'undefined' && !(collapsed)) 
    {
      onOpenChange?.(!open)
      setOpen(!open)
    } 
    else 
    {
      onOpenChange?.(!openSubmenu)
    }
  }

  React.useEffect(() => 
  {
    if(collapsed && SubMenuContentRef.current && anchorRef.current) 
    {
      const instance = createPopper(anchorRef.current, SubMenuContentRef.current, 
      {
        placement: 'right',
        strategy: 'fixed',
        modifiers: 
        [
          {
            name: 'offset',
            options: 
            {
              offset: [0, 5],
            },
          },
        ],
      })

      setPopperInstance(instance)
    }
  }, [collapsed])

  React.useEffect(() => 
  {
    if(SubMenuContentRef.current && anchorRef.current) 
    {
      const ro = new ResizeObserver(() => 
      {
        if(popperInstance) popperInstance.update()
      })

      ro.observe(SubMenuContentRef.current)
      ro.observe(anchorRef.current)
    }

    setTimeout(() => 
    {
      if(popperInstance) popperInstance.update()
    }, 
    transitionDuration)
  }, 
  [ popperInstance, transitionDuration ])

  React.useLayoutEffect(() => 
  {
    setTimeout(() => popperInstance?.update(), transitionDuration)

    if(collapsed) 
    {
      setOpenWhenCollapsed(false)
      //setOpen(false)
    }
  }, [collapsed, transitionDuration, popperInstance])

  React.useEffect(() => 
  {
    const handleDocumentClick = event => 
    {
      if(!openWhenCollapsed && anchorRef.current?.contains(event.target))
        setOpenWhenCollapsed(true)

      else if(
        (closeOnClick &&
          !(event.target).closest('.navigation-item')?.classList.contains('sub-navigation')) ||
        (!SubMenuContentRef.current?.contains(event.target) && openWhenCollapsed)
      ) 
      {
        setOpenWhenCollapsed(false)
      }
    }

    document.removeEventListener('click', handleDocumentClick)

    if(collapsed) document.addEventListener('click', handleDocumentClick, false)

    return () => document.removeEventListener('click', handleDocumentClick)
  }, 
  [collapsed, closeOnClick, openWhenCollapsed])

  React.useEffect(() => 
  {
    if(openSubmenu) setOpenDefault(openSubmenu)
  }, [])

  return (
    <StyledSubNavigation
      ref={ref}
      className={classnames(
        'sub-navigation',
        'navigation-item',
        { active },
        { open: openSubmenu ?? open },
      )}
      navigationItemStyles={renderNavigationItemStyles?.({ collapsed: !!collapsed, active })}
    >

      <StyledSubNavigationButton
        ref={anchorRef}
        collapsed={collapsed ? 1 : undefined}
        className="navigation-anchor"
        onClick={handleSlideToggle}
      >
        <StyledExpandIcon className="expand-icon" collapsed={collapsed} open={openSubmenu ?? open} />
        <StyledNavigationLabel className="navigation-label">{label}</StyledNavigationLabel>
      </StyledSubNavigationButton>

      <SubNavigationItem
        ref={SubMenuContentRef}
        openWhenCollapsed={openWhenCollapsed}
        open={openSubmenu ?? open}
        collapsed={collapsed}
        defaultOpen={openDefault}
      >
        {
          childNodes.map((node) =>
            React.cloneElement(node, 
            {
              ...node.props
            })
          )
        }
      </SubNavigationItem>

    </StyledSubNavigation>
  )
}
export const SubNavigation = React.forwardRef(SubNavigationComponent)