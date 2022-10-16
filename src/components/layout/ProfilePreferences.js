import React from "react"
import { Outlet } from "react-router-dom"

const ProfilePreferencesLayout = () => 
{
  return (
    <> 
      <h1>Preferences</h1> 
      <Outlet />
    </>
  )
}

export default ProfilePreferencesLayout
