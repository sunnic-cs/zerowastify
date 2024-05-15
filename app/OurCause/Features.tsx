import React from 'react'
import Image from 'next/image'
import checkImage from '../../assets/Check.png'

const Features = () => {
  return (
    <>
      <div className="py-[48px] lg:py-[84px]">
        <h1 className="text-[#172026] lg:font-medium text-center lg:text-[42px] text-2xl">
            Highlights
        </h1>
        <p className="pt-[16px] pb-[10px] text-center text-[#36485C]">
          Key Features
        </p>
      </div>

      <div className="flex flex-col gap-y-6 lg:flex-row gap-x-[24px] lg:px-[131px]">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
            <div>
                <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
                  Bin Monitoring
                </h3>
                <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
                  Smart Sensors, Smarter Bins
                </p>
                <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Real-time Monitoring
                  </li>
                  
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Cost Efficiency
                  </li>
                  
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Environmental Impact
                  </li>
                </ul>
            </div>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
            <div>
                <h3 className="font-medium text-[#FFFFFF] text-[18px] lg:text-xl lg:justify-between">
                  Route Optimization
                </h3>
                <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
                  Navigate Wisely
                </p>
                <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Real-time Monitoring
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Cost Efficiency
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Environmental Impact
                  </li>
                </ul>
            </div>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
            <div>
                <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
                  Data Analytics
                </h3>
                <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
                  Insight that Matter
                </p>
                <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Predictive Insights
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Performance Monitoring
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <Image src={checkImage} alt="included" />
                    </span>
                    Informed Decision Making
                  </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Features