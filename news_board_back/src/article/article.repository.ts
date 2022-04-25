import { Injectable } from "@nestjs/common";
import { Connection, EntityRepository, Repository } from "typeorm";
import { NewsCollection } from "./article.entity";
import {newsData} from "./object_Types/newsType";

// 데이터베이스관련 로직은 여기에 작성
@Injectable()
@EntityRepository(NewsCollection)
export class NewsRepository extends Repository<NewsCollection> {

    constructor(private connection : Connection) {
        super();
    }

    async createManyNews(NewsData: newsData[]) : Promise<void> {
        
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(NewsData[0]);
            await queryRunner.manager.save(NewsData[1]);
            await queryRunner.commitTransaction();
        }catch(e) {
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }       
    }
}