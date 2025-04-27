import sequelize from '../config/connection.js';  // Make sure sequelize is imported
import { UserFactory } from './user.js';
import { TicketFactory } from './ticket.js';

const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);

User.hasMany(Ticket, {
  foreignKey: 'assignedUserId',
  as: 'assignedTickets',
});

Ticket.belongsTo(User, {
  foreignKey: 'assignedUserId',
  as: 'assignedUser',
});

// Ensure sequelize is exported along with User and Ticket
export { sequelize, User, Ticket };
