import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"

const DefaultLayout = () => 
{
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DefaultLayout
