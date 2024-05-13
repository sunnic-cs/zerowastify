import React from 'react'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className="flex flex-col pr-32">
        <div className="bg-[#FDFDFD] shadow-xl rounded-[32px] px-12 py-[23px]">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-[20px]">Create Your Account</h2>
                <p className="text-[#92949E] mb-6 text-[14px]">Welcome! Please fill in the details to get started.</p>
            </div>
            <form className="gap-y-[18px]">
            <div className="flex flex-row gap-x-[13px]">
                <div className="flex flex-col">
                <span className="py-1 text-[18px] w-1/2">First Name</span>
                <input type="text" className="bg-gray-100 p-3 rounded-md" />
                </div>
                <div className="flex flex-col">
                <span className="py-1 text-[18px] w-1/2">Last Name</span>
                <input type="text" className="bg-gray-100 p-3 rounded-md" />
                </div>     
            </div>

            <div className="flex flex-col">
                <span className="py-1 text-[18px]">Email</span>
                <input type="email" className="bg-gray-100 p-3 rounded-md" />
            </div>
            
            <div className="flex flex-col">
                <span className="py-1 text-[18px]">Password</span>
                <input type="password" className="bg-gray-100 p-3 rounded-md" />
            </div>
            
            <button type="submit" className="bg-[#497B94] hover:bg-[#4B96BC] w-full text-white font-bold py-3 px-6 mt-6 rounded-[8px]">Continue</button>
            </form>
            
        </div>
        <Link href="/Login" className="font-medium text-right pt-[14px] pr-6 hover:underline">Already have an account? Sign in &gt;&gt;</Link>
    </div>
  )
}

export default SignUp