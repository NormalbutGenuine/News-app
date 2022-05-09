import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRequestDto } from './dtos/users.request.dto';
import { User } from './repository/user.entity';
import { UsersRepository } from './repository/user.repository';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor (@InjectRepository(UsersRepository) private userRepository: UsersRepository) {}

    async checkEmailExists(email) : Promise<boolean | Error> {
        const res = await this.userRepository.findUserByEmail(email)
        if (res) throw new UnauthorizedException("email already exists")
        else return true
    }

    async findAll() : Promise<User[]> {
        return await this.userRepository.find()
    }

    async findOne(id: number) : Promise<User> {
        return await this.userRepository.findOne(id)
    }

    async create(body:UserRequestDto) : Promise<User> {
        const {email, password} = body
        const hashedPassword = await bcrypt.hash(password, 10);
        return await this.userRepository.save({email:email, password: hashedPassword, name: body.name})
    }
}
