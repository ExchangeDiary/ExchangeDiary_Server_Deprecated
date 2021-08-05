import { Injectable } from '@nestjs/common'

import { DiaryEntity } from './diary.entity'
import { CreateDiaryDto } from './diary.dto'
import { DiaryRepository } from './diary.repository'

@Injectable()
export class DiaryService {
  constructor(private diaryRepository: DiaryRepository) {}

  async createDiary(
    userId: string,
    createDiaryDto: CreateDiaryDto,
  ): Promise<DiaryEntity> {
    return this.diaryRepository.createAndSave({
      theme: createDiaryDto.theme,
      title: createDiaryDto.title,
      interval: createDiaryDto.interval,
      invitationCode: createDiaryDto.invitationCode,
      invitationCodeHint: createDiaryDto.invitationCodeHint,
    })
  }
}
