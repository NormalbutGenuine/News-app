import { Injectable } from '@nestjs/common';
import { getNews } from '../utils/crwal.utils';

@Injectable()
export class ArticleService {
    async getEconomyNews() {
       return await getNews() 
    }
}