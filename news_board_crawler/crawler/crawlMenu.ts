import { getNews } from "./crawlNews";
import { Enews_category } from "../types/newsCategory.config";

export async function menu(index : number, data) {
    switch (index) {
        case 1:
            data = await getNews(Enews_category.BIO)
            return data
            
        case 2:
            data = await getNews(Enews_category.BLOCKCHAIN)
            return data
        
        case 3:
            data = await getNews(Enews_category.NANO)
            return data
        
        case 4:
            data = await getNews(Enews_category.AI)
            return data
        
        case 5:
            data = await getNews(Enews_category.METAVERSE)
            return data
    }
}