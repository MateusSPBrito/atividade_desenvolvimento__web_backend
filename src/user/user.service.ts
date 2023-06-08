import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { creatUser } from './dto/user.creat.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async creatUser(data: creatUser): Promise<any> {
    let user = new User()
    user.name = data.name;
    user.username = data.username;
    user.password = bcrypt.hashSync(data.password,8);
    return await this.userRepository.save(user)
  }
  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username:username });
  }
}