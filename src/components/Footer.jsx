import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-icon">🐾</span>
            <div className="logo-text">
              <span className="brand-name">Veterinaria Arimal</span>
              <span className="brand-tagline">Atención profesional en Cumbres</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="#">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/arimalvetmty/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://wa.me/528127711270?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20veterinarios." target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.4-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Veterinaria Arimal. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <span>Ubicados en Plaza Hacienda Elite, Cumbres Elite</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #fdfdfd;
          padding: 60px 0 30px;
          border-top: 1px solid #f0f0f0;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 20px;
          color: var(--primary);
          line-height: 1;
        }

        .brand-tagline {
          display: block;
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .footer-links {
          display: flex;
          gap: 32px;
        }

        .footer-links a {
          font-weight: 500;
          color: var(--text-muted);
          font-size: 14px;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-icon {
          color: var(--text-muted);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f5f5f5;
        }

        .social-icon:hover {
          color: white;
          background: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(var(--primary-hsl), 0.2);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          border-top: 1px solid #f0f0f0;
          color: var(--text-muted);
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            text-align: center;
          }
          .footer-links {
            flex-direction: column;
            gap: 15px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
