import { User } from '@prisma/client';

export interface IUsersRepository {
    getUser(id): Promise<User>;
}

export const IUsersRepository = Symbol('IUsersRepository');
