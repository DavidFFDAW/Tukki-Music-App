import { NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor(userID: number | string = -1) {
    const msg = `The user: ID - ${userID} not found`;
    super(msg);
  }
}