import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

const Router = () =>
{
  let elements = useRoutes(routes)

  return (
    <div>
      {elements}
    </div>
  )
}

export default Router