import { AbstractRepository, EntityRepository } from 'typeorm'

import { UserEntity } from './user.entity'
import { UserDto } from './uset.dto'

@EntityRepository(UserEntity)
export class UserRepository extends AbstractRepository<UserEntity> {
  createAndSave({ name }: { name: string }): Promise<UserEntity> {
    return this.repository.save(
      this.repository.create({
        name,
      }),
    )
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find()
  }

  static toUserView(entity: UserEntity): UserDto {
    return {
      id: entity.id,
      name: entity.name,
    }
  }
}
