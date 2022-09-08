import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"
import Navbar from "../../Navbar/Navbar"
import Contact from "../Contact"
import Home from "../Home"

const Layout = () => {
  return (
   <>
   <CssBaseline />
   <Navbar />
   <Outlet />
   </>
  )
}

export default Layout