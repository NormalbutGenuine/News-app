import { Controller, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ENews_Category, News_Category } from 'src/configs/category.config';

@Controller('article')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) { }

    @Get("/:category")
    getPolitics(
        @Param('category') category: ENews_Category
    ) {
        return this.articleService.getCrawledNews(ENews_Category.POLITICS)
    }

    @Get("/economy")
    getEconomy() {
        return this.articleService.getCrawledNews(ENews_Category.ECONOMY)
    }

    @Get("/society")
    getSociety() {
        return this.articleService.getCrawledNews(ENews_Category.SOCIETY)
    }

    @Get("/science")
    getScience() {
        return this.articleService.getCrawledNews(ENews_Category.SCIENCE)
    }

    @Get("/sports")
    getSports() {
        return this.articleService.getCrawledSportsNews()
    }
}
