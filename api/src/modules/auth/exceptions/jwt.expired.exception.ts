import { ForbiddenException } from '@nestjs/common';

export class JWTExpiredException extends ForbiddenException {
  constructor(token: string = 'expired') {
    const msg = `The JWT: ${token} has expired`;
    super(msg);
  }
}
