import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './styles/index.css'

function AppCallback({ callback }) 
{
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const callback = () => console.log("rendered")

const rootElement = document.getElementById('app')

module.hot ? 
  ReactDOMClient.createRoot(rootElement).render(<AppCallback callback={callback}/>) : 
  ReactDOMClient.hydrateRoot(rootElement, <App tab="home" />)

if(typeof module.hot !== "undefined")
  module.hot.accept()
