import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import arrowImage from '../../assets/Arrow 1.png'
import axios from 'axios';

const Content = () => {
  
  const [points, setPoints] = useState();
  const [cash, setCash] = useState();

  const getCurrentStat = async () => {
    try {
      const response = await axios.get('/api/users/my-points-cash')
      setPoints(response.data.payload.points);
      setCash(response.data.payload.cash);
    } catch (err : any) {
      console.log("Error fecthing data : ", err.message);
    }
  }

  const onRefreshPoints = async () => {
    try {
      const response = await axios.patch('/api/transaction/waste-points')
      console.log(response.data.payload);
      setPoints(response.data.payload.points);
    } catch (err : any) {
      console.log("Error fecthing data : ", err.message);
    }
  }

  const onExchangeCash = async () => {
    try {
      const response = await axios.patch('/api/transaction/point-cash')
      setCash(response.data.payload.cash);
    }catch (err : any) {
      console.log("Error fecthing data : ", err.message);
    }
  }

  useEffect(() => {
    getCurrentStat();
  }, [cash]);

  return (
    <div className="lg:py-[124px] lg:px-[197px] flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col font-medium">
          <h2 className="text-center text-[20px]">Collected Pts</h2>
          <div className="bg-[#9A9A9A] rounded-[33px]">
            <h2 className="text-center px-[45px] py-[31px] text-white lg:text-[20px]">{points}</h2>
          </div>
        </div>
        <div className="flex flex-col font-medium text-center lg:text-[20px]">
          <h2>SWAP POINTS TO CASH</h2>
          <Image src={arrowImage} alt="arrow" className="pt-[44px] w-full" />
        </div>
        <div className="flex flex-col font-medium">
          <h2 className="text-center text-[20px]">Collected Cash</h2>
          <div className="bg-[#9A9A9A] rounded-[33px]">
            <h2 className="text-center px-[45px] py-[31px] text-white lg:text-[20px]"><span>$</span>{cash}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-10">
        <div className="flex justify-center pt-[10px]">
          <button className="text-white bg-[#39845A] rounded-[25px] " onClick={onRefreshPoints}>
            <h1 className="px-[17px] py-[30px] lg:text-[20px]">Refresh Points</h1>
          </button>
        </div>
        <div className="flex justify-center pt-[10px]">
          <button className="text-white bg-[#39845A] rounded-[25px] " onClick={onExchangeCash}>
            <h1 className="px-[17px] py-[30px] lg:text-[20px]">Exchange to Cash</h1>
          </button>
        </div>
      </div>
      

    </div>
  )
}

export default Content
