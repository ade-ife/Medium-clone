import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    console.log('createUser', createUserDto);
    return this.userService.createUser(createUserDto);
  }
}
