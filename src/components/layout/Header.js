import React from "react"
import { Link } from 'react-router-dom'
import TechnisDefaultBase from '../icons/logos/TechnisDefaultBase'

const Header = () => 
{
  return (
    <div>
      <div id="logo" className="logo">
        <TechnisDefaultBase/>
      </div>
      <Link to='/' className='btn'> Back to HomePage </Link>
    </div>
  )
}

export default Header