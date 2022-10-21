import React from 'react'
import { SidebarContext } from '../../contexts/sidebar/SidebarContext.js'

export const useSidebar = () => 
{
  const context = React.useContext(SidebarContext)

  if (context === undefined) 
    throw new Error('Provider is required!')

  return context
}