import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  message: z.string().optional(),
});

export const validateContact = (req, res, next) => {
  try {
    req.validatedData = contactSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};