import React from 'react'
import Image from 'next/image'
import leaderboardImage from '../../assets/LeaderboardHeader.png'

const Header = () => {
  return (
    <div className="px-4 lg:pt-10 lg:px-1">
        <div className="px-[20px] lg:px-[280px] lg:flex-row lg:flex">
          <div className="lg:px-[171px] text-left text-[36px] font-medium text-[#39845A] lg:text-[36px] lg:leading-[52px]">
            <h1>Climbing 
              <span className="text-black"> Towards Change</span>
              <h1 className="text-[#F39A75]">Meet
                <span className="text-[#1B1B1B]"> ZeroWast Warrior</span>
              </h1>
            </h1>
            <div className="top-full mt-[25px] border-b-2 border-black w-full"></div>
            <h3 className="text-[20px] text-black py-[19px]">Home &gt; Leaderboards</h3>
          </div>
          <Image className="rounded-[22px]" src={leaderboardImage} alt="poster"></Image>
        </div>
      </div>
  )
}

export default Header