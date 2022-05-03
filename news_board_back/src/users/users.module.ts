import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './repository/user.repository';
import { AuthModule } from 'src/auth/auth.module';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository]), forwardRef(() => AuthModule)],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
  exports: [UsersService, UsersRepository]
})
export class UsersModule {}
