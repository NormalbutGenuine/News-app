import { Controller, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { categoryParams, CategoryURL } from 'src/configs/category.config';
import { newsData } from './dto/NewsData.dto';

@Controller('article')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) {} // 프레임워크 안에 이미 객체가 생성되어 있다.

    @Get("/:category")
    getArticle(
        @Param('category') category: categoryParams
    ) : Promise<newsData[]> {
        if (String(category) === "sports") return this.articleService.getCrawledSportsNews()
        return this.articleService.getCrawledNews(CategoryURL[category])
    }
}
