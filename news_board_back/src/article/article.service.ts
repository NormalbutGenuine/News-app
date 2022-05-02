import { Injectable } from '@nestjs/common';
import { getNews, getSportsNews } from '../utils/crawl.utils';

@Injectable()
export class ArticleService {

    async getCrawledNews(section) {
        const getNewsRes = await getNews(section)
        return getNewsRes
    }

    async getCrawledSportsNews() {
        return await getSportsNews()
    }
}