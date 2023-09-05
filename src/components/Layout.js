import React from 'react'
import Spinner from './Spinner'
import Topbar from './Topbar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Copyright from './Copyright'

export default function Layout() {
  return (
    <>
        <Spinner />
        <Topbar />
        <Navbar />
        <Outlet />
        <Footer />
        <Copyright />
    </>
  )
}
