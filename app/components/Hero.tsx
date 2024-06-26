import BlueArrow from '../../assets/BlueArrow.png'

import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react';

export function Hero() {

    const [user, setUser] = useState<string | null>();

    useEffect(() => {
        if(typeof window!=='undefined' && 'localStorage' in window) {
            const storedUser = window.localStorage.getItem("user");
            if(storedUser !== null) {
                setUser(storedUser)
            }
        }
    }, [user])

    

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
                    {user ? (
                        <>
                        <Link 
                        href='/leaderboards' 
                        className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit"
                        >Top Contributors</Link>    
                        </> 
                    ):
                    (
                        <>
                        <Link 
                            href='/register' 
                            className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit"
                            >Join us for free</Link>
                        </>
                    )
                    }
                    
                    <Link href='/our-cause' className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">
                        Learn more
                        <span>
                            <Image src={BlueArrow} alt="Learn more" />
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}