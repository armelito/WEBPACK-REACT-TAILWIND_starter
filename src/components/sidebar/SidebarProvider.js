import React from 'react'
import { SidebarProvider } from '../../contexts/sidebar/SidebarContext'

export const AppSidebarProvider = ({ children }) => 
{
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}