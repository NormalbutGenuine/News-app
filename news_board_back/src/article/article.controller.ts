import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { News_Category } from 'src/config/category.config';

@Controller('article')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) {}

    @Get("/1")
    getPolitics(){
        return this.articleService.getCrawledNews(News_Category.POLITICS)
    }

    @Get("/2")
    getEconomy(){
        return this.articleService.getCrawledNews(News_Category.ECONOMY)
    }

    @Get("/3")
    getSociety() {
        return this.articleService.getCrawledNews(News_Category.SOCIETY)
    }

    @Get("/4")
    getScience() {
        return this.articleService.getCrawledNews(News_Category.SCIENCE)
    }

    @Get("/5")
    getSports() {
        return this.articleService.getCrawledSportsNews()
    }
}
