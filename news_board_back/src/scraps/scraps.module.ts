import { Module } from '@nestjs/common';
import { ScrapsService } from './scraps.service';
import { ScrapsController } from './scraps.controller';
import { ScrapsRepository } from './repository/scrap.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScrapsRepository])],
  providers: [ScrapsService, ScrapsRepository],
  controllers: [ScrapsController],
  exports: [ScrapsService, ScrapsRepository]
})
export class ScrapsModule {}
