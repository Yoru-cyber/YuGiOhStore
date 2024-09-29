import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class User {
  @PrimaryKey()
  id?: number;
  @Property()
  username?: string;
  @Property()
  email?: string;
  @Property()
  password?: string;
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
