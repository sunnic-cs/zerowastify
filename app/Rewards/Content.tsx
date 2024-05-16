import React from 'react'
import Image from 'next/image'

import arrowImage from '../../assets/Arrow 1.png'

const Content = () => {
  return (
    <div className="lg:py-[124px] lg:px-[197px] flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col font-medium">
          <h2 className="text-center text-[20px]">Pts</h2>
          <div className="bg-[#9A9A9A] rounded-[33px]">
            <h2 className="text-center px-[45px] py-[31px] text-white lg:text-[20px]">100</h2>
          </div>
        </div>
        <div className="flex flex-col font-medium text-center lg:text-[20px]">
          <h2>SWAP POINTS TO CASH</h2>
          <Image src={arrowImage} alt="arrow" className="pt-[44px] w-full" />
        </div>
        <div className="flex flex-col font-medium">
          <h2 className="text-center text-[20px]">Cash</h2>
          <div className="bg-[#9A9A9A] rounded-[33px]">
            <h2 className="text-center px-[45px] py-[31px] text-white lg:text-[20px]"><span>$</span> 100</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-[10px]">
        <button className="text-white bg-[#39845A] rounded-[25px] ">
          <h1 className="px-[17px] py-[30px] lg:text-[20px]">Exchange</h1>
        </button>
      </div>
      

    </div>
  )
}

export default Content