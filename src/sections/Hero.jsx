import React from 'react';
import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Hero = () => {
  return (
    <section className="hero">
      {/* Background decorative blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <motion.div
            className="trust-badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <div className="stars-row" aria-label="4.8 estrellas de 5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span>4.8 · 50+ reseñas en Google</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
          >
            Atención Veterinaria
            <span className="hero-title-accent"> Profesional</span>
            <br />en Cumbres
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            En Veterinaria Arimal brindamos salud y bienestar a tus mejores amigos con el
            profesionalismo y el cariño que merecen.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
          >
            <a
              href="https://wa.me/528127711270?text=Hola,%20quiero%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero-btn"
            >
              <WhatsAppIcon />
              Agendar por WhatsApp
            </a>
            <a href="tel:8127711270" className="btn btn-secondary hero-btn">
              <Phone size={16} />
              81 2771 1270
            </a>
          </motion.div>

          <motion.div
            className="hero-features"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            {['Atención Profesional', 'Trato Humano', 'Precios Accesibles'].map((f) => (
              <div key={f} className="feature-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="hero-image-side"
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=1400"
              alt="Veterinario atendiendo a un perro en Veterinaria Arimal, Cumbres Elite, Monterrey"
              className="hero-img"
              fetchpriority="high"
              decoding="async"
            />
            <div className="hero-img-overlay" aria-hidden="true" />
          </div>

          {/* Floating card */}
          <motion.div
            className="hero-card glass-strong"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="card-icon-wrap">
              <MapPin size={18} color="var(--primary)" />
            </div>
            <div className="card-body">
              <span className="card-title">Cumbres Elite</span>
              <span className="card-desc">Plaza Hacienda Elite · Local 106</span>
            </div>
          </motion.div>

          {/* Rating badge */}
          <motion.div
            className="hero-rating glass-strong"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="rating-number">4.8</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="rating-label">Google</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} color="var(--text-muted)" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 100px;
          padding-bottom: 40px;
          overflow: hidden;
          background: var(--bg-white);
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .hero-blob-1 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.07) 0%, transparent 70%);
          top: -200px;
          right: -200px;
        }

        .hero-blob-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 72px;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: var(--container-width);
          padding: 0 24px;
        }

        /* Content */
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background: var(--bg-glass-strong);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(13, 148, 136, 0.15);
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-body);
          margin-bottom: 28px;
          box-shadow: var(--shadow-sm);
        }

        .stars-row {
          display: flex;
          gap: 2px;
        }

        .hero-title {
          font-size: clamp(48px, 6vw, 76px);
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.03;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .hero-title-accent {
          color: var(--primary);
          font-style: italic;
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 18px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 480px;
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .hero-btn {
          font-size: 14px;
          padding: 14px 28px;
        }

        .hero-features {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .feature-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          background: var(--primary-soft);
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-main);
          letter-spacing: 0.1px;
          border: 1px solid var(--primary-light);
        }

        /* Image Side */
        .hero-image-side {
          position: relative;
        }

        .hero-image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          aspect-ratio: 4/5;
          box-shadow: var(--shadow-premium);
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(13, 78, 74, 0.15) 100%
          );
        }

        /* Floating cards */
        .hero-card {
          position: absolute;
          bottom: 36px;
          left: -28px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 22px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
        }

        .card-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-title {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          color: var(--text-main);
          line-height: 1;
        }

        .card-desc {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-muted);
        }

        .hero-rating {
          position: absolute;
          top: 28px;
          right: -20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          text-align: center;
        }

        .rating-number {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1;
        }

        .rating-stars {
          display: flex;
          gap: 2px;
        }

        .rating-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.5;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .hero-container { gap: 48px; }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-subtitle { margin: 0 auto 40px; }
          .hero-actions { justify-content: center; }
          .hero-features { justify-content: center; }
          .trust-badge { display: inline-flex; }
          .hero-image-side {
            max-width: 420px;
            margin: 0 auto;
          }
          .hero-card { left: 0; bottom: 20px; }
          .hero-rating { right: 0; top: 16px; }
          .scroll-indicator { display: none; }
        }

        @media (max-width: 480px) {
          .hero-actions { flex-direction: column; align-items: stretch; }
          .hero-btn { justify-content: center; }
          .hero-card { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
