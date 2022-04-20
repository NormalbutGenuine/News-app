import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { News_Category } from 'src/configs/category.config';

@Controller('article')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) {}

    @Get("/politics")
    getPolitics(){
        return this.articleService.getCrawledNews(News_Category.POLITICS)
    }

    @Get("/economy")
    getEconomy(){
        return this.articleService.getCrawledNews(News_Category.ECONOMY)
    }

    @Get("/society")
    getSociety() {
        return this.articleService.getCrawledNews(News_Category.SOCIETY)
    }

    @Get("/science")
    getScience() {
        return this.articleService.getCrawledNews(News_Category.SCIENCE)
    }

    @Get("/sports")
    getSports() {
        return this.articleService.getCrawledSportsNews()
    }
}
