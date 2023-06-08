import { Body, Controller, Post, Request, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { creatUser } from './dto/user.creat.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private authService: AuthService) { }

  @Post('register')
  async creatUser(@Body() data: creatUser): Promise<any> {
    if (
      (data.password == '' && data.name == '' && data.username == '') ||
      (data.password == '' && data.name == '' && data.username == '') ||
      (data.password == '' && data.name == '') ||
      (data.password == '' && data.username == '') ||
      (data.name == '' && data.username == '') ||
      (data.name == '') ||
      (data.username == '') ||
      (data.password == '') 
    ) {
      return 'Todos os campos devem ser preenchidos'
    }
    if (data.password.length >= 6 && data.password.length <= 8) {
      return this.userService.creatUser(data)
    }
    return 'A senha deve possuir de 6 a 8 caracteres'
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    const token = await this.authService.login(req.user)
    const user = req.user
    const isUser = await this.userService.findOne(req.user.username)//
    if(isUser){//
       return {
          token: token,//
          user: user,//
        }//
    } else {//
      throw new UnauthorizedException();//
    }//

    // return {
    //   token: token,
    //   user: user,
    // }
  }

  @Post('login-token')
  async loginToken(@Request() req, @Body() data) {
    return await this.authService.loginToken(data.token)
  }
}
