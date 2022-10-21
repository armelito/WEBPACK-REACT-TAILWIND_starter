import React, { Suspense } from 'react'
import { AppSidebarProvider } from './components/sidebar/SidebarProvider'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'

const App = () =>
{
  return (
    <AppSidebarProvider>
      <BrowserRouter>
        <Suspense>
          <Router />
        </Suspense>
      </BrowserRouter>
    </AppSidebarProvider>
  )
}

export default App