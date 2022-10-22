import React from 'react'
import classnames from 'classnames'
import { NavigationContext } from '../../contexts/sidebar/NavigationContext'

const NavigationComponent = (
  { 
    children, 
    className, 
    closeOnClick = false
  },
  ref,
) => 
{
  const [ navigationState, setNavigationState ] = React.useState()

  const updateNavigationState = React.useCallback((values) => 
  {
    setNavigationState((prevState) => ({ ...prevState, ...values }))
  }, [])

  const providerValue = React.useMemo(
    () => ({ ...navigationState, updateNavigationState }),
    [ navigationState, updateNavigationState ],
  )

  React.useEffect(() => 
  {
    updateNavigationState({ closeOnClick })
  }, [ closeOnClick, updateNavigationState ])

  return (
    <NavigationContext.Provider value={providerValue}>
      <nav ref={ref} className={classnames('navigation', className)}>
        <ul>{children}</ul>
      </nav>
    </NavigationContext.Provider>
  )
}

export const Navigation = React.forwardRef(NavigationComponent)
