import { Sequelize } from 'sequelize';

const isProduction = process.env.NODE_ENV === 'production';

const options: any = {
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
};

if (isProduction) {
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  options
);

export default sequelize;
