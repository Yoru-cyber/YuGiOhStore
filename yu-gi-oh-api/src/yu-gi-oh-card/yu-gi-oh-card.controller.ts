import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { YuGiOhCardService } from './yu-gi-oh-card.service';
import { CreateYuGiOhCardDto } from './dto/create-yu-gi-oh-card.dto';
import { UpdateYuGiOhCardDto } from './dto/update-yu-gi-oh-card.dto';

@Controller('v1/YuGiOhCards')
export class YuGiOhCardController {
  constructor(private readonly yuGiOhCardService: YuGiOhCardService) {}

  @Post()
  create(@Body() createYuGiOhCardDto: CreateYuGiOhCardDto) {
    return this.yuGiOhCardService.create(createYuGiOhCardDto);
  }

  @Get()
  async findAll() {
    const cards = await this.yuGiOhCardService.findAll();
    return cards;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.yuGiOhCardService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateYuGiOhCardDto: UpdateYuGiOhCardDto,
  ) {
    return this.yuGiOhCardService.update(+id, updateYuGiOhCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yuGiOhCardService.remove(+id);
  }
}
