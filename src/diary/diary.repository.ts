import { AbstractRepository, EntityRepository } from 'typeorm'

import { DiaryEntity } from './diary.entity'
import { DiaryDto } from './diary.dto'

@EntityRepository(DiaryEntity)
export class DiaryRepository extends AbstractRepository<DiaryEntity> {
  createAndSave({
    theme,
    title,
    interval,
    invitationCode,
    invitationCodeHint,
  }: {
    theme: string
    title: string
    interval: number
    invitationCode: string
    invitationCodeHint: string
  }): Promise<DiaryEntity> {
    return this.repository.save(
      this.repository.create({
        theme,
        title,
        interval,
        invitation_code: invitationCode,
        invitation_code_hint: invitationCodeHint,
      }),
    )
  }

  static toUserView(entity: DiaryEntity): DiaryDto {
    return {
      id: entity.id,
      theme: entity.theme,
      title: entity.title,
      interval: entity.interval,
      invitationCodeHint: entity.invitation_code_hint,
    }
  }
}
