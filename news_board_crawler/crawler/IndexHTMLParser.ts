import { Enews_category } from "../types/newsCategory.config"
import { newsData } from "../types/NewsData.Type"
import { BIONewsHTMLParser, BlockChainHTMLParser, AIHTMLParser, NANOHTMLParser, METAVERSE_HTMLParser } from "./HTML_Parsers"

export async function ParseHTML(content, URL, newsObj) : Promise<newsData[]> {
    // HTML Data를 가져오는 사이트가 전부 다르기 때문에 어쩔 수 없이 사이트마다 다른 코드가 들어 간다.
    switch (URL) {
        case Enews_category.BIO:
            return await BIONewsHTMLParser(content, newsObj)
            
        case Enews_category.BLOCKCHAIN:
            return await BlockChainHTMLParser(content, newsObj)
            
        case Enews_category.AI:
            return await AIHTMLParser(content, newsObj)

        case Enews_category.NANO:
            return await NANOHTMLParser(content, newsObj)
        
        case Enews_category.METAVERSE:
            return await METAVERSE_HTMLParser(content, newsObj)
    }
}

