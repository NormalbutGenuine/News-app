import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getNews, getSportsNews } from '../utils/crawl.utils';
import { NewsRepository } from './article.repository';

@Injectable()
export class ArticleService {

    constructor (
        @InjectRepository(NewsRepository)
        private newsRepository: NewsRepository,
    ) {}

    async getCrawledNews(section) {
       return await getNews(section) 
    }

    async getCrawledSportsNews() {
        return await getSportsNews()
    }
}