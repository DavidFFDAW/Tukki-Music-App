import { BadRequestException } from '@nestjs/common';

export class UserRepeatException extends BadRequestException {
  constructor() {
    const msg = `UserRepeatException: The user is repeat`;
    super(msg);
  }
}