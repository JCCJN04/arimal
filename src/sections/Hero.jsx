import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Cuidamos a tu mascota como parte de tu familia</span>
          <h1 className="hero-title">Atención Veterinaria Profesional en Cumbres</h1>
          <p className="hero-subtitle">
            En Veterinaria Arimal brindamos salud y bienestar a tus mejores amigos con el profesionalismo que merecen.
          </p>
          <div className="hero-actions">
            <a href="tel:8127711270" className="btn btn-primary hero-btn">
              <Phone size={20} className="btn-icon" />
              Llamar ahora
            </a>
            <a href="https://wa.me/528127711270?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20veterinarios." target="_blank" rel="noopener noreferrer" className="btn btn-secondary hero-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor" style={{ marginRight: '10px' }}>
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.4-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Agendar por WhatsApp
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-stars">★★★★★</span>
              <span className="trust-text">4.8 estrellas (50+ reseñas)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-image-overlay"></div>
          {/* We'll use the generated image path here once available */}
          <img
            src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=2070"
            alt="Veterinaria Arimal - Atención profesional"
            className="hero-main-image"
          />
          <div className="floating-card cta-card">
            <span className="card-icon">🏥</span>
            <div className="card-info">
              <span className="card-title">Cumbres Elite</span>
              <span className="card-desc">Ubicación céntrica</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          background: radial-gradient(circle at top right, var(--primary-light) 0%, #ffffff 60%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(var(--primary-hsl), 0.05) 0%, transparent 70%);
          top: -200px;
          left: -200px;
          border-radius: 50%;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          color: var(--primary);
          border-radius: 50px;
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 28px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid rgba(var(--primary-hsl), 0.1);
          box-shadow: var(--shadow-sm);
        }

        .hero-title {
          font-size: 64px;
          line-height: 1.05;
          color: var(--text-main);
          margin-bottom: 28px;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 20px;
          color: var(--text-muted);
          margin-bottom: 48px;
          max-width: 520px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }

        .hero-btn {
          gap: 12px;
          padding: 18px 36px;
          font-size: 17px;
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-title {
          display: block;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.2;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 12px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trust-stars {
          color: var(--accent);
          font-size: 20px;
          filter: drop-shadow(0 2px 4px rgba(255,183,77,0.3));
        }

        .trust-text {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }

        .hero-image-container {
          position: relative;
          aspect-ratio: 4/5;
        }

        .hero-main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(255,255,255,0.5);
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          padding: 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 20px;
          bottom: 40px;
          left: -40px;
          border: 1px solid rgba(255,255,255,0.5);
          animation: float 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }

        @media (max-width: 1100px) {
          .hero-title { font-size: 48px; }
          .hero-container { gap: 40px; }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            padding-bottom: 60px;
          }
          .hero-subtitle { margin: 0 auto 40px; }
          .hero-actions { justify-content: center; }
          .hero-trust { justify-content: center; }
          .hero-image-container { 
            max-width: 500px;
            margin: 0 auto;
          }
          .floating-card { left: 20px; bottom: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
