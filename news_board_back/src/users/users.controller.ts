import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { UserRequestDto } from './dtos/users.request.dto';
import { User } from './repository/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

    @Get("")
    findAll() : Promise<User[]> {
        return this.usersService.findAll()
    }

    @Get("/:id")
    findUser(@Param("id", ParseIntPipe) id) : Promise<User> {
        return this.usersService.findOne(id)
    }

    @Post("")
    async registUser(@Body() body : UserRequestDto) : Promise<User> {
        return await this.usersService.create(body)
    }

    @Post("/exists")
    checkExists(@Body() mail) {
        const {email} = mail
        return this.usersService.checkEmailExists(email)
    }

    @Post("/login")
    logIn(@Body() data: LoginRequestDto) {
        return this.authService.jwtLogIn(data);
    }
}
