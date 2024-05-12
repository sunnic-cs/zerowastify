import React from 'react'
import Image from 'next/image';

import Logo from "../../../assets/ZeroWastifyLogo.png"
import FacebookIcon from "../../../assets/facebook_icon.png"
import InstagramIcon from "../../../assets/instagram_icon.png"
import XIcon from "../../../assets/x_icon.png"

const Footer = () => {
  return (
    <div className='pt-[288px] pb-[40px]'>
        <div className = "flex items-center justify-center pr-[30px]">
            <Image src={Logo} alt="Logo" />
            <p className="font-bold text-[#5B88AA] text-[24px] tracking-wider">ZEROWASTIFY</p>
        </div>

        <ul className="flex flex-col items-center gap-y-[28px] pt-[13px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
            <li>Kuala Lumpur</li>
            <li>Malaysia</li>
            <li>{'(60)'} 123 321 123</li>
            <li>zerowast@mail.zw.my</li>
        </ul>

        <p className='pt-[56px] text-center text-[14px] font-medium text-[#404040] sm:pt-5'>Copyright © 2024 ZeroWastify All Right Reserved</p>

        <div className="flex items-center justify-center gap-x-[56px] pt-[40px] sm:pt-5">
            <Image src={FacebookIcon} alt="Facebook" />
            <Image src={InstagramIcon} alt="Facebook" />
            <Image src={XIcon} alt="Facebook" />
        </div>
    </div>
  )
}

export default Footer