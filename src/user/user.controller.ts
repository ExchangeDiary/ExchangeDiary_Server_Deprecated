import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateUserDto, UserDto } from './uset.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // TODO : 그냥 임시로 추가해둔 API. 나중에 삭제할 것
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(createUserDto)
  }

  // TODO : 그냥 임시로 추가해둔 API. 나중에 삭제할 것
  @Get()
  async getUsers(): Promise<{ result: UserDto[] }> {
    const result = await this.userService.getUsers()

    return { result }
  }
}
