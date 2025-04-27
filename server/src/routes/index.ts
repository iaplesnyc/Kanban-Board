import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { Router } from 'express';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

export default router;
