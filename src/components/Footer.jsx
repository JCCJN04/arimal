import React from 'react';

const PawIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 13.5c-2.49 0-4.5 1.48-4.5 3.75C7.5 20.11 9.77 21 12 21s4.5-.89 4.5-3.75c0-2.27-2.01-3.75-4.5-3.75zm-3.5-4a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm7 0a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm-9.25 2a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm11.5 0a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Opiniones', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <PawIcon />
            </div>
            <div className="footer-brand-text">
              <span className="footer-brand-name">Veterinaria Arimal</span>
              <span className="footer-brand-tagline">Atención veterinaria premium en Cumbres</span>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/arimalvetmty/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram @arimalvetmty"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/528127711270?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20veterinarios."
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Veterinaria Arimal. Todos los derechos reservados.
          </p>
          <p className="footer-address">
            Plaza Hacienda Elite, Av. Cumbres Elite 299-Loc. 106 · Monterrey, N.L.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-soft);
          border-top: 1px solid rgba(13, 148, 136, 0.1);
          padding: 64px 0 32px;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Top */
        .footer-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .footer-logo {
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

        .footer-brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .footer-brand-tagline {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        /* Nav */
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 24px;
          max-width: 400px;
        }

        .footer-link {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--primary);
        }

        /* Social */
        .footer-social {
          display: flex;
          gap: 10px;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: white;
          border: 1px solid rgba(13, 148, 136, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.25s ease;
          box-shadow: var(--shadow-xs);
        }

        .social-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 6px 16px rgba(13, 148, 136, 0.3);
          transform: translateY(-2px);
        }

        /* Divider */
        .footer-divider {
          height: 1px;
          background: rgba(13, 148, 136, 0.1);
          margin-bottom: 28px;
        }

        /* Bottom */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-copy,
        .footer-address {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-light);
          font-weight: 400;
        }

        @media (max-width: 900px) {
          .footer-top {
            flex-direction: column;
            gap: 32px;
          }
          .footer-nav { max-width: 100%; }
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
