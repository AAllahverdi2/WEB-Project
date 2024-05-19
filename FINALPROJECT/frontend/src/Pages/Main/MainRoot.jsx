import React from 'react'
import Header from '../../Layout/Main/Header'
import { Outlet } from 'react-router'
import Footer from '../../Layout/Main/Footer'
import Top from '../../Layout/Main/Top'

function MainRoot() {
  return (
    <div>
        <Top/>
        <Header/>
        <Outlet/>
        <Footer/>

      
    </div>
  )
}

export default MainRoot
