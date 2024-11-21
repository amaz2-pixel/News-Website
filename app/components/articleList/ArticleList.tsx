import React from 'react'
import { Article } from '@/types/article-type'
import ArticleCard from '../Card/ArticleCard'

export default function ArticleList(p: {articles:Article[] }) {
  return (
    <div className='flex justify-center flex-wrap gap-x-6 gap-y-10 '>
        {p.articles.map(article =><ArticleCard key={article.article_id} article={article} />)}
    </div>
  )
}
