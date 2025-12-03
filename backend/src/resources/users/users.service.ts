import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class UsersService {
  // Inyectamos Prisma en el constructor para poder usarlo
  constructor(private prisma: PrismaService) {

  }

  // Metodos HTTP

  // 1- Creacion de usuario
  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: data,
    });
  }

  // 2- Listado de usuarios
  async findAll() {
    return this.prisma.user.findMany();
  }

}
