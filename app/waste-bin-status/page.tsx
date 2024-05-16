'use client'

import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Header from './Header'
import Content from './Content'

const WasteBinStatus = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="px-5 lg:contaienr lg:px-20 mx-auto lg:py-[130px]">
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default WasteBinStatus