import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import { authenticateToken } from '../../middleware/auth';

const router = Router();

// Secure routes
router.use('/tickets', authenticateToken, ticketRouter);
router.use('/users', authenticateToken, userRouter);

export default router;
