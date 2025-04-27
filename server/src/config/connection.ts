import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 5,          // maximum number of connection in pool
      min: 0,          // minimum number of connection in pool
      acquire: 30000,  // maximum time (ms) pool will try to get connection before throwing error
      idle: 10000      // maximum time (ms) a connection can be idle before being released
    },
    logging: false     // optional: set to true if you want SQL logs
  }
);

export default sequelize;
