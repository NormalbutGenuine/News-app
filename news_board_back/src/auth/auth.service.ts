import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from 'src/users/repository/user.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IJwtToken } from 'src/configs/jwtToken.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository : UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) : Promise<IJwtToken> {
    const { email, password } = data;
    //* 해당하는 email이 있는지
    const user = await this.usersRepository.findUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.')
    }

    //* password가 일치한지
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.')
    }

    const payload = { email: email, sub: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
