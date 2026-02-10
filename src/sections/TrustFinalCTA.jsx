import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const TrustFinalCTA = () => {
  return (
    <section className="section trust-cta">
      <div className="container cta-box">
        <div className="cta-content">
          <h2 className="cta-title">¿Tu mascota necesita atención?</h2>
          <p className="cta-text">Agenda hoy mismo tu cita o visítanos directamente en Cumbres. Estamos listos para cuidar a tu mejor amigo.</p>

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
