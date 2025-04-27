import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';  // This imports sequelize correctly from index.js
import { User, Ticket } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from client/dist
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

const forceDatabaseRefresh = false;

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
