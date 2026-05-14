import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, Star, Home, Users, Heart, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PawIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 13.5c-2.49 0-4.5 1.48-4.5 3.75C7.5 20.11 9.77 21 12 21s4.5-.89 4.5-3.75c0-2.27-2.01-3.75-4.5-3.75zm-3.5-4a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm7 0a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm-9.25 2a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm11.5 0a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#', icon: <Home size={20} /> },
    { name: 'Nosotros', href: '#nosotros', icon: <Users size={20} /> },
    { name: 'Servicios', href: '#servicios', icon: <Heart size={20} /> },
    { name: 'Productos', href: '#productos', icon: <ShoppingBag size={20} /> },
    { name: 'Opiniones', href: '#testimonios', icon: <Star size={20} /> },
    { name: 'Ubicación', href: '#contacto', icon: <MapPin size={20} /> },
  ];

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-container">
        <a href="#" className="nav-logo" aria-label="Veterinaria Arimal — Inicio">
          <span className="logo-icon-wrap">
            <PawIcon />
          </span>
          <div className="logo-text">
            <span className="brand-name">Arimal</span>
            <span className="brand-tagline">Veterinaria Premium</span>
          </div>
        </a>

        <div className="nav-links" role="navigation" aria-label="Menú principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/528127711270?text=Hola,%20quiero%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
          aria-label="Agendar cita por WhatsApp"
        >
          Agendar Cita
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={26} />
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                className="mobile-sidebar"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 240 }}
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
              >
                <div className="sidebar-header">
                  <div className="sidebar-brand">
                    <span className="logo-icon-wrap small">
                      <PawIcon />
                    </span>
                    <span className="brand-name">Arimal</span>
                  </div>
                  <button
                    className="close-btn"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Cerrar menú"
                  >
                    <X size={22} />
                  </button>
                </div>

                <nav className="sidebar-links">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="sidebar-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1 }}
                    >
                      <span className="link-icon">{link.icon}</span>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className="sidebar-footer">
                  <a
                    href="https://wa.me/528127711270?text=Hola,%20quiero%20agendar%20una%20cita."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary sidebar-cta"
                  >
                    Agendar Cita
                  </a>
                  <a href="tel:8127711270" className="btn btn-secondary sidebar-cta">
                    <Phone size={16} />
                    81 2771 1270
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
          right: 0;
          padding: 20px 0;
          z-index: 1000;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .navbar.scrolled {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(13, 148, 136, 0.08);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .logo-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(13, 148, 136, 0.25);
          flex-shrink: 0;
        }

        .logo-icon-wrap.small {
          width: 38px;
          height: 38px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 22px;
          color: var(--text-main);
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .brand-tagline {
          font-family: var(--font-body);
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-link {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 14px;
          color: var(--text-body);
          padding: 8px 14px;
          border-radius: 8px;
          transition: all 0.2s ease;
          letter-spacing: 0.1px;
        }

        .nav-link:hover {
          color: var(--primary);
          background: var(--primary-soft);
        }

        .nav-cta {
          font-size: 13px;
          padding: 10px 22px;
          flex-shrink: 0;
        }

        .mobile-toggle {
          display: none;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          cursor: pointer;
          box-shadow: var(--shadow-xs);
          transition: all 0.2s ease;
        }

        .mobile-toggle:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Mobile Overlay */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(19, 78, 74, 0.3);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1500;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: min(320px, 90vw);
          height: 100vh;
          background: white;
          z-index: 1501;
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px;
          border-bottom: 1px solid rgba(13, 148, 136, 0.08);
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .close-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #f9f9f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--primary-soft);
          color: var(--primary);
          border-color: var(--primary-light);
        }

        .sidebar-links {
          flex: 1;
          overflow-y: auto;
          padding: 16px 0;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 24px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 16px;
          color: var(--text-body);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .sidebar-link:hover {
          background: var(--primary-soft);
          color: var(--primary);
        }

        .link-icon {
          color: var(--primary);
          opacity: 0.7;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .sidebar-footer {
          padding: 24px;
          border-top: 1px solid rgba(13, 148, 136, 0.08);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-cta {
          width: 100%;
          justify-content: center;
          font-size: 14px;
          padding: 13px 20px;
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
