import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from 'src/users/domain/entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async validateUser({ username, password }: AuthPayloadDto) {
    const findUser = await this.userRepository.findOne({ username: username });
    if (!findUser) return null;
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch === true) {
      const { password, ...user } = findUser;
      const jwt = this.jwtService.sign(user);
      return { access_token: jwt, token_type: 'Bearer', expires_in: '3600s' };
    }
  }
}
