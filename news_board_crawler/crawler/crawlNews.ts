import * as iconv from "iconv-lite"
import axios from "axios"
import {Enews_category} from "../types/newsCategory.config"
import { newsData } from "../types/NewsData.Type"
import { ParseHTML } from "./HTMLParser"

export async function getHtml(category : string) : Promise<any> {
    try{
        const htmlData = await axios.get(category, {
        responseType: "arraybuffer"
    })
        return htmlData
    }catch(e){
        console.log("ERROR IS: "+e)
    }
}

async function getNews(category : Enews_category) {
    let newsBox : newsData[] = []
    let newsObj = {} as newsData
    try {
        const html = await getHtml(category)
        const content = iconv.decode(html.data, "utf-8").toString()
        newsBox = await ParseHTML(content, category, newsObj)
        console.log(newsBox)
    }catch(e) {
        console.log("ERROR IS: "+e)
    }
}
