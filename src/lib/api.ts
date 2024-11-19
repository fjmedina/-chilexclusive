import { z } from 'zod';

const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api'  // Changed to relative path for production
  : 'http://localhost:3000/api';

export const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const submitContact = async (data: ContactFormData) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
};

export const login = async (credentials: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Invalid credentials');
  }

  return response.json();
};

export const getContacts = async (token: string) => {
  const response = await fetch(`${API_URL}/contacts`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }

  return response.json();
};
