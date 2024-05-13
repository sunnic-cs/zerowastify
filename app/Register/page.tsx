import React from 'react'


import SignUp from './SignUp'
import Logo from './Logo'

const Register = () => {
  return (
    <div className="lg:pt-[141px] lg:pl-[132px] lg:container px-4 mx-auto">
      <div className="flex flex-col lg:gap-x-[108px] justify-center items-center pl-[121px] lg:flex-row gap-y-6">
        <Logo />        
        <SignUp />    
      </div>
      <p className="text-[#3C3C3C] text-[14px] lg:pt-[242px] fixed bottom-5 left-6"> Copyright © 2024 ZeroWastify  </p>
    </div>
  )
}

export default Register