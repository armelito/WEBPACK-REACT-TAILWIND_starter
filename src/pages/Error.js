import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => 
{
  return (
    <main className='section'>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to='/'>back home</Link>
    </main>
  )
}
export default Error