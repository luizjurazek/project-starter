import { Injectable, Inject } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { IUsersRepository } from '../interfaces/users.repository.interface';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(
        @Inject(IUsersRepository)
        private readonly usersRepository: UsersRepository,
    ) {}

    async getUser(id): Promise<User> {
        const user = this.usersRepository.getUser(id);
        return user;
    }
}
