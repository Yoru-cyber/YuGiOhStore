export class YuGiOhCard {
  id?: number;
  name?: string;
  type?: string;
  attribute?: string;
  level?: number;
  race?: string;
  set?: string;
  rarity?: string;
  text?: string;
  image?: string;

  constructor(cardData: YuGiOhCard) {
    Object.assign(this, cardData);
  }
}
