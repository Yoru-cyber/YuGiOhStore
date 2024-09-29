import { Migrator } from '@mikro-orm/migrations';
import {
  defineConfig,
  MikroORM,
  Options,
  PostgreSqlDriver,
} from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';

export default defineConfig({
  host: process.env.DB_HOST || 'localhost',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: 'postgres',
  driver: PostgreSqlDriver,
  extensions: [SeedManager, Migrator],
});
