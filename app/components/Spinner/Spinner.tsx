import Image from 'next/image'
import React from 'react'
import lightingPng from "@/public/lightning.png"
export default function Spinner(p:{}) {
  return (
    <div className='flex flex-col items-center'>
        <Image src={lightingPng} alt='Spinner' className='w-10 animate-spin mb-4'/>
        <div>Loading....</div>
    </div>
  )
}
