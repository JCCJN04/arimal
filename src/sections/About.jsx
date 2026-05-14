import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const values = [
  'Atención médica integral para perros y gatos',
  'Estética veterinaria con trato humano',
  'Precios accesibles sin comprometer calidad',
  'Servicios preventivos y curativos',
];

const stats = [
  { value: '4.8', label: 'Calificación Google', suffix: '★' },
  { value: '50+', label: 'Reseñas reales', suffix: '' },
  { value: '100%', label: 'Compromiso', suffix: '' },
];

const About = () => {
  return (
    <section id="nosotros" className="section about">
      <div className="container about-container">

        {/* Image */}
        <motion.div
          className="about-image-side"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1400"
              alt="Médico veterinario atendiendo mascota con cariño en Veterinaria Arimal, Cumbres Elite, Monterrey"
              className="about-img"
            />
            <div className="about-img-accent" aria-hidden="true" />
          </div>

          <motion.div
            className="exp-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="exp-number">10+</span>
            <span className="exp-label">Años de<br />Pasión</span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">Nuestra Historia</span>
          <h2 className="about-title">Cuidamos a tu mascota<br />como a nuestra familia</h2>

          <p className="about-lead">
            En <strong>Veterinaria Arimal</strong> brindamos atención médica, estética y
            cuidado integral para perros y gatos, con un trato amable y profesional que
            ya distingue en Cumbres Elite.
          </p>

          <p className="about-body">
            Nuestro objetivo es ofrecer servicios de calidad a precios accesibles,
            priorizando siempre el bienestar de tu mascota. Sabemos que son parte de tu
            familia, por eso los cuidamos como si fueran la nuestra.
          </p>

          <ul className="values-list">
            {values.map((val) => (
              <li key={val} className="value-item">
                <CheckIcon />
                <span>{val}</span>
              </li>
            ))}
          </ul>

          <div className="about-stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <span className="stat-value">
                  {s.value}<span className="stat-suffix">{s.suffix}</span>
                </span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          background: var(--bg-soft);
          overflow: hidden;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Image */
        .about-image-side {
          position: relative;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-premium);
        }

        .about-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          display: block;
        }

        .about-img-accent {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom right,
            rgba(13, 148, 136, 0.06) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .exp-badge {
          position: absolute;
          top: -16px;
          right: -16px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 20px 22px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.35);
          min-width: 90px;
          text-align: center;
        }

        .exp-number {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
          color: white;
        }

        .exp-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          opacity: 0.9;
          line-height: 1.4;
          letter-spacing: 0.3px;
        }

        /* Content */
        .about-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.08;
          margin-bottom: 24px;
        }

        .about-lead {
          font-family: var(--font-body);
          font-size: 17px;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 16px;
          font-weight: 400;
        }

        .about-lead strong {
          color: var(--primary);
          font-weight: 600;
        }

        .about-body {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 32px;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 40px;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-body);
          font-weight: 500;
        }

        /* Stats */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: white;
          padding: 20px 16px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 6px;
          border: 1px solid rgba(13, 148, 136, 0.1);
          box-shadow: var(--shadow-sm);
          text-align: center;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }

        .stat-suffix {
          font-size: 20px;
          color: var(--accent);
        }

        .stat-label {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .about-container { gap: 56px; }
        }

        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .about-image-side { max-width: 480px; margin: 0 auto; }
        }

        @media (max-width: 480px) {
          .about-stats { grid-template-columns: 1fr 1fr; }
          .stat-card:last-child { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
};

export default About;
