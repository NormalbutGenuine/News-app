import * as iconv from "iconv-lite"
import cheerio from "cheerio"
import axios from "axios"
import { News_Category } from "./category.utils"

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

export async function getNews() : Promise<object> {
    let newsBox = []
    const res = await getHtml(News_Category.POLITICS)
    const content = iconv.decode(res.data, "EUC-KR").toString() // iconv 객체가 undefined 되는 오류
    const $ = cheerio.load(content)
    const list = $("ul li")
    list.each((index, elem) => {
        let newsObj :{headLine:string, content:string, img:string} = {
            headLine: $(elem).find("div.cluster_text a.cluster_text_headline").text(),
            content : $(elem).find("div.cluster_text div.cluster_text_lede").text(),
            img : $(elem).find("div.cluster_thumb img").attr("src")
        }
        if (newsObj.headLine != '' && newsObj.img != undefined && newsObj.content != '') newsBox.push(newsObj)
    })
    return newsBox
}