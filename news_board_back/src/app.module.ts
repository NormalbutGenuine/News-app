import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ScrapsModule } from './scraps/scraps.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tiger',
      database: 'NewsAppDB',
      entities: ["dist/**/*.entity.{js, ts}"],
      synchronize: true,
      autoLoadEntities: true
    }),
    ArticleModule,
    UsersModule,
    AuthModule,
    ScrapsModule
  ],
})
export class AppModule {}
