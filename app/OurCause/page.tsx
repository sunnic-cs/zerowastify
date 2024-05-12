import React from 'react'
import Image from 'next/image'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import ourcauseImage from '../../assets/ourCauseHeader.png'

const OurCause = () => {
  return (
    <>
      <Navbar />
      
      <div className="px-4 lg:pt-10 lg:px-1">
        <div className="px-[20px] lg:px-[280px] lg:flex-row lg:flex">
          <div className="lg:px-[171px] text-left text-[30px] font-medium text-[#39845A] lg:text-[36px] lg:leading-[52px]">
            <h1>Introducing 
              <span className="text-black"> Our</span>
              <h1>Smart Waste 
                <span className="text-black"> Management System</span>
              </h1>
            </h1>
            <div className="top-full mt-[25px] border-b-2 border-black w-full"></div>
            <h3 className="text-[20px] text-black py-[19px]">Home &gt; Our Cause</h3>
          </div>
          <Image className="rounded-lg" src={ourcauseImage} alt="poster"></Image>
        </div>
      </div>

      
      
      <Footer />
      
    </>
  )
}

export default OurCause