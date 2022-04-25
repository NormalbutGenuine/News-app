import * as iconv from "iconv-lite"
import cheerio from "cheerio"
import axios from "axios"
import {NewsCategory, News_Category} from "../configs/category.config"
import {newsData} from "../article/object_Types/newsType"

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

export async function getNews(NewsSection) : Promise<any[]> {
    let newsBox = []
    try {
        const res = await getHtml(NewsSection)

        let category = NewsCategory[NewsSection]
        const content = iconv.decode(res.data, "EUC-KR").toString() // iconv 객체가 undefined 되는 오류
        const $ = cheerio.load(content)
        const list = $("ul li")

        //@ts-ignore
        let newsObj : newsData = {}
        
        for (let elem of list)  {
            newsObj = {
                title: $(elem).find("div.cluster_text a.cluster_text_headline").text(),
                category: category,
                lede : $(elem).find("div.cluster_text div.cluster_text_lede").text(),
                imgSrc : $(elem).find("div.cluster_thumb img").attr("src"),
                newsURL : $(elem).find("div.cluster_text a").attr("href"),
                body : "null",
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

export async function getSportsNews() : Promise<object> {
    let newsBox = []
    const res = await getHtml(News_Category.SPORTS)
    const content = iconv.decode(res.data, "utf-8").toString()
    const $ = cheerio.load(content)
    const listSports = $("ul.today_list li")

    for(let elem of listSports) {
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
        if(newsObj.newsURL) newsObj.body = await getNewsBody(String(newsObj.newsURL))
        if (Object.values(newsObj).filter(value => value).length === 7) newsBox.push(newsObj) 
    }
    console.log(newsBox)
    return newsBox   
}

export async function getNewsBody(URL:string) {
    const res = await getHtml(URL);
    const content = iconv.decode(res.data, "utf-8").toString()
    const $ = cheerio.load(content)
    return $("#dic_area").text().replace(/(\r\n|\n|\r|\t)/gm, "");
}
// replace(/(\r\n|\n|\r|\t)/gm, "")
getNews(News_Category.ECONOMY).then((res) => {
    let arr = res[0].body.split(/다./)
    console.log(arr.length)
    // for (let item of res) {

    // }
})