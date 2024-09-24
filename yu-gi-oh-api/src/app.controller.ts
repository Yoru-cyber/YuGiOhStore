import { Controller, Get } from '@nestjs/common';
import { AppService, YuGiOhCard } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): YuGiOhCard[] {
    return this.appService.getHello();
  }
}
