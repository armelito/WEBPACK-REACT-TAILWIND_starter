import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { SubNavigationItem } from './SubNavigationItem'
import { createPopper } from '@popperjs/core'
import { useSidebar } from '../../hooks/sidebar/useSidebar'
import { useNavigation } from '../../hooks/sidebar/useNavigation'
import { StyledNavigationLink } from './styled/StyledNavigationLink'
import { StyledNavigationLabel } from './styled/StyledNavigationLabel'

const StyledExpandIconWrapper = styled.span`
  ${({ collapsed }) =>
    collapsed &&
    `
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    `}
`;

const StyledExpandIcon = styled.span`
  display: inline-block;
  transition: transform 0.3s;
  border-left: 2px solid currentcolor;
  border-top: 2px solid currentcolor;
  width: 5px;
  height: 5px;
  transform: rotate(${({ open }) => (open ? '-135deg' : '-45deg')});
`;

const StyledExpandIconCollapsed = styled.span`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`;

const StyledSubMenu = styled.li`
  position: relative;
  width: 100%;

  ${({ navigationItemStyles }) => navigationItemStyles};
`;

export const SubNavigationComponent = (
  {
    children,
    link,
    className,
    label,
    icon,
    open: openSubmenu,
    defaultOpen,
    active = false,
    onOpenChange,
    onClick,
    ...rest
  },
  ref,
) => 
{
  const { collapsed, transitionDuration, toggled } = useSidebar()
  const { renderNavigationItemStyles, renderExpandIcon, closeOnClick } = useNavigation()

  const [open, setOpen] = React.useState(!!defaultOpen)
  const [openDefault, setOpenDefault] = React.useState(!!defaultOpen)
  const [openWhenCollapsed, setOpenWhenCollapsed] = React.useState(false)
  const [popperInstance, setPopperInstance] = React.useState()

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
        if(popperInstance) 
          popperInstance.update()
      })

      ro.observe(SubMenuContentRef.current)
      ro.observe(anchorRef.current)
    }

    setTimeout(() => 
    {
      if(popperInstance)  popperInstance.update()
    }, 
    transitionDuration)
  }, 
  [popperInstance, transitionDuration, toggled])

  React.useLayoutEffect(() => 
  {
    setTimeout(() => popperInstance?.update(), transitionDuration)

    if(collapsed) 
    {
      setOpenWhenCollapsed(false)
      setOpen(false)
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
    if (openSubmenu) setOpenDefault(openSubmenu)
  }, [])

  return (
    <StyledSubMenu
      ref={ref}
      className={classnames(
        'sub-navigation',
        'navigation-item',
        { active },
        { open: openSubmenu ?? open },
        className,
      )}
      navigationItemStyles={renderNavigationItemStyles?.({ collapsed: !!collapsed, active })}
    >
      <StyledNavigationLink
        ref={anchorRef}
        collapsed={collapsed ? 1 : undefined}
        className="navigation-anchor"
        onClick={handleSlideToggle}
        active={+active}
      >
        {icon && (
          <figure className="navigation-icon">
            {icon}
          </figure>
        )}

        <StyledNavigationLabel className="navigation-label">{label}</StyledNavigationLabel>

        <StyledExpandIconWrapper
          className="expand-icon"
          collapsed={collapsed}
        >
          {renderExpandIcon ? (
            renderExpandIcon({
              collapsed: !!collapsed,
              open: openSubmenu ?? open,
              active,
            })
          ) : collapsed ? (
            <StyledExpandIconCollapsed />
          ) : (
            <StyledExpandIcon open={openSubmenu ?? open} />
          )}
        </StyledExpandIconWrapper>
      </StyledNavigationLink>
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
    </StyledSubMenu>
  )
}
export const SubNavigation = React.forwardRef(SubNavigationComponent)