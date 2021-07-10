import { IsString, Length } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @Length(1, 10)
  name: string
}

export type UserDto = {
  id: string
  name: string
}
