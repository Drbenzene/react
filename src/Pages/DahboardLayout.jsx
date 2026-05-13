import React from 'react'
import { Outlet } from 'react-router-dom'

function DahboardLayout() {
  return (
    <div>DahboardLayout
      <Outlet/>
    </div>
  )
}

export default DahboardLayout