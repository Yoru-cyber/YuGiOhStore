// import { YuGiOhCard } from '../domain/entities/yu-gi-oh-card.entity';
// import IRepository from './IRepository';
// export class YuGiOhCardRepository implements IRepository<YuGiOhCard> {
//   private cards: YuGiOhCard[] = [
// new YuGiOhCard({
//   id: 1,
//   name: 'Blue-Eyes White Dragon',
//   type: 'Monster',
//   attribute: 'WIND',
//   level: 8,
//   race: 'Dragon',
//   rarity: 'Ultra Rare',
//   text: 'This card can attack twice during each Battle Phase.',
//   image:
//     'https://cdnx.jumpseller.com/deckscards/image/14196835/1689942.jpg?1653506275',
// }),
// new YuGiOhCard({
//   id: 2,
//   name: 'Dark Magician',
//   type: 'Monster',
//   attribute: 'DARK',
//   level: 7,
//   race: 'Wizard',
//   rarity: 'Secret Rare',
//   text: 'This card can destroy 1 Spell Card on the field.',
//   image:
//     'https://cdnx.jumpseller.com/deckscards/image/38570460/46986414.jpg?1692309347',
// }),
// new YuGiOhCard({
//   id: 3,
//   name: 'Red-Eyes B. Dragon',
//   type: 'Monster',
//   attribute: 'FIRE',
//   level: 7,
//   race: 'Dragon',
//   rarity: 'Super Rare',
//   text: "This card can attack twice during each Battle Phase if it is not attacked during your opponent's Battle Phase.",
//   image:
//     'https://cdnx.jumpseller.com/deckscards/image/38570592/74677422.jpg?1692309467',
// }),
// new YuGiOhCard({
//   id: 4,
//   name: 'Exodia the Forbidden One',
//   type: 'Monster',
//   attribute: 'DARK',
//   level: 0,
//   race: 'Fiend',
//   rarity: 'Ultimate Rare',
//   text: 'If all 5 parts of Exodia are on the field, your opponent loses the Duel.',
//   image:
//     'https://cdnx.jumpseller.com/deckscards/image/29426717/33396948.jpg?1668443548',
// }),
// new YuGiOhCard({
//   id: 5,
//   name: 'Slifer the Sky Dragon',
//   type: 'Monster',
//   attribute: 'WIND',
//   level: 10,
//   race: 'Dragon',
//   rarity: 'God Card',
//   text: "This card's ATK and DEF are equal to the number of cards in your opponent's hand.",
//   image:
//     'https://cdnx.jumpseller.com/deckscards/image/17182787/c598705a-ed75-54dc-82cd-480a84aa20d7.jpg?1653506780',
// }),
//   ];
//   async findById(id: number): Promise<YuGiOhCard | null> {
//     const myPromise = new Promise<YuGiOhCard>((resolve, reject) => {
//       resolve(this.cards.find((card: YuGiOhCard) => card.id === id));
//     });

//     return myPromise;
//   }
//   async findAll(): Promise<YuGiOhCard[]> {
//     const myPromise = new Promise<YuGiOhCard[]>((resolve, reject) => {
//       resolve(this.cards);
//     });
//     return await myPromise;
//   }
//   create(entity: YuGiOhCard): Promise<YuGiOhCard> {
//     const myPromise = new Promise<YuGiOhCard>((resolve, reject) => {
//       setTimeout(() => {
//         resolve(this.cards[0]);
//       }, 3000);
//     });
//     return myPromise;
//   }
//   update(id: number, entity: YuGiOhCard): Promise<YuGiOhCard | null> {
//     return null;
//   }
//   delete(id: number): Promise<boolean> {
//     const myPromise = new Promise<boolean>((resolve, reject) => {
//       setTimeout(() => {
//         resolve(false);
//       }, 3000);
//     });
//     return myPromise;
//   }
// }
