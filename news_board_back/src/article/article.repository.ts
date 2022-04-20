import { EntityRepository, Repository } from "typeorm";
import { NewsCollection } from "./article.entity";
import { newsData } from "./object_Types/newsType";

// 데이터베이스관련 로직은 여기에 작성
@EntityRepository(NewsCollection)
export class NewsRepository extends Repository<NewsCollection> {

    async createNews(NewsData: newsData): Promise<NewsCollection> {
        const { title, category, lede, body, date, imgSrc, newsURL } = NewsData;

        const newsItem = this.create({
            title,
            category,
            lede,
            imgSrc,
            newsURL,
            body,
            date
        })

        await this.save(newsItem);
        return newsItem;
    }

}