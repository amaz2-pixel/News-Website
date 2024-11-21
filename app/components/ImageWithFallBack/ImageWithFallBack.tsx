"use client"

import { stat } from 'fs'
import Image, { ImageProps, StaticImageData } from 'next/image'
import React, { useState } from 'react'

function ImageWithFallBack({fallback,src,...p}:ImageProps & {fallback: StaticImageData}) {
    const [img,SetImg]=useState(src);
    return (
    <Image  {...p} src={img } onError={(e)=>{
        SetImg(fallback.src)
    }}/>
  )
}

export default ImageWithFallBack
