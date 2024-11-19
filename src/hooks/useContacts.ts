import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getContacts } from '../lib/api';

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  message: string | null;
  created_at: string;
}

export const useContacts = () => {
  const { token } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts(token!);
        setContacts(data);
      } catch (err) {
        setError('Failed to fetch contacts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, [token]);

  return { contacts, isLoading, error };
};