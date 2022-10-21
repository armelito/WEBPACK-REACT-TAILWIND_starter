import React from 'react'
import styled from 'styled-components'

let timer

const StyledSubNavigationItem = styled.div`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: height 300ms;
  box-sizing: border-box;
  background-color: white;
  ${({ collapsed }) =>
    collapsed &&
    `
     background-color: white;
     box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `}
  ${({ defaultOpen }) => defaultOpen && 'height: auto;display: block;'}
  ${({ collapsed, openWhenCollapsed }) =>
    collapsed
      ? `
    
      padding-left: 0px;
      width: 200px;
      border-radius: 4px;
      height: auto!important;
      display: block!important;     
      transition: none!important;     
      visibility: ${openWhenCollapsed ? 'visible' : 'hidden'};
     `
      : `
      position: static!important;
      transform: none!important;
      `};
`;

const duration = 300
const SubNavigationItemComponent = (
  { 
    children, 
    open, 
    openWhenCollapsed, 
    collapsed, 
    ...rest 
  },
  ref,
) => 
{
  const SubMenuContentRef = ref
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => 
  {
    clearTimeout(timer)

    if(mounted) 
    {
      if(open) 
      {
        const target = SubMenuContentRef?.current

        if(target) 
        {
          target.style.display = 'block'
          target.style.overflow = 'hidden'
          target.style.height = 'auto'
          const height = target.offsetHeight
          target.style.height = '0px'
          target.offsetHeight
          target.style.height = `${height}px`

          timer = setTimeout(() => 
          {
            target.style.overflow = 'auto'
            target.style.height = 'auto'
          }, 
          duration)
        }
      } 
      else 
      {
        const target = SubMenuContentRef?.current

        if(target) 
        {
          target.style.overflow = 'hidden'
          target.style.height = `${target.offsetHeight}px`
          target.offsetHeight
          target.style.height = '0px'

          timer = setTimeout(() => 
          {
            target.style.overflow = 'auto'
            target.style.display = 'none'
          }, 
          duration)
        }
      }
    }
    return () => clearTimeout(timer)

  }, 
  [open, SubMenuContentRef])

  React.useEffect(() => 
  {
    setMounted(true)
  }, 
  [])

  return (
    <StyledSubNavigationItem
      ref={ref}
      collapsed={collapsed}
      className="sub-menu-content"
      open={open}
      openWhenCollapsed={openWhenCollapsed}
      {...rest}
    >
      <ul>{children}</ul>
    </StyledSubNavigationItem>
  )
}

export const SubNavigationItem = React.forwardRef(SubNavigationItemComponent)