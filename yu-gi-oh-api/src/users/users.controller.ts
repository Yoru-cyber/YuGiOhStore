import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { UserAlreadyExists } from './exceptions/user-already-exists';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
interface IServiceUserResponse {
  message: string;
  id?: number;
  jwt?: string;
}
@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() response: Response,
  ) {
    const serviceUserResponse: IServiceUserResponse | typeof UserAlreadyExists =
      await this.usersService.create(createUserDto);
    if (serviceUserResponse === UserAlreadyExists) return response.status(409);
    return response.status(201).send(JSON.stringify(serviceUserResponse));
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
