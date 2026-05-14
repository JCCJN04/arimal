import React from 'react';
import { motion } from 'framer-motion';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
    name: 'Max',
    label: 'Paciente Feliz',
  },
  {
    url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    name: 'Luna',
    label: 'Control de Salud',
  },
  {
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    name: 'Mochi',
    label: 'Estética Relajada',
  },
  {
    url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
    name: 'Rocky',
    label: 'Día de Baño',
  },
  {
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    name: 'Bella',
    label: 'Vacunación OK',
  },
  {
    url: 'https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?auto=format&fit=crop&q=80&w=800',
    name: 'Simba',
    label: 'Nuevo Amigo',
  },
];

const PetGallery = () => {
  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <span className="section-eyebrow">Galería</span>
          <h2 className="section-title">Nuestros Clientes Felices</h2>
          <p className="section-subtitle">
            Ellos son la razón de nuestro compromiso diario con la medicina veterinaria de calidad.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.name}
              className="gallery-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
            >
              <div className="gallery-inner">
                <img
                  src={photo.url}
                  alt={`${photo.name} — ${photo.label}`}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay" aria-hidden="true">
                  <div className="overlay-content">
                    <span className="overlay-heart">
                      <HeartIcon />
                    </span>
                    <span className="pet-name">{photo.name}</span>
                    <span className="pet-label">{photo.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery-footer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://www.instagram.com/arimalvetmty/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label="Síguenos en Instagram @arimalvetmty"
          >
            <InstagramIcon />
            Síguenos en Instagram
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .gallery {
          background: var(--bg-white);
        }

        .gallery-grid {
          columns: 3;
          column-gap: 20px;
          margin-bottom: 56px;
        }

        .gallery-item {
          break-inside: avoid;
          margin-bottom: 20px;
          cursor: pointer;
        }

        .gallery-inner {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .gallery-img {
          width: 100%;
          display: block;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(13, 78, 74, 0.75) 0%,
            rgba(13, 78, 74, 0.1) 50%,
            transparent 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.07);
        }

        .overlay-content {
          color: white;
          transform: translateY(10px);
          transition: transform 0.35s ease;
        }

        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }

        .overlay-heart {
          display: block;
          color: #F97316;
          margin-bottom: 8px;
        }

        .pet-name {
          display: block;
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .pet-label {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          opacity: 0.85;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .gallery-footer {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .gallery-grid { columns: 2; }
        }

        @media (max-width: 560px) {
          .gallery-grid { columns: 1; }
        }
      `}</style>
    </section>
  );
};

export default PetGallery;
