import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class YuGiOhCard {
  @PrimaryKey()
  id?: number;
  @Property()
  name?: string;
  @Property()
  type?: string;
  @Property()
  attribute?: string;
  @Property()
  level?: number;
  @Property()
  race?: string;
  @Property()
  set?: string;
  @Property()
  rarity?: string;
  @Property()
  text?: string;
  @Property()
  image?: string;

  constructor(
    name: string,
    type: string,
    attribute: string,
    level: number,
    race: string,
    set: string,
    rarity: string,
    text: string,
    image: string,
  ) {
    this.name = name;
    this.type = type;
    this.attribute = attribute;
    this.level = level;
    this.race = race;
    this.set = set;
    this.rarity = rarity;
    this.text = text;
    this.image = image;
  }
}
