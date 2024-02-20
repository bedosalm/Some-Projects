import React from 'react'
import Footer from './Footer/Footer'
import MenuNav from './Navbar/MenuNav'

function Layout({children}) {
  return (
    <>
    <MenuNav />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default Layout