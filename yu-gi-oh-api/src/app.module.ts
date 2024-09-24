import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YuGiOhCardModule } from './yu-gi-oh-card/yu-gi-oh-card.module';

@Module({
  imports: [YuGiOhCardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
