import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import Logo from '../../assets/ZeroWastifyLogo.png'

const Login = () => {
  return (
    <div className="flex flex-col pr-32 lg:px-[333px] items-center py-12">
        <div className="bg-[#FDFDFD] shadow-xl rounded-[32px] px-12 py-[23px]">
            <div className="text-center">
                <div className="flex flex-row justify-center items-center">
                    <Image src={Logo} alt="Logo" /> 
                    <Link href="/" className="font-bold mb-4 text-[18px] text-[#497B94] pt-3 -ml-3">      
                        ZEROWASTIFY
                    </Link>
                </div>
                <p className="text-[#92949E] mb-6 text-[14px]">Welcome back! Please sign in to continue</p>
            </div>
            <form className="gap-y-[18px]">

            <div className="flex flex-col">
                <span className="py-1 text-[18px] font-medium">Email Address</span>
                <input type="email" className="bg-gray-100 p-3 rounded-md" />
            </div>
            
            <div className="flex flex-col">
                <span className="py-1 text-[18px] font-medium">Password</span>
                <input type="password" className="bg-gray-100 p-3 rounded-md " />
            </div>
            
            <button type="submit" className="bg-[#497B94] hover:bg-[#4B96BC] w-full text-white font-bold py-3 px-6 mt-6 rounded-[8px]">Continue</button>
            </form>
            <div className="flex justify-center pt-5">
                <Link href="/Register" className="font-medium text-center pr-6 hover:underline">Dont have an account? Sign up &gt;&gt;</Link>
            </div>
        </div>
    </div>
  )
}

export default Login