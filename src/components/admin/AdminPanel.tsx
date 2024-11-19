import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useContacts } from '../../hooks/useContacts';
import { Download, LogOut } from 'lucide-react';

export const AdminPanel = () => {
  const { logout } = useAuth();
  const { contacts, isLoading, error } = useContacts();

  const exportContacts = () => {
    const csv = [
      ['First Name', 'Last Name', 'Email', 'Message', 'Created At'],
      ...contacts.map(contact => [
        contact.first_name,
        contact.last_name,
        contact.email,
        contact.message || '',
        new Date(contact.created_at).toLocaleString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (isLoading) return <div className="text-white text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-400 text-center py-8">{error}</div>;

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display text-white">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={exportContacts}
              className="flex items-center space-x-2 px-4 py-2 bg-gold-500 text-black rounded-lg hover:bg-gold-400 transition-colors"
            >
              <Download size={18} />
              <span>Export CSV</span>
            </button>
            <button
              onClick={logout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-white/10">
                <th className="px-6 py-3 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {contacts.map((contact) => (
                <tr key={contact.id} className="text-white/80">
                  <td className="px-6 py-4">
                    {contact.first_name} {contact.last_name}
                  </td>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.message || '-'}</td>
                  <td className="px-6 py-4">
                    {new Date(contact.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};