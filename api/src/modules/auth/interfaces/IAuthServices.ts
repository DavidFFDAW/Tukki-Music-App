import { SignOptions } from 'jsonwebtoken';

export interface IAuthServices {
    options: SignOptions;
    sign(credentials: { emailOrUid: string; password: string }): Promise<string>;
}