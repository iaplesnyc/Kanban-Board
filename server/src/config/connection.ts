import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false, // Disable logging; set to true for debugging
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false, // Allow self-signed certificates
          },
        }
      : {},
  }
);

export default sequelize;
