import { Injectable } from '@nestjs/common';
import { getNews, getSportsNews } from '../utils/crawl.utils';
import { newsData } from './dto/NewsData.dto';

@Injectable()
export class ArticleService {

    async getCrawledNews(section) : Promise<newsData[]> {
        const getNewsRes = await getNews(section)
        return getNewsRes
    }

    async getCrawledSportsNews() : Promise<newsData[]> {
        return await getSportsNews()
    }
}