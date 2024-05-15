import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Header from './Header'
import Content from './Content'

const page = () => {
  return (
    <>
    <Navbar />
    <Header />
    <div>
        <Content />
    </div>

    <Footer />
    </>
  )
}

export default page