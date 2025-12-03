import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';

// Todas las rutas estan dirigidas a /users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Peticion que llama al metodo del service para crear usuarios
  // creteUserDto seria lo que se utiliza por defecto pero como creamos un schema dentro de prisma le asignamos ese valor
  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  // Peticion que llama al metodo del service para listar los usuarios
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
