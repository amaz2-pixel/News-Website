import { ArticleApi } from '@/api/article-api';
import React from 'react'
import ArticleList from '../articleList/ArticleList';
import topPng from "@/public/top.png"
import Image from 'next/image'
export async function LatestNews() {
  const articles= await ArticleApi.fetchToday();
  return (
      <div>
      <div className='flex items-center justify-center space-x-2 mb-12'>
        <Image src={topPng} className="h-10 w-10" alt="Latest news image"/>
        <h1 className='font-thin text-4xl capitalize'>Latest News</h1>
      </div>
      <ArticleList articles={articles}/>
    </div>
  )
}
