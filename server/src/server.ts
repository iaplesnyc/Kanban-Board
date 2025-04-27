import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';

import routes from './routes/index';
import sequelize from './config/connection';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to serve static files correctly
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// Middleware for parsing JSON
app.use(express.json());

// API Routes
app.use(routes);

const forceDatabaseRefresh = false;

const startServer = async () => {
  try {
    await sequelize.authenticate(); // <- Optional: test db connection first
    console.log('✅ Database connection established successfully.');

    await sequelize.sync({ force: forceDatabaseRefresh });
    console.log('✅ Database synchronized.');

    app.listen(PORT, () => {
      console.log(`✅ Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start the server:', error);
  }
};

startServer();
