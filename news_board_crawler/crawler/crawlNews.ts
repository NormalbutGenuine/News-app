import * as iconv from "iconv-lite"
import cheerio from "cheerio"
import axios from "axios"
import {Enews_category} from "../types/newsCategory.config"
import { newsData } from "../types/NewsData.Type"

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

/**
 * export async function getNews(NewsSection : string) : Promise<newsData[]> {
    let newsBox : newsData[]= []
    try {
        const res = await getHtml(NewsSection)
        let category = NewsCategory[NewsSection]
        const content = iconv.decode(res.data, "EUC-KR").toString() // iconv 객체가 undefined 되는 오류
        const $ = cheerio.load(content)
        const list = $("ul li")
        
        let newsObj = {} as newsData
        
        for (let elem of list)  {
            newsObj = {
                title: $(elem).find("div.cluster_text a.cluster_text_headline").text(),
                category: category,
                lede : $(elem).find("div.cluster_text div.cluster_text_lede").text(),
                imgSrc : $(elem).find("div.cluster_thumb img").attr("src"),
                newsURL : $(elem).find("div.cluster_text a").attr("href"),
                body : undefined,
                date : new Date()
            }
            if(newsObj.newsURL) newsObj.body = await getNewsBody(String(newsObj.newsURL))
            if (Object.values(newsObj).filter(value => value).length === 7) newsBox.push(newsObj)  
        }
    }catch (e){
        console.log("ERROR IS: "+e)
    }
    return newsBox
}
 */

async function getNews() {
    let newsBox = []
    let newsObj = {} as newsData
    try {
        const html = await getHtml(Enews_category.BIO)
        const content = iconv.decode(html.data, "utf-8").toString()
        const $ = cheerio.load(content)
        const selector = $("ul li")
        for (let elem of selector) {
            newsObj = {
                title :  $(elem).find("strong").text(),
                category : "BIO",
                lede : $(elem).find("a.auto-fontB").text(),
                imgSrc: Enews_category.BIO + $(elem).find("a").attr("style"),
                newsURL : Enews_category.BIO + $(elem).find("a").attr("href"),
                body : undefined,
                date : new Date()
            }
            if (newsObj.title != '') newsBox.push(newsObj)
            if (newsObj.imgSrc != 'http://www.biotimes.co.kr/undefined') newsObj.imgSrc = Enews_category.BIO + $(elem).find("a").attr("style").substring(22, $(elem).find("a").attr("style").length-1)
        }
        console.log(newsBox)
    }catch(e) {
        console.log("ERROR IS: "+e)
    }
}

getNews()