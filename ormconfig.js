module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  entities: ['dist/entities/*.entity{.ts, .js}'],
  migrations: ['dist/migrations/*{.ts, .js}'],
  subscribers: ['dist/subscribers/**/*{.js,.ts}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
