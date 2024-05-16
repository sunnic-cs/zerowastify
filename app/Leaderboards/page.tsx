'use client'

import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Header from './Header'
import Content from './Content'

const Leaderboards = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="px-5 lg:container lg:px-20 mx-auto">
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default Leaderboards