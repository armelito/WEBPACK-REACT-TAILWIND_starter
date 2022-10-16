import React from "react"
import { Outlet } from "react-router-dom"

const ProfileLayout = () => 
{
  return (
    <> 
      <h1>Profile Layout</h1> 
      <Outlet />
    </>
  )
}

export default ProfileLayout
