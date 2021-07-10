import { Injectable } from '@nestjs/common'

import { CreateUserDto, UserDto } from './uset.dto'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.userRepository.createAndSave({
      name: createUserDto.name,
    })

    return UserRepository.toUserView(user)
  }

  async getUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.findAll()

    return users.map(UserRepository.toUserView)
  }
}
