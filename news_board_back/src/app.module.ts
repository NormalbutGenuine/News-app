import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsCollection } from './article/article.entity';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tiger',
      database: 'NewsAppDB',
      entities: [NewsCollection],
      synchronize: true,
    }),
    ArticleModule
  ],
})
export class AppModule {}
