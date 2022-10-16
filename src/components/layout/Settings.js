import React from "react"
import { Outlet } from "react-router-dom"

const SettingsLayout = () => 
{
  return (
    <> 
      <h1>Settings</h1> 
      <Outlet />
    </>
  )
}

export default SettingsLayout
