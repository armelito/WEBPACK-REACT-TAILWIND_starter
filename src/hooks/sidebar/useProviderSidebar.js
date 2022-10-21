import React from 'react'
import { useSidebar } from './useSidebar'

export const useProSidebar = () => 
{
  const 
  {
    updateSidebarState,
    updateCollapseState,
    updateToggleState,
    collapsed,
    toggled,
    //rtl,
  } = useSidebar()

  const collapseSidebar = React.useCallback(
    (value) => 
    {
      if (value === undefined) updateCollapseState()
      else updateSidebarState({ collapsed: value })
    },
    [updateCollapseState, updateSidebarState]
  )

  const toggleSidebar = React.useCallback(
    (value) => 
    {
      if (value === undefined) updateToggleState()
      else updateSidebarState({ toggled: value })
    },
    [updateToggleState, updateSidebarState],
  )

  return {
    collapseSidebar,
    toggleSidebar,
    collapsed: !!collapsed,
    toggled: !!toggled,
    //rtl: !!rtl,
  };
};