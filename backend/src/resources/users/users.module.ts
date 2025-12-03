import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service'; // Servicio de prisma

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService], // Servicio de prisma
})
export class UsersModule {}
