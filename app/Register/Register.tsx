import React from 'react'
import Link from 'next/link'
import RegisterButton from './RegisterButton'

const SignUp = () => {
  return (
    <div className="flex flex-col pr-32">
        <div className="bg-[#FDFDFD] shadow-xl rounded-[32px] px-12 py-[23px]">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-[20px]">Create Your Account</h2>
                <p className="text-[#92949E] mb-6 text-[14px]">Welcome! Please fill in the details to get started.</p>
            </div>
        <RegisterButton />    
        </div>
        <Link href="/login" className="font-medium text-right pt-[14px] pr-6 hover:underline">Already have an account? Sign in &gt;&gt;</Link>
    </div>
  )
}

export default SignUp