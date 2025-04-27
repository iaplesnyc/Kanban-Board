import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

// POST /api/auth/login - Log in and get a JWT
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const validUsername = 'admin';
  const validPassword = 'password123';

  if (username === validUsername && password === validPassword) {
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// (Optional) POST /api/auth/register - Registration logic
router.post('/register', async (_req: Request, res: Response) => {
  res.status(501).json({ message: 'Registration not implemented yet' });
});

export default router;
