import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const TrustFinalCTA = () => {
  return (
    <section className="section trust-cta">
      <div className="container cta-box">
        <div className="cta-content">
          <h2 className="cta-title">¿Tu mascota necesita atención?</h2>
          <p className="cta-text">Agenda hoy mismo tu cita o visítanos directamente en Cumbres. Estamos listos para cuidar a tu mejor amigo.</p>

          <div className="cta-buttons">
            <a href="tel:8127711270" className="btn btn-white">
              <Phone size={20} className="btn-icon" />
              Llamar Ahora
            </a>
            <a href="https://wa.me/528127711270?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20veterinarios." target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor" style={{ marginRight: '10px' }}>
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.4-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="cta-features">
          <div className="feature-pill">✓ Atención Profesional</div>
          <div className="feature-pill">✓ Trato Humano</div>
          <div className="feature-pill">✓ Precios Accesibles</div>
          <div className="feature-pill">✓ Calificación 4.8</div>
        </div>
      </div>

      <style jsx>{`
        .trust-cta {
          padding-bottom: 100px;
        }

        .cta-box {
          background: var(--primary);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          border-radius: 40px;
          padding: 80px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
          color: white;
          overflow: hidden;
          position: relative;
        }

        .cta-box::after {
          content: '🐾';
          position: absolute;
          font-size: 200px;
          bottom: -50px;
          right: -20px;
          opacity: 0.05;
          transform: rotate(-15deg);
        }

        .cta-content {
          max-width: 600px;
        }

        .cta-title {
          font-size: 42px;
          margin-bottom: 20px;
          color: white;
        }

        .cta-text {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
        }

        .btn-white {
          background: white;
          color: var(--primary);
          padding: 16px 32px;
          gap: 10px;
        }

        .btn-accent {
          background: var(--accent);
          color: white;
          padding: 16px 32px;
          gap: 10px;
        }

        .cta-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .feature-pill {
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 992px) {
          .cta-box {
            flex-direction: column;
            text-align: center;
            padding: 60px 30px;
          }
          .cta-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
          .cta-features {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustFinalCTA;
