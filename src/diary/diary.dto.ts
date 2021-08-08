import { IsInt, IsString, Length, Max, Min } from 'class-validator'

export class CreateDiaryDto {
  @IsString()
  @Length(1, 30)
  theme: string

  @IsString()
  @Length(1, 30)
  title: string

  @IsInt()
  @Min(1)
  @Max(7)
  interval: number

  @IsString()
  @Length(1, 10)
  invitationCode: string

  @IsString()
  @Length(0, 30)
  invitationCodeHint: string
}

export class DiaryDto {
  id: string
  theme: string
  title: string
  interval: number
  invitationCodeHint: string
}
