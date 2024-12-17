import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

const DATABASE_HOST = process.env.DATABASE_HOST ?? '127.0.0.1';
const DATABASE_PORT = process.env.DATABASE_PORT ?? 5432;
const USER_NAME = process.env.DATABASE_USERNAME ?? 'tuanhta';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? ':BMAt4RtL"YCa,)@';
const DATABASE_NAME = process.env.DATABASE_NAME ?? 'study';

const config = {
  type: 'postgres',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: USER_NAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [__dirname, '/modules/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'], // Adjust path to migrations
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
};

export default registerAs('typeorm', () => config);
