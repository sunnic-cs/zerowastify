import React from 'react'
import Login from './Login'

const page = () => {
  return (
    <div className="lg:pt-[141px] lg:container px-4 mx-auto">
      <div className="justify-center items-center pl-[141px]">
           <Login />
      </div>
      <p className="text-[#3C3C3C] text-[14px] lg:pt-[242px] fixed bottom-5 left-6"> Copyright © 2024 ZeroWastify  </p>
    </div>
  )
}

export default page