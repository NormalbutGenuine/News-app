import { Controller, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { categoryParams, CategoryURL, CategoryURL2 } from 'src/configs/category.config';
import { newsData } from './dto/NewsData.dto';

@Controller('article')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) {} // 프레임워크 안에 이미 객체가 생성되어 있다.

    @Get("/:category")
    getArticle(
        @Param('category') category: categoryParams
    ) : Promise<newsData[]> {
        console.log(category)
        return this.articleService.getCrawledNews(CategoryURL2[category])
    }
}
