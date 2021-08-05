import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { DiaryController } from './diary.controller'
import { DiaryService } from './diary.service'
import { DiaryRepository } from './diary.repository'

@Module({
  imports: [TypeOrmModule.forFeature([DiaryRepository])],
  controllers: [DiaryController],
  providers: [DiaryService],
})
export class DiaryModule {}
