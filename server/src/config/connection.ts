import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'default_db_name', // Provide a fallback value
  process.env.DB_USER || 'default_user', // Provide a fallback value
  process.env.DB_PASSWORD || 'default_password', // Provide a fallback value
  {
    host: process.env.DB_HOST || 'localhost', // Ensure host is always a string
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
