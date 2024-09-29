import { Module } from '@nestjs/common';
import { YuGiOhCardService } from './yu-gi-oh-card.service';
import { YuGiOhCardController } from './yu-gi-oh-card.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { YuGiOhCard } from './domain/entities/yu-gi-oh-card.entity';

@Module({
  imports: [MikroOrmModule.forFeature([YuGiOhCard])],
  controllers: [YuGiOhCardController],
  providers: [YuGiOhCardService],
})
export class YuGiOhCardModule {}
