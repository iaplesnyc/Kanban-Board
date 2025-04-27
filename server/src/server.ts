import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express, { Request, Response } from 'express';

import routes from './routes/index';
import sequelize from './config/connection';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// API Routes
app.use('/api', routes);

// Serve static files from client build
const clientDistPath = path.resolve(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

// Fallback: serve index.html for any unmatched GET routes
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.resolve(clientDistPath, 'index.html'));
});

const forceDatabaseRefresh = false;

const startServer = async () => {
  try {
    await sequelize.authenticate();
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
