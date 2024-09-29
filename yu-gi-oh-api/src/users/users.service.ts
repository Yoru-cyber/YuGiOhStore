import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './domain/entities/user.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import * as bcrypt from 'bcrypt';
import { UserAlreadyExists } from './exceptions/user-already-exists';
import { UserNotFound } from './exceptions/user-not-found';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      username: createUserDto.username,
    });
    if (userExist) return UserAlreadyExists;
    createUserDto.password = await bcrypt.hash(createUserDto.password, 5);
    const user_id = await this.userRepository.insert(createUserDto);
    if (!user_id) return { message: 'error signing up user', id: null };
    return { message: 'successful', id: user_id };
  }
  findAll() {
    return `This action returns all users`;
  }
  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne(
        { id: id },
        { exclude: ['password'] },
      );
      if (!user) return new UserNotFound(id);
      return user;
    } catch (e: any) {
      console.log(e);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  async remove(id: number) {
    try {
      await this.userRepository.nativeDelete({ id: id });
    } catch (e: any) {
      console.log(e);
    }
    return `This action removes a #${id} user`;
  }
}
