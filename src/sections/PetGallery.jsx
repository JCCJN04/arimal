import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart } from 'lucide-react';

const PetGallery = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1924',
      name: 'Max',
      label: 'Paciente Feliz'
    },
    {
      url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1974',
      name: 'Luna',
      label: 'Control de Salud'
    },
    {
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=2043',
      name: 'Mochi',
      label: 'Estética Relajada'
    },
    {
      url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1988',
      name: 'Rocky',
      label: 'Día de Baño'
    },
    {
      url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=2069',
      name: 'Bella',
      label: 'Vacunación OK'
    },
    {
      url: 'https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?auto=format&fit=crop&q=80&w=1974',
      name: 'Simba',
      label: 'Nuevo Amigo'
    }
  ];

  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Nuestros Clientes Felices
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ellos son la razón de nuestro compromiso diario con la medicina veterinaria de calidad.
          </motion.p>
        </div>

        <div className="gallery-layout">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="gallery-image-wrapper">
                <img src={photo.url} alt={photo.name} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <Heart className="overlay-icon" fill="currentColor" />
                    <span className="pet-name">{photo.name}</span>
                    <span className="pet-label">{photo.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="gallery-footer">
          <a href="https://www.instagram.com/arimalvetmty/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Síguenos en Instagram <Instagram size={20} style={{ marginLeft: '10px' }} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background-color: var(--bg-white);
        }

        .gallery-layout {
          columns: 3;
          column-gap: 24px;
          margin-bottom: 50px;
        }

        .gallery-item {
          break-inside: avoid;
          margin-bottom: 24px;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
        }

        .gallery-image {
          width: 100%;
          display: block;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(var(--primary-hsl), 0.8), transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 30px;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.15) rotate(2deg);
        }

        .overlay-content {
          color: white;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }

        .overlay-icon {
          color: var(--accent);
          margin-bottom: 12px;
        }

        .pet-name {
          display: block;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .pet-label {
          font-size: 14px;
          font-weight: 500;
          opacity: 0.9;
          letter-spacing: 0.5px;
        }

        .gallery-footer {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .gallery-layout {
            columns: 2;
          }
        }

        @media (max-width: 600px) {
          .gallery-layout {
            columns: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default PetGallery;
