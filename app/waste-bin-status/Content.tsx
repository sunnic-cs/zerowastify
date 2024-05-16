import React from 'react'
import Link from 'next/link'

const Content = () => {
  return (
    <>
    <div className="text-center">
        <h1 className="text-[42px] font-medium tracking-wide"> Bin Status Tracker </h1>  
    </div>
    <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-[54px] lg:pt-[35px] lg:px-[121px]">
        <div className="w-full rounded-[9px] bg-[#FAF4DA] p-[25px] flex flex-col lg:justify-between text-center font-medium">
            
            <h3 className="text-[#1E3E5A] lg:text-[36px]">Bin A</h3>
            <p className="pt-[12px] text-[#68859E] lg:text-[24px]">Waste Fill</p>

            <h1 className="text-[#002B52] lg:text-[48px] lg:py-[63px]">100<span>%</span></h1>
            <Link href="/" className="lg:px-[64px] lg:py-[17px] rounded-[14px] bg-[#517697] text-[#FAF4DA] font-semibold text-[26px]">View More</Link>
            
        </div>

        <div className="w-full rounded-[9px] bg-[#FAF4DA] p-[25px] flex flex-col lg:justify-between text-center font-medium">
            
            <h3 className="text-[#1E3E5A] lg:text-[36px]">Bin B</h3>
            <p className="pt-[12px] text-[#68859E] lg:text-[24px]">Waste Fill</p>

            <h1 className="text-[#002B52] lg:text-[48px] lg:py-[63px]">100<span>%</span></h1>
            <Link href="/" className="lg:px-[64px] lg:py-[17px] rounded-[14px] bg-[#517697] text-[#FAF4DA] font-semibold text-[26px]">View More</Link>
            
        </div>

        <div className="w-full rounded-[9px] bg-[#FAF4DA] p-[25px] flex flex-col lg:justify-between text-center font-medium">
            
            <h3 className="text-[#1E3E5A] lg:text-[36px]">Bin C</h3>
            <p className="pt-[12px] text-[#68859E] lg:text-[24px]">Waste Fill</p>

            <h1 className="text-[#002B52] lg:text-[48px] lg:py-[63px]">100<span>%</span></h1>
            <Link href="/" className="lg:px-[64px] lg:py-[17px] rounded-[14px] bg-[#517697] text-[#FAF4DA] font-semibold text-[26px]">View More</Link>
        </div>
    </div>
    <div className="text-center lg:pt-[125px] lg:px-[205px]">
        <h1 className="text-[42px] font-medium">Best Collection Route</h1>
        <div className="lg:gap-x-[85px] lg:flex-row flex lg:pt-[70px]">
            <div className="w-full rounder-[8px] bg-[#FAF4DA] p-[68px]">
                <h1 className="font-medium text-[42px]">A</h1>
            </div>
            <div className="w-full rounder-[8px] bg-[#FAF4DA] p-[68px]">
                <h1 className="font-medium text-[42px]">B</h1>
            </div>
            <div className="w-full rounder-[8px] bg-[#FAF4DA] p-[68px]">
                <h1 className="font-medium text-[42px]">C</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content