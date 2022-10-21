import React from 'react'
import { NavigationContext } from '../../contexts/sidebar/NavigationContext'

export const useNavigation = () => 
{
  const context = React.useContext(NavigationContext)

  if(context === undefined)
    throw new Error('Navigation Component is required!')

  return context
}