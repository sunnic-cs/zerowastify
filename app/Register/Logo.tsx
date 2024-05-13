import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logos from '../../assets/ZeroWastifyLogo 1.png'

const Logo = () => {
  return (
    <div className="flex flex-col items-center pr-32 lg:pr-4 pt-5 text-center leading-12">
        <Image src={Logos} alt="Logo" />
        <Link href="/" className="lg:tracking-wider lg:text-[36px] text-[#497B94] text-[28px] font-bold"> ZEROWASTIFY </Link>
        <h1 className="text-[#497B94] lg:text-[28px] font-semibold text-[20px]">Smart Waste Management System</h1>
    </div>
  )
}

export default Logo