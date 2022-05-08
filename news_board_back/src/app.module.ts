import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ScrapsModule } from './scraps/scraps.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    ArticleModule,
    UsersModule,
    AuthModule,
    ScrapsModule
  ],
})
export class AppModule {}
