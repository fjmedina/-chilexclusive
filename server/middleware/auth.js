import jwt from 'jsonwebtoken';
import { z } from 'zod';

const tokenSchema = z.string().min(1);

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const parsedToken = tokenSchema.parse(token);
    const decoded = jwt.verify(parsedToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};