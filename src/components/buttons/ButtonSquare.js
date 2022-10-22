import React from "react"
import classnames from 'classnames'

const ButtonSquare = ({ icon, className, callback }) => 
{
  return (
    <button onClick={callback}>
      <figure className={classnames('button-square', className)}>
        {icon}
      </figure>
    </button>
  )
}

export default ButtonSquare
