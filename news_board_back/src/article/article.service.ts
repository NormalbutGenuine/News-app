import { Injectable } from '@nestjs/common';
import { getNews, getSportsNews } from '../utils/crawl.utils';
import { NewsRepository } from './article.repository';

@Injectable()
export class ArticleService {

    constructor(
        private newsRepository: NewsRepository, // 프레임워크의 컨테이너 안에 이미 객체가 생성되어 있다.
    ) { }

    async getCrawledNews(section) {
        const getNewsRes = await getNews(section)
        return getNewsRes
    }

    async getCrawledSportsNews() {
        return await getSportsNews()
    }
}