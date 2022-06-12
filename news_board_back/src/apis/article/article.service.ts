import { Injectable } from '@nestjs/common';
import { getNews, getSportsNews } from '../../utils/crawl.utils';
import { newsData } from './dto/NewsData.dto';
import {google} from "googleapis";
import { create } from 'src/utils/accessSheets';
import { configOBJ } from 'src/configs/sheets.request.config';
import { ArticleCategory } from 'src/configs/category.config';

@Injectable()
export class ArticleService {

    async getCrawledNews(section) : Promise<newsData[]> {
        // TODO: rowsToJson 에서 변환한 Json배열 데이터를 category에 따라 반환하도록 작업
        let newsDataFromSheets = await this.rowsToJson()
        const data = newsDataFromSheets.filter((value, idx) => value.category === ArticleCategory[section])
        const getNewsRes = data
        return getNewsRes
    }

    async getCrawledSportsNews() : Promise<newsData[]> {
        return await getSportsNews()
    }

    async rowsToJson() {
        const rows = (await this.getNewsFromSheets()).data.values
        let newsObj = {} as newsData
        let newsBox : newsData[] = []
        rows.map((value, idx) => {
            newsObj = {
                title : value[0],
                category: value[1],
                lede: value[2],
                imgSrc: value[3],
                newsURL: value[4],
                body: value[5],
                date: value[6]
            }
            newsBox.push(newsObj)
        })
        return newsBox
    }

    async getNewsFromSheets() {
        const sheets = await this.getSheetInstance()
        const req = configOBJ()
        return sheets.spreadsheets.values.get(req)
    }

    async getSheetInstance() {
        const client = await create()
        const sheets = google.sheets( { version : "v4", auth : client } )
        return sheets
    }
}