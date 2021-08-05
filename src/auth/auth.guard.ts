import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'

import { LoginRequiredException } from './auth.exception'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    if (!request.user) {
      throw new LoginRequiredException()
    }

    return true
  }
}
