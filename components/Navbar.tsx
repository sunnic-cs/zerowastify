import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className="flex justify-between m-10 item-center">
            <div>
                <Link href="/">
                    <li>WastifyLogo here</li>
                </Link>
            </div>
            <div className='flex gap-10'>
                <Link href="/">
                    <li>Home</li>
                </Link>
            </div>
            <div>
                <Link href="/our-cause">
                    <li>Our Cause</li>
                </Link>
            </div>
            <div>
                <Link href="/">
                    <li>Waste Bin Status</li>
                </Link>
            </div>
            <div>
                <Link href="/">
                    <li>News/Media</li>
                </Link>
            </div>
            <div>
                <Link href="/">
                    <li>LoginUser here</li>
                </Link>
            </div>
        </ul>
    </div>
  )
}

export default Navbar