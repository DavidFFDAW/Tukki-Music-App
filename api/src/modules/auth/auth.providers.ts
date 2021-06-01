import { USER_REPOSITORY_TOKEN, DB_CONNECTION_TOKEN } from "../../shared/config/database.tokens";
import { User } from "../users/entities/user.entity";
import { Connection } from "typeorm";

export const AuthProviders = [
  {
    provide: USER_REPOSITORY_TOKEN,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DB_CONNECTION_TOKEN],
  },
];