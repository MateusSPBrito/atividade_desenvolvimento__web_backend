import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Token } from './token.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) { }

  async save(hash: string, username: string) {
    let objToken = await this.tokenRepository.findOneBy({ username: username })
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash: hash
      })
    } else {
      this.tokenRepository.insert({
        hash: hash,
        username: username
      })
    }
  }
  async refreshToken(oldToken: string) {
    let objToken = await this.tokenRepository.findOneBy({ hash: oldToken })
    if (objToken) {
      let user = await this.userService.findOne(objToken.username)      
      if (user) {
        return this.authService.login(user)
      }
      // return this.authService.login(user)
    } else {
      return new HttpException({
        errorMessage: 'Token inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }
  async getUserByToken(token: string): Promise<User> {
    let objToken = await this.tokenRepository.findOneBy({ hash: token })
    if (objToken) {
      let user = await this.userService.findOne(objToken.username)     
      if (user) {
        return user
      }      
      // return user
    } else {
      return null
    }
  }
}