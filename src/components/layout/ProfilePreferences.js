import React from "react"
import { Outlet } from "react-router-dom"
import DefaultLayout from "./Default"

const ProfilePreferencesLayout = () => 
{
  return (
    <DefaultLayout> 
      <h1>Preferences</h1> 
      <Outlet />
    </DefaultLayout>
  )
}

export default ProfilePreferencesLayout
