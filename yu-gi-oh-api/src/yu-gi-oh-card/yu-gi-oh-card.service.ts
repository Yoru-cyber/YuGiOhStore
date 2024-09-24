import { Injectable } from '@nestjs/common';
import { CreateYuGiOhCardDto } from './dto/create-yu-gi-oh-card.dto';
import { UpdateYuGiOhCardDto } from './dto/update-yu-gi-oh-card.dto';
import { YuGiOhCard } from './domain/entities/yu-gi-oh-card.entity';
import { YuGiOhCardRepository } from './infra/yu-gi-oh-card.repository';
@Injectable()
export class YuGiOhCardService {
  private repository: YuGiOhCardRepository = new YuGiOhCardRepository();
  create(createYuGiOhCardDto: CreateYuGiOhCardDto) {
    return 'This action adds a new yuGiOhCard';
  }

  async findAll() {
    const cards = await this.repository.findAll();
    return cards;
  }

  async findOne(id: number) {
    const card = await this.repository.findById(id);
    return card;
  }

  update(id: number, updateYuGiOhCardDto: UpdateYuGiOhCardDto) {
    return `This action updates a #${id} yuGiOhCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} yuGiOhCard`;
  }
}
