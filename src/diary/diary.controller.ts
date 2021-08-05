import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { AuthGuard } from '../auth/auth.guard'
import { User } from '../auth/auth.middleware'
import { UserEntity } from '../user/user.entity'

import { CreateDiaryDto, DiaryDto } from './diary.dto'
import { DiaryService } from './diary.service'
import { DiaryRepository } from './diary.repository'

@Controller('diaries')
export class DiaryController {
  constructor(private diaryService: DiaryService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createDiary(
    @User() user: UserEntity,
    @Body() createDiaryDto: CreateDiaryDto,
  ): Promise<DiaryDto> {
    const diary = await this.diaryService.createDiary(user.id, createDiaryDto)

    return DiaryRepository.toUserView(diary)
  }
}
