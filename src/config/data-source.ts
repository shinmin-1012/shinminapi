import { DataSource } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

const DATABASE_HOST = process.env.DATABASE_HOST ?? 'localhost';
const DATABASE_PORT = process.env.DATABASE_PORT ?? 5432;
const USER_NAME = process.env.DATABASE_USERNAME ?? 'postgres';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? '123456';
const DATABASE_NAME = process.env.DATABASE_NAME ?? 'study';

export const dataSource = new DataSource({
  type: 'postgres',
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: USER_NAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [__dirname + '/../modules/**/*.entity.{ts,js}'], // Adjusted path
  migrations: [__dirname + '/../migrations/*{.ts,.js}'], // Adjusted path
  synchronize: false,
  logging: true,
});
