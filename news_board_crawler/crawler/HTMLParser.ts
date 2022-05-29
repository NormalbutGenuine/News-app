import { Enews_category } from "../types/newsCategory.config"
import cheerio from "cheerio"
import { newsData } from "../types/NewsData.Type"
import {getHtml} from "./crawlNews"
import * as iconv from "iconv-lite"

export async function ParseHTML(content, URL, newsObj) : Promise<newsData[]> {
    // HTML Data를 가져오는 사이트가 전부 다르기 때문에 어쩔 수 없이 사이트마다 다른 코드가 들어 간다.
    switch (URL) {
        case Enews_category.BIO:
            return await BIONewsHTMLParser(content, newsObj)
            break;
        
        case Enews_category.BLOCKCHAIN:
            return await BlockChainHTMLParser(content, newsObj)
            break;
    }
}

async function BIONewsHTMLParser(content, newsObj) {
    let newsBox : newsData[] = []
    const $ = cheerio.load(content)
    const selector = $("ul li")
    for (let elem of selector) {
        if ($(elem).find("a").attr("style") === undefined) continue
        const imgSource = $(elem).find("a").attr("style").substring(22, String($(elem).find("a").attr("style")).length-1)
        newsObj = {
            title :  $(elem).find("strong").text(),
            category : "BIO",
            lede : $(elem).find("a.auto-fontB").text(),
            imgSrc: $(elem).find("a").attr("style") != undefined ? Enews_category.BIO + imgSource : undefined,
            newsURL : Enews_category.BIO + $(elem).find("a").attr("href"),
            body : undefined,
            date : new Date()
        }
        if(newsObj.newsURL) newsObj.body = await getNewsBody(String(newsObj.newsURL), Enews_category.BIO)
        if (Object.values(newsObj).filter(value => value).length === 7) newsBox.push(newsObj)
    }
    return newsBox
}

async function BlockChainHTMLParser(content, newsObj) {
    let newsArr : newsData[] = []
    const $ = cheerio.load(content)
    const selector = $(".content")

    for (let elem of selector) {
        if ($(elem).find("a").attr("style") === undefined) continue
        const imgSource = $(elem).find("a").attr("style").substring(22, String($(elem).find("a").attr("style")).length-1)
        newsObj = {
            title: $(elem).find("span").first().text().replace(/(\r\n|\n|\r|\t)/gm, ""),
            category : "BLOCKCHAIN",
            lede : undefined,
            imgSrc : Enews_category.BLOCKCHAIN + imgSource,
            newsURL : Enews_category.BLOCKCHAIN + $(elem).find("a").attr("href"),
            body : undefined,
            date : new Date()
        }
        if (newsObj.body === undefined) newsObj.body = await getNewsBody(newsObj.newsURL, Enews_category.BLOCKCHAIN)
        if (newsObj.body != undefined) newsObj.lede = newsObj.body.substring(0, 80) + "..."
        if (newsObj.title != '') newsArr.push(newsObj)
    }

    return newsArr
}

async function getNewsBody(URL : string, category: string) : Promise<string> {
    const res = await getHtml(URL)
    const content = iconv.decode(res.data, "utf-8").toString()
    const $ = cheerio.load(content)
    let body : string = ""
    switch (category) {
        case Enews_category.BIO:
            return $("#article-view-content-div").text().replace(/(\r\n|\n|\r|\t)/gm, "")

        case Enews_category.BLOCKCHAIN:
            return $("p").text().replace(/(\r\n|\n|\r|\t)/gm, "")       
    }
}