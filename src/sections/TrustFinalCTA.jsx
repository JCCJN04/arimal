import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const features = [
  { label: 'Atención Profesional', icon: '✓' },
  { label: 'Trato Humano', icon: '✓' },
  { label: 'Precios Accesibles', icon: '✓' },
  { label: 'Calificación 4.8★', icon: '✓' },
];

const TrustFinalCTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative bg element */}
          <div className="cta-bg-circle cta-circle-1" aria-hidden="true" />
          <div className="cta-bg-circle cta-circle-2" aria-hidden="true" />

          <div className="cta-inner">
            <div className="cta-content">
              <span className="cta-eyebrow">Veterinaria Arimal · Cumbres Elite</span>
              <h2 className="cta-title">
                ¿Tu mascota necesita<br />atención hoy?
              </h2>
              <p className="cta-text">
                Agenda tu cita o visítanos directamente en Plaza Hacienda Elite.
                Estamos listos para cuidar a tu mejor amigo.
              </p>

              <div className="cta-buttons">
                <a
                  href="https://wa.me/528127711270?text=Hola,%20quiero%20agendar%20una%20cita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn-white"
                >
                  <WhatsAppIcon />
                  Agendar por WhatsApp
                </a>
                <a href="tel:8127711270" className="cta-btn cta-btn-outline">
                  <Phone size={17} />
                  Llamar ahora
                </a>
              </div>
            </div>

            <div className="cta-features">
              {features.map((f) => (
                <div key={f.label} className="feature-item">
                  <span className="feature-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 0 24px 100px;
        }

        .cta-box {
          position: relative;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          border-radius: var(--radius-xl);
          padding: 72px 60px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(13, 148, 136, 0.35);
        }

        .cta-bg-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-circle-1 {
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.04);
          top: -200px;
          right: -100px;
        }

        .cta-circle-2 {
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.03);
          bottom: -150px;
          left: 200px;
        }

        .cta-inner {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 48px;
        }

        .cta-content {
          max-width: 560px;
        }

        .cta-eyebrow {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 16px;
        }

        .cta-title {
          font-family: var(--font-heading);
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 600;
          color: white;
          line-height: 1.06;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .cta-text {
          font-family: var(--font-body);
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 36px;
          font-weight: 400;
        }

        .cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.28s ease;
          white-space: nowrap;
        }

        .cta-btn-white {
          background: white;
          color: var(--primary-dark);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .cta-btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .cta-btn-outline {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
        }

        .cta-btn-outline:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Features grid */
        .cta-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          flex-shrink: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: white;
          white-space: nowrap;
        }

        .feature-check {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 1024px) {
          .cta-inner { flex-direction: column; align-items: flex-start; }
          .cta-features { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cta-box { padding: 48px 28px; border-radius: var(--radius-lg); }
          .cta-buttons { flex-direction: column; }
          .cta-btn { justify-content: center; }
          .cta-section { padding-bottom: 80px; }
        }
      `}</style>
    </section>
  );
};

export default TrustFinalCTA;
