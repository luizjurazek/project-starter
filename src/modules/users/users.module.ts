import { Module } from '@nestjs/common';
import { IUsersRepository } from './interfaces/users.repository.interface';
import { UsersRepository } from './repositories/users.repository';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from './services/users.service';

@Module({
    imports: [PrismaService],
    controllers: [],
    providers: [
        UsersService,
        {
            provide: IUsersRepository,
            useClass: UsersRepository,
        },
    ],
    exports: [],
})
export class UsersModule {}
