'use client'
import { Article } from '@/types/article-type'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import defaultNewsPng from "@/public/default-news.png"
import { CATEGORIES_ITEMS } from '../Nav/constant'
import ImageWithFallBack from '../ImageWithFallBack/ImageWithFallBack'
export default function ArticleCard(p:{article: Article}) {
  const [Imgsrc,setImgsrc]=useState(p.article.image_url);
  return (
    <Link href={`/articles/title/${p.article.title}`} className=' space-y-4 block w-80 hover:bg-slate-50 transform hover:scale-95  border-2 border-gray-100 py-4 px-6 rounded-xl shadow-sm '>
    <div className='capitalize'>

       <div className='flex items-center gap-2'>
        <div className='flex w-8 h-8 justify-center items-center border border-slate-300  rounded-full'>
            <Image 
            className='w-5 h-5'
            alt='icon for category'
            src={CATEGORIES_ITEMS[p.article.category[0]].src}/>
        </div>
        <div className='font-bold text-md '>{p.article.category}</div>
       </div>
        <div className='mt-2 text-sm text-gray-400'>Published : {new Date(p.article.pubDate).toDateString()}</div>
    </div>

    <div className='space-y-2'>
        <div className='font-semibold text-xl line-clamp-2 h-14 '>{p.article.title}</div>
        <ImageWithFallBack 
        className='h-40 rounded-lg'
        height={200}
        width={300}
        src={p.article.image_url || defaultNewsPng} 
        onError={()=>{
          setImgsrc(defaultNewsPng.src)
        }}
        alt='image for article'
        fallback={defaultNewsPng}
        />
    </div>
    </Link>
  )
}
