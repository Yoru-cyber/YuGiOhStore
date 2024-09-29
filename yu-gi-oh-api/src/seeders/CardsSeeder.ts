import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { YuGiOhCard } from '../yu-gi-oh-card/domain/entities/yu-gi-oh-card.entity';

export class CardsSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const card1 = em.create(YuGiOhCard, {
      name: 'Blue-Eyes White Dragon',
      type: 'Monster',
      attribute: 'WIND',
      level: 8,
      race: 'Dragon',
      rarity: 'Ultra Rare',
      set: '',
      text: 'This card can attack twice during each Battle Phase.',
      image:
        'https://cdnx.jumpseller.com/deckscards/image/14196835/1689942.jpg?1653506275',
    });
    const card2 = em.create(YuGiOhCard, {
      name: 'Dark Magician',
      type: 'Monster',
      attribute: 'DARK',
      level: 7,
      race: 'Wizard',
      rarity: 'Secret Rare',
      set: '',
      text: 'This card can destroy 1 Spell Card on the field.',
      image:
        'https://cdnx.jumpseller.com/deckscards/image/38570460/46986414.jpg?1692309347',
    });
  }
}
