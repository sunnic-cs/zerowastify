import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import Logo from '../../assets/ZeroWastifyLogo.png'
import LoginButton from './LoginButton'

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
            <LoginButton />
            <div className="flex justify-center pt-5">
                <Link href="/register" className="font-medium text-center pr-6 hover:underline">Dont have an account? Sign up &gt;&gt;</Link>
            </div>
        </div>
    </div>
  )
}

export default Login