import { ExpressRequest } from '@app/types/expressRequest.interface';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<ExpressRequest>();

    if (request.user) {
      return true;
    }

    throw new HttpException('Not Authorized', HttpStatus.UNAUTHORIZED);
  }
}
