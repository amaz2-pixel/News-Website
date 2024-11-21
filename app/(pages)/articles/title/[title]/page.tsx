import { ArticleApi } from "@/api/article-api";
import ImageWithFallBack from "@/app/components/ImageWithFallBack/ImageWithFallBack";
import { CATEGORIES_ITEMS } from "@/app/components/Nav/constant";
import Image from "next/image";
import defaultNewsPNG from "@/public/default-news.png"
import Link from "next/link";
export default async function ArticleDetailPage(p: {
  params: { title: string };
}) {
  
  const article = await ArticleApi.fetchByTitle(p.params.title);
  const category=article.category[0]
  const header =( <div className="space-y-2">
    <div className="text-md capitalize flex items-center gap-2">
       <div className="flex items-center justify-center border border-slate-300 rounded-full w-10 h-10 "> 
        <Image className="w-7 h-7 " alt={{category}+"Icon"} src={CATEGORIES_ITEMS[category].src}/>
        </div>
    <div className="font-semibold">{category}</div>
    </div>
    <div className="text-xs text-slate-500">Published {new Date(article.pubDate).toDateString()}</div>
  </div>);
  const body = <div className="mt-6 space-y-6">
    <h1>{article.title}</h1>
    <h2 className="font-semibold text-xl">{article.description}</h2>
    <div className="flex justify-center ">
      <ImageWithFallBack 
      alt="image for article" 
      className="rounded-lg" 
      height={200} 
      width={300} 
      src={article.image_url || defaultNewsPNG } 
      fallback={defaultNewsPNG}/>
    </div>
    <p className="text-justify">{article.content}</p>
  </div>;
  const footer = <div className="flex justify-between mt-6 ">
    <div className="text-slate-800">
      Written by <span className="font-bold">{article.creator}</span>
    </div>
    <Link className="text-blue-800 underline" href={article.link}>Source</Link>
  </div>;

  return (
    <div className="flex flex-col items-center">
     <div className="space-y-8 max-w-8xl leading-7">
      {header}
      {body}
      {footer}
      </div>
    </div>
  );
}