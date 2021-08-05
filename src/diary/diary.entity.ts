import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'diary',
})
export class DiaryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar' })
  theme: string

  // 다이어리 방 제목
  @Column({ type: 'varchar' })
  title: string

  // 작성주기 (1~7)
  @Column({ type: 'integer' })
  interval: number

  // 참여 코드
  @Column({ type: 'varchar' })
  invitation_code: string

  // 힌트
  @Column({ type: 'varchar' })
  invitation_code_hint: string
}
