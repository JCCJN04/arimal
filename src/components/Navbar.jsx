import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Star, Home, Users, Heart, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#', icon: <Home size={22} /> },
    { name: 'Nosotros', href: '#nosotros', icon: <Users size={22} /> },
    { name: 'Servicios', href: '#servicios', icon: <Heart size={22} /> },
    { name: 'Productos', href: '#productos', icon: <ShoppingBag size={22} /> },
    { name: 'Opiniones', href: '#testimonios', icon: <Star size={22} /> },
    { name: 'Ubicación', href: '#contacto', icon: <MapPin size={22} /> },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🐾</span>
          <div className="logo-text">
            <span className="brand-name">Veterinaria Arimal</span>
            <span className="brand-tagline">Atención profesional</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu size={28} />
        </button>

        {/* Mobile Side Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="mobile-menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Sidebar Menu */}
              <motion.div
                className="mobile-sidebar"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="sidebar-header">
                  <div className="nav-logo">
                    <span className="logo-icon">🐾</span>
                    <span className="brand-name">Arimal</span>
                  </div>
                  <button
                    className="close-button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Cerrar menú"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="sidebar-links">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="sidebar-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="link-icon">{link.icon}</span>
                      <span className="link-text">{link.name}</span>
                    </a>
                  ))}
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: var(--bg-white);
          padding: 12px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          font-size: 32px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 20px;
          color: var(--primary);
          line-height: 1;
        }

        .brand-tagline {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          font-size: 15px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 8px;
        }

        /* Mobile Side Menu */
        .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1500;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 85%;
          max-width: 320px;
          height: 100vh;
          background: #ffffff;
          box-shadow: 10px 0 30px rgba(0,0,0,0.1);
          z-index: 1501;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f0f0f0;
        }

        .close-button {
          background: #f5f5f5;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          cursor: pointer;
        }

        .sidebar-links {
          padding: 24px 0;
          flex-grow: 1;
          overflow-y: auto;
        }

        .sidebar-link {
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--text-main);
          text-decoration: none;
          font-weight: 600;
          font-size: 17px;
          transition: all 0.2s ease;
        }

        .sidebar-link:active {
          background: #f8fcf9;
          color: var(--primary);
        }

        .link-icon {
          color: var(--primary);
          opacity: 0.8;
          display: flex;
        }

        .sidebar-footer {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid #f0f0f0;
          background: #fafafa;
        }

        .btn-full {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .btn-full:active {
          transform: scale(0.98);
        }

        .btn-appointment {
          background: #27ae60; /* Strong Vet Green */
          color: white;
          box-shadow: 0 4px 12px rgba(39, 174, 96, 0.2);
        }

        .btn-whatsapp {
          background: #ffffff;
          color: #25d366;
          border: 1px solid #25d366;
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
