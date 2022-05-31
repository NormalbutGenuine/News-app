import { Enews_category } from "../types/newsCategory.config"
import cheerio from "cheerio"
import { newsData } from "../types/NewsData.Type"
import {getHtml} from "./crawlNews"
import * as iconv from "iconv-lite"

export async function BIONewsHTMLParser(content, newsObj) {
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

export async function BlockChainHTMLParser(content, newsObj) {
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

export async function AIHTMLParser(content, newsObj) {
    let newsArr : newsData[] = []
    let idx : number = 0
    const $ = cheerio.load(content)
    const selector = $("#skin-12 .auto-titles")
    for (let elem of selector) {
        if ($(".auto-images.ratio-32").attr("style") === undefined) continue
        
        const imgSource = $(".auto-images.ratio-32").slice(idx, idx+1).attr("style").substring(21, String($(".auto-images.ratio-32").slice(idx, idx+1).attr("style")).length-1)
        
        newsObj = {
            title : $(elem).text().replace(/(\r\n|\n|\r|\t)/gm, ""),
            category : "AI",
            lede : $("#skin-12 .auto-sums").slice(idx,idx+1).text(),
            imgSrc : imgSource,
            newsURL : Enews_category.AI + $(".auto-valign").slice(idx+1, idx+2).attr("href"),
            body : undefined,
            date : new Date()
        }
        idx = idx + 1
        if (newsObj.body === undefined) newsObj.body = await getNewsBody(newsObj.newsURL, Enews_category.AI)
        if (newsObj.body != undefined) newsObj.lede = newsObj.body.substring(0, 80) + "..."
        if (newsObj.title != '') newsArr.push(newsObj)
    }
    console.log(newsArr)
    return newsArr
}

export async function NANOHTMLParser(content, newsObj) {
    let newsArr : newsData[] = []
    let idx : number = 0
    const $ = cheerio.load(content)
    const selector = $(".Blog-title")
    for (let elem of selector) {
        const imgSource = $("img").attr("src")
        newsObj = {
            title : $(elem).text().replace(/(\r\n|\n|\r|\t)/gm, ""),
            category : "NANO",
            lede : $(".Blog-meta--bottom .Blog-meta-item").slice(idx, idx+1).text(),
            imgSrc : imgSource,
            newsURL : Enews_category.NANO + $(".Blog-header-content-link").slice(idx, idx+1).attr("href"),
            body : undefined,
            date : new Date()
        }
        idx = idx + 1
        if (newsObj.body === undefined) newsObj.body = await getNewsBody(newsObj.newsURL, Enews_category.NANO)
        if (newsObj.body != undefined) newsObj.lede = newsObj.body.substring(0, 80) + "..."
        if (newsObj.title != '') newsArr.push(newsObj)
    }
    console.log(newsArr)
    return newsArr
}

export async function METAVERSE_HTMLParser(content, newsObj) {
    let newsArr : newsData[] = []
    let idx : number = 0
    const $ = cheerio.load(content)
    const selector = $(".cs-entry__title a")
    // console.log($(".cs-entry__thumbnail .cs-overlay-background img").last().attr("src"))
    for (let elem of selector) {
        const imgSource = $(".cs-entry__thumbnail .cs-overlay-background img").slice(idx,idx+1).attr("src")
        newsObj = {
            title : $(elem).text().replace(/(\r\n|\n|\r|\t)/gm, ""),
            category : "METAVERSE",
            lede : $(".Blog-meta--bottom .Blog-meta-item").slice(idx, idx+1).text(),
            imgSrc : imgSource,
            newsURL : $(elem).attr("href"),
            body : undefined,
            date : new Date()
        }
        idx = idx + 1
        if (newsObj.body === undefined) newsObj.body = await getNewsBody(newsObj.newsURL, Enews_category.METAVERSE)
        if (newsObj.body != undefined) newsObj.lede = newsObj.body.substring(0, 80) + "..."
        if (newsObj.title != '') newsArr.push(newsObj)
    }
    console.log(newsArr)
    return newsArr
}

async function getNewsBody(URL : string, category: string) : Promise<string> {
    const res = await getHtml(URL)
    const content = iconv.decode(res.data, "utf-8").toString()
    const $ = cheerio.load(content)

    switch (category) {
        case Enews_category.BIO:
            return $("#article-view-content-div").text().replace(/(\r\n|\n|\r|\t)/gm, "")

        case Enews_category.BLOCKCHAIN:
            return $("p").text().replace(/(\r\n|\n|\r|\t)/gm, "")     

        case Enews_category.AI:
            return $("p").text().replace(/(\r\n|\n|\r|\t)/gm, "")

        case Enews_category.NANO:
            return $("p").text().replace(/(\r\n|\n|\r|\t)/gm, "")
        
        case Enews_category.METAVERSE:
            return $("p").text().replace(/(\r\n|\n|\r|\t)/gm, "")
    }
}