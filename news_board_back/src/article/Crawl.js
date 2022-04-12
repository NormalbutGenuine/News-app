const fs = require("fs")
const axios = require("axios")
const iconv = require("iconv-lite")
const cheerio = require("cheerio")

async function getHtml() {
    try{
        const htmlData = await axios.get("https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101", {
        responseType: "arraybuffer"
    })
        return htmlData
    }catch(e){
        console.log("ERROR IS: "+e)
    }
}

async function getNews(){
    let newsBox = []
    const res = await getHtml()
    const content = iconv.decode(res.data, "EUC-KR").toString()
    const $ = cheerio.load(content)
    const list = $("ul li")
    list.each((index, elem) => {
        let newsObj = {
            headLine: $(elem).find("div.cluster_text a.cluster_text_headline").text(),
            content : $(elem).find("div.cluster_text div.cluster_text_lede").text(),
            img : $(elem).find("div.cluster_thumb img").attr("src")
        }
        if (newsObj.headLine != '' && newsObj.img != undefined && newsObj.content != '') newsBox.push(newsObj)
    })
    console.log(newsBox.length)
    fs.writeFileSync("./news.json", "[" + "\n")
    for (let i = 0; i < newsBox.length; i++) fs.appendFileSync("./news.json", String(JSON.stringify(newsBox[i])) + ", \n")
    fs.appendFileSync("./news.json", "]")
    return newsBox
}