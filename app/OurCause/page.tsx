import React from 'react'

import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import Features from './Features'
import Header from './Header'



const OurCause = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="px-5 lg:container lg:px-20 mx-auto">
        <Features />
      </div>
      
      <Footer /> 

    </>
  )
}

export default OurCause