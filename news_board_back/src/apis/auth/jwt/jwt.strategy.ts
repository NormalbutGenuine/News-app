import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Payload } from './jwt.type';
import { UsersRepository } from 'src/apis/users/repository/user.repository';
import { UserRequestDto } from 'src/apis/users/dtos/users.request.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersRepository: UsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) : Promise<UserRequestDto | Error> {
    const user = await this.usersRepository.findUserByIdWithoutPassword(
      payload.email,
    );
    if (user) {
      return user; // request.user
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }

  TokenToEmail(payload: Payload) : string {
    const email = payload.email;
    return email;
  }
}
