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
          <a href="tel:8127711270" className="btn btn-primary nav-cta">
            Llamar ahora
          </a>
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

                <div className="sidebar-footer">
                  <a href="tel:8127711270" className="btn btn-full btn-appointment">
                    <Phone size={18} style={{ marginRight: '8px' }} />
                    Agendar cita
                  </a>
                  <a href="https://wa.me/528127711270?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20veterinarios." target="_blank" rel="noopener noreferrer" className="btn btn-full btn-whatsapp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor" style={{ marginRight: '8px' }}>
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.4-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    WhatsApp
                  </a>
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
