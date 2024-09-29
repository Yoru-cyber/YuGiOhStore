import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YuGiOhCardModule } from './yu-gi-oh-card/yu-gi-oh-card.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    YuGiOhCardModule,
    AuthModule,
    UsersModule,
    MikroOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
