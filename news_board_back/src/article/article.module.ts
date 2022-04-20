import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller';
import { NewsCollection } from './article.entity';
import { NewsRepository } from './article.repository';
import { ArticleService } from './article.service';

@Module({
    imports: [TypeOrmModule.forFeature([NewsRepository])],
    controllers: [ArticleController],
    providers: [ArticleService]
})
export class ArticleModule {}
