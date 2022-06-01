import { Enews_category } from "../types/newsCategory.config"
import { newsData } from "../types/NewsData.Type"
import { BIONewsHTMLParser, BlockChainHTMLParser, AIHTMLParser, NANOHTMLParser, METAVERSE_HTMLParser } from "./HTML_Parsers"

export async function ParseHTML(content, URL, newsObj) : Promise<newsData[]> {
    let data : any 
    // HTML Data를 가져오는 사이트가 전부 다르기 때문에 어쩔 수 없이 사이트마다 다른 코드가 들어 간다.
    switch (URL) {
        case Enews_category.BIO:
            data = await BIONewsHTMLParser(content, newsObj)
            data = data.map((value, idx) => Object.values(value))
            return data
            
        case Enews_category.BLOCKCHAIN:
            data = await BlockChainHTMLParser(content, newsObj)
            data = data.map((value, idx) => Object.values(value))
            return data
            
        case Enews_category.AI:
            data = await AIHTMLParser(content, newsObj)
            data = data.map((value, idx) => Object.values(value))
            return data

        case Enews_category.NANO:
            data = await NANOHTMLParser(content, newsObj)
            data = data.map((value, idx) => Object.values(value))
            return data
        
        case Enews_category.METAVERSE:
            data = await METAVERSE_HTMLParser(content, newsObj)
            data = data.map((value, idx) => Object.values(value))
            return data
    }
}

