import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getNews, getSportsNews } from '../utils/crawl.utils';
import { NewsRepository } from './article.repository';

@Injectable()
export class ArticleService {

    constructor(
        private newsRepository: NewsRepository,
    ) { }

    async getCrawledNews(section: ENews_Category) {
        const getNewsRes = await getNews(section)
        this.newsRepository.createNews(getNewsRes[0])
    }

    async getCrawledSportsNews() {
        return await getSportsNews()
    }
}