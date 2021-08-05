import {
  createParamDecorator,
  ExecutionContext,
  Injectable,
  NestMiddleware,
} from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

import { UserRepository } from '../user/user.repository'
import { UserEntity } from '../user/user.entity'

import { AuthenticationFailedException } from './auth.exception'

@Injectable()
export class VodaAuthMiddleware implements NestMiddleware {
  constructor(private userRepository: UserRepository) {}

  async use(
    req: Request & { user: UserEntity },
    res: Response,
    next: NextFunction,
  ) {
    const authHeaders = req.headers.authorization

    if (!authHeaders) {
      next()
      return
    }

    if (!authHeaders.startsWith('Bearer')) {
      throw new AuthenticationFailedException()
    }

    const accessToken = authHeaders.split('Bearer ')[1]

    // TODO : remove this
    console.log('accessToken', accessToken)

    /**
     * TODO : user 인증 로직 구현
     */
    const user = await this.userRepository.findRandomUser()

    if (!user) {
      throw new AuthenticationFailedException()
    }

    req.user = user
    next()
  }
}

export const User = createParamDecorator<any, any, UserEntity>(
  (data: unknown, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
  },
)
