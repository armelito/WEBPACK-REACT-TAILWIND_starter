import React from 'react'

export const SidebarContext = React.createContext(undefined)

export const SidebarProvider = ({ children }) => 
{
  const [ sidebarState, setSidebarState ] = React.useState()

  const updateSidebarState = React.useCallback((values) => 
  {
    setSidebarState((prevState) => ({ ...prevState, ...values }))
  }, [])

  const updateCollapseState = React.useCallback(() => 
  {
    setSidebarState((prevState) => ({ ...prevState, collapsed: !Boolean(prevState?.collapsed) }))
  }, [])

  const providerValue = React.useMemo(
    () => ({ ...sidebarState, updateSidebarState, updateCollapseState }),
    [ sidebarState, updateCollapseState, updateSidebarState ],
  )

  console.log(providerValue)

  return <SidebarContext.Provider value={providerValue}>{children}</SidebarContext.Provider>
}