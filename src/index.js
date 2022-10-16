import React, { useEffect } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './styles/index.css'

const rootElement = document.getElementById('app')

function AppCallback() 
{
  useEffect(() => 
  {
    console.log('rendered')
  })

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

module.hot ? 
  ReactDOMClient.createRoot(rootElement).render(<AppCallback />) : 
  ReactDOMClient.hydrateRoot(rootElement, <App tab="home" />)

if(typeof module.hot !== "undefined")
  module.hot.accept()
