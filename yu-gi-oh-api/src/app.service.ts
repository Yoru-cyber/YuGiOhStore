import { Injectable } from '@nestjs/common';
export class YuGiOhCard {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
const cardList = [new YuGiOhCard('Dark magician')];
@Injectable()
export class AppService {
  getHello(): YuGiOhCard[] {
    return cardList;
  }
}
