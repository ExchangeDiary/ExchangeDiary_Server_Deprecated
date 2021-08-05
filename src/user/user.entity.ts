import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar', nullable: true })
  profile_image_url: string | null
}
