import { HttpException, HttpStatus } from '@nestjs/common'

export class VodaException extends HttpException {
  readonly errorCode: ErrorCode

  constructor(errorCode: ErrorCode, message: string, statusCode: HttpStatus) {
    super(message, statusCode)
    this.errorCode = errorCode
  }
}

/**
 * 비즈니스 로직과 상관 없는 제너럴한 에러 : 10xxx
 * 인증/가입과 관련된 에러 : 20xxx
 * 기타 비즈니스 로직과 관련된 에러 : (30~99)xxx (앞의 두 번호로 서비스별 구분)
 */
export enum ErrorCode {
  // 비즈니스 로직과 상관 없는 제너럴한 에러
  UNKNOWN = 10001,

  // 인증/가입과 관련된 에러
  AUTHENTICATION_FAILED = 20001,
  LOGIN_REQUIRED = 20002,
}
