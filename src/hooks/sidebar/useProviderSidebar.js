import React from 'react'
import { useSidebar } from './useSidebar'

export const useProviderSidebar = () => 
{
  const 
  {
    updateSidebarState,
    updateCollapseState,
    collapsed,
  } 
  = useSidebar()

  const collapseSidebar = React.useCallback(
    (value) => 
    {
      if (value === undefined) updateCollapseState()
      else updateSidebarState({ collapsed: value })
    },
    [updateCollapseState, updateSidebarState]
  )

  return {
    collapseSidebar,
    collapsed: !!collapsed,
  };
};