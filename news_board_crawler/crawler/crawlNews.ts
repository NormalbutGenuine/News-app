import * as iconv from "iconv-lite"
import cheerio from "cheerio"
import axios from "axios"
import {Enews_category} from "../types/newsCategory.config"

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