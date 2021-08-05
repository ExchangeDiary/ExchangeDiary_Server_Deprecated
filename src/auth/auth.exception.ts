import { HttpStatus } from '@nestjs/common'

import { ErrorCode, VodaException } from '../common/exceptions/exception'

export class AuthenticationFailedException extends VodaException {
  constructor() {
    super(
      ErrorCode.AUTHENTICATION_FAILED,
      '인증 오류가 발생하였습니다. 다시 로그인을 시도해주세요.',
      HttpStatus.UNAUTHORIZED,
    )
  }
}

export class LoginRequiredException extends VodaException {
  constructor() {
    super(
      ErrorCode.LOGIN_REQUIRED,
      '로그인이 필요합니다.',
      HttpStatus.FORBIDDEN,
    )
  }
}
