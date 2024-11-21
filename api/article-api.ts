import { Article, ArticleCategory, ArticleListResponse } from "@/types/article-type";

export class ArticleApi{
    static async fetchToday():Promise<Article[]>{
       return (await( (await (fetch("http://localhost:3090/news"))).json()) as ArticleListResponse).results;
    }

    static async fetchByCategory(category:ArticleCategory):Promise<Article[]>{
        return (await( (await (
            fetch(`http://localhost:3090/news?category=${category}`))).json()) as ArticleListResponse).results;
     }

     static async fetchByTitle(title:string):Promise<Article>{
        const formatedTitle=title.replace("/:/g","")
        return (await( (await (
            fetch(`http://localhost:3090/news?qInTitle=${formatedTitle}`))).json()) as ArticleListResponse).results[0];
     }
}

