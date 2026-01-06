import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { IUsersRepository } from '../interfaces/users.repository.interface';
import { User } from '@prisma/client';

@Injectable()
export class UsersRepository implements IUsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getUser(id): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }
}
