import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return; // Ensure the function exits here
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Forbidden' });
      return; // Ensure the function exits here
    }

    // Attach the decoded token to `req.user` if it exists
    req.user = decoded as { username: string };
    next(); // Proceed to the next middleware
  });
};
