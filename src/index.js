import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

function AppWithCallbackAfterRender() 
{
  useEffect(() => { console.log('Application rendered') })

  return <App />
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<AppWithCallbackAfterRender />)

module.hot.accept()
