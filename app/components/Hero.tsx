import BlueArrow from '../../assets/BlueArrow.png'

import Image from 'next/image'

export function Hero() {
    return(
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
                    Revolutionizing Waste Management With Our Smart Solution
                </h1>
                <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
                    Transform your waste management game with our Smart System! 
                    Gain real-time insights and optimize operations effortlessly. 
                    Streamline your workflow, boost productivity, and make sustainability a breeze. 
                    Revolutionize your approach to waste management today!
                </p>

                <div className="flex w-full pt-8 justify-center gap-x-6">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">Join us for free</button>
                    <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">
                        Learn more
                        <span>
                            <Image src={BlueArrow} alt="Learn more" />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}