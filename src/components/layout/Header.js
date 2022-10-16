import React from "react"
import { Link } from 'react-router-dom'
import TechnisDefaultBase from '../icons/logos/TechnisDefaultBase'

const Header = () => 
{
  return (
    <header>
      <div id="logo" className="logo">
        <TechnisDefaultBase width='100%' height='100%'/>
      </div>
    </header>
  )
}
//<Link to='/' className='btn'> Back to HomePage </Link>
export default Header