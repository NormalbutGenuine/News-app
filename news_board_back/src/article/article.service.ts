import { Injectable } from '@nestjs/common';
import { getNews, getSportsNews } from '../utils/crawl.utils';
import { NewsRepository } from './article.repository';

@Injectable()
export class ArticleService {

    constructor(
        private newsRepository: NewsRepository,
    ) { }

    async getCrawledNews(section) {
        const getNewsRes = await getNews(section)
        return getNewsRes
    }

    async getCrawledSportsNews() {
        return await getSportsNews()
    }
}