import * as iconv from "iconv-lite"
import cheerio from "cheerio"
import axios from "axios"
import {News_Category} from "../configs/category.config"
import {newsData} from "../article/object_Types/newsType"
import { NewsRepository } from "../article/article.repository"

const Repository = new NewsRepository()

export async function getHtml(category : string) {
    try{
        const htmlData = await axios.get(category, {
        responseType: "arraybuffer"
    })
        return htmlData
    }catch(e){
        console.log("ERROR IS: "+e)
    }
}

export async function getNews(NewsSection) : Promise<object> {
    let newsBox = []
    const res = await getHtml(NewsSection)
    let category = "politics";

    switch (NewsSection) {
        case News_Category.ECONOMY:
            category = "economy";
            break;
        
        case News_Category.SCIENCE:
            category = "science";
            break;

        case News_Category.SOCIETY:
            category = "society";
            break;

        case News_Category.POLITICS:
            category = "politics";
            break;
    }

    const content = iconv.decode(res.data, "EUC-KR").toString() // iconv 객체가 undefined 되는 오류
    const $ = cheerio.load(content)
    const list = $("ul li")
    
    list.each((index, elem) => {
        let newsObj : newsData = {
            title: $(elem).find("div.cluster_text a.cluster_text_headline").text(),
            category: category,
            lede : $(elem).find("div.cluster_text div.cluster_text_lede").text(),
            imgSrc : $(elem).find("div.cluster_thumb img").attr("src"),
            newsURL : $(elem).find("div.cluster_text a").attr("href"),
            body : "null",
            date : new Date()
        }
        if (newsObj.title != '' && newsObj.imgSrc != undefined && newsObj.lede != '' && Object.values(newsObj).includes("undefined") === false) newsBox.push(newsObj)
    })
    console.log(Repository)
    // newsBox.forEach( async (item, index) => {
    //     await Repository.createNews(item)
    // })
    return newsBox
}

export async function getSportsNews() : Promise<object> {
    let newsBox = []
    const res = await getHtml(News_Category.SPORTS)
    const content = iconv.decode(res.data, "utf-8").toString()
    const $ = cheerio.load(content)
    const listSports = $("ul.today_list li")

    listSports.each((index, elem) => {
        let newsObj : newsData = {
            title: $(elem).find("div.text_area strong.title").text(),
            category: "sports",
            lede : $(elem).find("div.text_area p.news").text(),
            // 스포츠 뉴스 이미지는 url에 접근 권한이 없음
            imgSrc : "https://static01.nyt.com/images/2022/04/16/sports/16nba-playoffs-preview-lede/merlin_204814425_2804d7cb-ae53-46ec-8bed-e1b36c8c9600-threeByTwoMediumAt2X.jpg",
            newsURL : $(elem).find("a.link_today").attr("href"),
            body : "null",
            date : new Date()
        }
        if (newsObj.title != '' && newsObj.imgSrc != undefined && newsObj.lede != '') newsBox.push(newsObj)
    })
    console.log(newsBox)
    return newsBox   
}