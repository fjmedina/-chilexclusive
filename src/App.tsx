import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/admin/AdminPanel';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return isAuthenticated ? <AdminPanel /> : <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;