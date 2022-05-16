import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './apis/article/article.module';
import { UsersModule } from './apis/users/users.module';
import { AuthModule } from './apis/auth/auth.module';
import { ScrapsModule } from './apis/scraps/scraps.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [// 이 모듈에 필요한 Provider를 제공하는 모듈들을 import
    ConfigModule.forRoot(), // forRoot 여기서 한 번 설정하면 다른 모듈에서 같은 설정으로 사용한다.
    TypeOrmModule.forRoot(),
    ArticleModule, 
    UsersModule,
    AuthModule,
    ScrapsModule
  ],
})
export class AppModule {}
