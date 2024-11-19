import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-display text-white">
            Chile Exclusive
          </a>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#experiences">Experiences</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4 pb-6"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#experiences" onClick={() => setIsOpen(false)}>
                Experiences
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white/80 hover:text-gold-400 transition-colors duration-200 text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white/80 hover:text-gold-400 transition-colors duration-200 text-lg font-medium block"
  >
    {children}
  </a>
);