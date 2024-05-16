import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/ZeroWastifyLogo.png'
import UserProf from '../../../assets/userIcon.png'
import Menu from '../../../assets/Menu.png';
import axios from 'axios'

const navLinks = [
    {name : 'Home', route:'/'},
    {name : 'Our Cause', route:'/our-cause'},
    {name : 'Waste Bin Status', route:'/waste-bin-status'},
    {name : 'Leaderboards', route:'/leaderboards'},
    {name : 'Rewards', route:'/rewards'}
  ]

const Navbar = () => {

    // const { authUser } = useAuthContext();

    // const [jwt, setJwt] = useState<string | null>(null);

    // useEffect(() => {
    //   // Type guard to check if window and sessionStorage exist
    //   if (typeof window !== 'undefined' && 'sessionStorage' in window) {
    //     const storedJwt = window.sessionStorage.getItem("jwt");
    //     setJwt(storedJwt);
    //   }
    // }, []);
    // Above code is to do the same thing such as verifyToken in the client side where token is saved in the sessionStorage

    const [ user, setUser ] = useState<string | null>();


    useEffect(() => {
      // Type guard to check if window and sessionStorage exist
      if(typeof window !=='undefined' && 'localStorage' in window) {
        const storedUser = window.localStorage.getItem("user");
        if(storedUser !== null) {
            setUser(storedUser);
        }     
    }
    }, []);

    const onLogOut = async () => {
        const res = await axios.post('/api/users/logout')
        if(res) {
            localStorage.removeItem("user");
            sessionStorage.removeItem("jwt")
            setUser(null);
        }
    }
    
    

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
            <Image src={Logo} alt="Logo" />

            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                {navLinks.map((item,index) => (
                    <Link className="text-[#36485C] font-medium" key={index} href={item.route}>{item.name}</Link>
                ))}
            </div>
        </div>
        <div className="flex gap-x-5">    
            <div className="flex items-center gap-x-2">
                {user ? (
                    <>
                    
                    <button onClick={onLogOut} className="hidden font-medium text-[#36485c] lg:block px-10">
                        Log Out
                    </button>
                    <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]">Hi, {user}</p>
                    </>
                    ) : (
                    <>
                        <Link href="/register" className="hidden lg:block font-medium text-[#36485c] pr-[56px]">
                        Register
                        </Link>
                        <Image src={UserProf} alt="User Profile" />
                        <Link href="/login" className="hidden font-medium text-[#36485c] lg:block">
                            Sign In
                        </Link>
                    </>
                )}
            </div>
            
            <Image src={Menu} alt="Menu" className="lg:hidden" />
        </div>
    </nav>
  )
}

export default Navbar