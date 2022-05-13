import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NestFactory : Nest 어플리케이션 인스턴스를 생성
  app.enableCors(); 
  const PORT = process.env.PORT;
  await app.listen(PORT); // PORT 번호로 오는 요청을 대기한다.
}

bootstrap();