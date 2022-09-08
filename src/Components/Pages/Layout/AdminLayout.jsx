import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
        <CssBaseline />
   
        <Outlet />
        </>
       )
}

export default AdminLayout