import { Module } from '@nestjs/common';
import { YuGiOhCardService } from './yu-gi-oh-card.service';
import { YuGiOhCardController } from './yu-gi-oh-card.controller';

@Module({
  controllers: [YuGiOhCardController],
  providers: [YuGiOhCardService],
})
export class YuGiOhCardModule {}
