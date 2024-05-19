import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../Layout/Admin/Header'
import AdminSidebar from '../../Layout/Admin/AdminSidebar'

function AdminRoot() {
  return (
    <div style={{ display: 'flex', position: 'relative', overflow: 'hidden' }}>
      <Header />
      <AdminSidebar />
      <Outlet />

    </div>
  )
}

export default AdminRoot
