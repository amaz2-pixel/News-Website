import { ArticleApi } from "@/api/article-api";
import ArticleList from "@/app/components/articleList/ArticleList";
import { CATEGORIES_ITEMS, NAV_ITEMS } from "@/app/components/Nav/constant";
import { Article, ArticleCategory } from "@/types/article-type";
import Image from "next/image";

// export const revalidate=1000;
// export function generateStaticParams(){
//   return NAV_ITEMS.map(navItem=>{
//     return {
//       category: navItem.category,
//     }
//   });
// }
export const dynamic="force-dynamic";
export default async function ArticlesByCategoryPage(p: {
  params: { category: ArticleCategory };
}) {
  const articles = await ArticleApi.fetchByCategory(p.params.category);

  
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 mb-16">
        <Image
          src={CATEGORIES_ITEMS[p.params.category].src}
          className="h-10 w-10"
          alt={`${p.params.category} news icon`}
        />
        <h1 className="text-4xl font-bold capitalize">
          {p.params.category} news
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}