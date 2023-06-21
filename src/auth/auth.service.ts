import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);       //
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    else if (user && bcrypt.compareSync(password, user.password)) {  //
      const { password, ...result } = user;                   //
      return result;              //
    }                 //
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const token = this.jwtService.sign(payload)
    this.tokenService.save(token, user.username)
    return {
      access_token: token,
      user: user
    };
  }

  async loginToken(token: string) {
    let user = await this.tokenService.getUserByToken(token)
    if (user) {
      return this.login(user)
    } else {
      return new HttpException({
        errorMessage: 'Token inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }
}
