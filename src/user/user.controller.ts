import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateUserDto, UserDto } from './uset.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(createUserDto)
  }

  @Get()
  async getUsers(): Promise<{ result: UserDto[] }> {
    const result = await this.userService.getUsers()

    return { result }
  }
}
