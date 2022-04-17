import * as iconv from "iconv-lite"
import cheerio from "cheerio"
import axios from "axios"
import {News_Category} from "../config/category.config"

// 현재 파일에서만 사용
interface dataForm {
    headLine:string, 
    content:string, 
    img:string
}

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
    const content = iconv.decode(res.data, "EUC-KR").toString() // iconv 객체가 undefined 되는 오류
    const $ = cheerio.load(content)
    const list = $("ul li")
    
    list.each((index, elem) => {
        let newsObj : dataForm = {
            headLine: $(elem).find("div.cluster_text a.cluster_text_headline").text(),
            content : $(elem).find("div.cluster_text div.cluster_text_lede").text(),
            img : $(elem).find("div.cluster_thumb img").attr("src")
        }
        if (newsObj.headLine != '' && newsObj.img != undefined && newsObj.content != '') newsBox.push(newsObj)
    })
    return newsBox
}

export async function getSportsNews() : Promise<object> {
    let newsBox = []
    const res = await getHtml(News_Category.SPORTS)
    const content = iconv.decode(res.data, "utf-8").toString()
    const $ = cheerio.load(content)
    const listSports = $("ul.today_list li")

    listSports.each((index, elem) => {
        let newsObj : dataForm = {
            headLine: $(elem).find("div.text_area strong.title").text(),
            content : $(elem).find("div.text_area p.news").text(),
            // 스포츠 뉴스 이미지는 url에 접근 권한이 없음
            img : "https://static01.nyt.com/images/2022/04/16/sports/16nba-playoffs-preview-lede/merlin_204814425_2804d7cb-ae53-46ec-8bed-e1b36c8c9600-threeByTwoMediumAt2X.jpg"
        }
        if (newsObj.headLine != '' && newsObj.img != undefined && newsObj.content != '') newsBox.push(newsObj)
    })
    return newsBox   
}