import React from "react"
import { Outlet } from "react-router-dom"
import DefaultLayout from "./Default"

const SettingsLayout = () => 
{
  return (
    <DefaultLayout> 
      <h1>Settings</h1> 
      <Outlet />
    </DefaultLayout>
  )
}

export default SettingsLayout
