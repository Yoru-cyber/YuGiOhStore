import { Injectable } from '@nestjs/common';
import { CreateYuGiOhCardDto } from './dto/create-yu-gi-oh-card.dto';
import { UpdateYuGiOhCardDto } from './dto/update-yu-gi-oh-card.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { YuGiOhCard } from './domain/entities/yu-gi-oh-card.entity';
@Injectable()
export class YuGiOhCardService {
  @InjectRepository(YuGiOhCard)
  private readonly repository: EntityRepository<YuGiOhCard>;
  async create(createYuGiOhCardDto: CreateYuGiOhCardDto) {
    return 'This action adds a new yuGiOhCard';
  }

  async findAll() {
    const cards = await this.repository.findAll();
    return cards;
  }

  async findOne(id: number) {
    const card = await this.repository.findOne({ id: id });
    return card;
  }

  update(id: number, updateYuGiOhCardDto: UpdateYuGiOhCardDto) {
    return `This action updates a #${id} yuGiOhCard`;
  }

  remove(id: number) {
    // this.repository.
  }
}
