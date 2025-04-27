import { Router } from 'express';
import {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
} from '../../controllers/ticket-controller.js';

export const ticketRouter = Router();

ticketRouter.get('/', getAllTickets);
ticketRouter.get('/:id', getTicketById);
ticketRouter.post('/', createTicket);
ticketRouter.put('/:id', updateTicket);
ticketRouter.delete('/:id', deleteTicket);
