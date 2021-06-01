import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { IAuthServices } from './interfaces/IAuthServices';
import { Inject, Injectable } from '@nestjs/common';

import { AuthDto } from './interfaces/auth.dto';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { SignOptions } from 'jsonwebtoken';
import { USER_REPOSITORY_TOKEN } from '../../shared/config/database.tokens';
import { UserNotFoundException } from './exceptions/user-notfound.exception';

@Injectable()
export class AuthService implements IAuthServices {
    public options: SignOptions = {
        algorithm: 'HS256',
        expiresIn: '2 days',
        jwtid: process.env.JWT_ID || '',
    };

    public constructor(
        @Inject(USER_REPOSITORY_TOKEN)
        private readonly userRepository: Repository<User>,
    ) {}

    public async sign(credentials: AuthDto): Promise<string> {
        const user = await this.userRepository.findOne({
            where: {
                uuid: credentials.emailOrUid,
            },
        });
        if(!user) throw new UserNotFoundException(credentials.emailOrUid);

        if(!bcrypt.compareSync(credentials.password,user.password)) throw new UserNotFoundException(credentials.emailOrUid);

        const payload = {
            id: user.uid,
            username: user.name,
            email: user.email,
        };

        return jwt.sign(payload, process.env.JWT_KEY || 'Secret',this.options);
    }

    public refresh (user: { uid: string, email: string }):string {
        const payload = {
            id: user.uid,
            email: user.email,
        }
        return jwt.sign(payload, process.env.JWT_KEY || 'Secret', this.options);
    }
}