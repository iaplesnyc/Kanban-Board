import { Sequelize, Options } from 'sequelize';

// Check if the environment is production
const isProduction = process.env.NODE_ENV === 'production';

// Database connection options
const options: Options = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
};

// Enable SSL only in production
if (isProduction) {
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

// Create the Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD || '',
  options
);

export default sequelize;
