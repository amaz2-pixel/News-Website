import React from 'react'
import { NAV_ITEMS } from './constant'
import Image from 'next/image'
import logo from "@/public/logo.png"
import NavItem from './NavItem'
export default function Nav() {
  return (
    <div>
        {/* Logo */}
        <Image src={logo} alt='logoImage' className='w-40 '/>
        {/* Nav List*/ }
        <nav className='space-y-4 mt-4'>
        {NAV_ITEMS.map(navItem => <NavItem {...navItem} />)}
        </nav>
    </div>
  )
}
