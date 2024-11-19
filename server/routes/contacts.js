import { Router } from 'express';
import db from '../db/index.js';
import { validateContact } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';

const router = Router();

// Create contact
router.post('/', validateContact, async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.validatedData;
    const result = await db.query(
      `INSERT INTO contacts (first_name, last_name, email, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [firstName, lastName, email, message]
    );
    res.status(201).json({ id: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Get all contacts (protected)
router.get('/', auth, async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;