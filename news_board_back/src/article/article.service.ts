import { Injectable } from '@nestjs/common';
import { getNews, getSportsNews } from '../utils/crwal.utils';

@Injectable()
export class ArticleService {
    async getCrawledNews(section) {
       return await getNews(section) 
    }

    async getCrawledSportsNews() {
        return await getSportsNews()
    }
}