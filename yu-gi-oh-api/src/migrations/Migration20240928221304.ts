import { Migration } from '@mikro-orm/migrations';

export class Migration20240928221304 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "user" ("id" serial primary key, "username" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null);`);

    this.addSql(`create table "yu_gi_oh_card" ("id" serial primary key, "name" varchar(255) not null, "type" varchar(255) not null, "attribute" varchar(255) not null, "level" int not null, "race" varchar(255) not null, "set" varchar(255) not null, "rarity" varchar(255) not null, "text" varchar(255) not null, "image" varchar(255) not null);`);
  }

}
