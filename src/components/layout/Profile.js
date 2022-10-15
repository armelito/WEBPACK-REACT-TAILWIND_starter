import React from "react"
import { Outlet } from "react-router-dom"
import DefaultLayout from "./Default"

const ProfileLayout = () => 
{
  return (
    <DefaultLayout> 
      <h1>Profile Layout</h1> 
      <Outlet />
    </DefaultLayout>
  )
}

export default ProfileLayout
