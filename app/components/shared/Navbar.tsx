import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../assets/ZeroWastifyLogo.png'
import UserProf from '../../../assets/userIcon.png'
import Menu from '../../../assets/Menu.png';

const navLinks = [
    {name : 'Home'},
    {name : 'Our Cause'},
    {name : 'Waste Bin Status'},
    {name : 'Leaderboards'},
    {name : 'Rewards'}
  ]

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
            <Image src={Logo} alt="Logo" />

            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                {navLinks.map((item,index) => (
                    <p className="text-[#36485C] font-medium" key={index}>{item.name}</p>
                ))}
            </div>
        </div>
        <div className="flex gap-x-5">    
            <div className="flex items-center gap-x-2">
                <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]">Register</p>
                <Image src={UserProf} alt="User Profile" />
                <span className="hidden font-medium text-[#36485c] lg:block">
                    Sign In
                </span>
            </div>
            
            <Image src={Menu} alt="Menu" className="lg:hidden" />
        </div>
    </nav>
  )
}

export default Navbar