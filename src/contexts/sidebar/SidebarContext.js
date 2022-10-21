import React from 'react'

export const SidebarContext = React.createContext(undefined)

export const SidebarProvider = ({ children }) => 
{
  const [sidebarState, setSidebarState] = React.useState()

  const updateSidebarState = React.useCallback((values) => 
  {
    setSidebarState((prevState) => ({ ...prevState, ...values }))
  }, [])

  const updateCollapseState = React.useCallback(() => 
  {
    setSidebarState((prevState) => ({ ...prevState, collapsed }))
  }, [])

  const updateToggleState = React.useCallback(() => 
  {
    setSidebarState((prevState) => ({ ...prevState, toggled }))
  }, [])

  const providerValue = React.useMemo(
    () => ({ ...sidebarState, updateSidebarState, updateCollapseState, updateToggleState }),
    [sidebarState, updateCollapseState, updateSidebarState, updateToggleState],
  )

  return <SidebarContext.Provider value={providerValue}>{children}</SidebarContext.Provider>
}