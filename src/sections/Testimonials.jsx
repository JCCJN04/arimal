import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Cruz C',
    time: 'Hace 2 meses',
    text: 'Excelente atención, trataron muy bien a mi cachorro, con mucho tacto para realizar los procedimientos.',
  },
  {
    name: 'Cecilia De la Mora',
    time: 'Hace 1 mes',
    text: 'Siempre ha tratado a mis dos perritos de maravilla. Tengo con ellos más de 5 años trabajando y los recomiendo ampliamente.',
  },
  {
    name: 'Aidee Chapa',
    time: 'Hace 6 meses',
    text: 'Excelente atención y servicio siempre con mis 4 shih tzu y en especial con las esterilizaciones.',
  },
  {
    name: 'Maria Luisa Cantú',
    time: 'Hace 8 meses',
    text: 'Excelente trato, llevé a mi perrito a esterilizar y todo salió súper bien. Siempre al pendiente de su evolución.',
  },
  {
    name: 'Ivan Rubio M',
    time: 'Hace 5 meses',
    text: 'Muy buena atención médica canina.',
  },
  {
    name: 'Daniela Reza García',
    time: 'Hace 1 año',
    text: 'Excelente trato a mi perrita y muy amables conmigo. Súper recomendados.',
  },
  {
    name: 'Carlos Carranza',
    time: 'Hace 10 meses',
    text: 'Excelente trato por parte del médico. Muy profesional y atento. Servicio de estética 10/10.',
  },
  {
    name: 'Gustavo Escobedo',
    time: 'Hace 2 años',
    text: 'Buen lugar para baño y corte, buen servicio a buen precio.',
  },
  {
    name: 'Leonel Rodz',
    time: 'Hace 3 años',
    text: 'Nos atendieron muy bien y fue el mejor precio de la zona.',
  },
  {
    name: 'Carlos Ibañez',
    time: 'Hace 3 años',
    text: 'Fuimos de urgencia y nos sorprendió el cariño que tienen por los animales. Súper recomendado.',
  },
];

const StarRow = () => (
  <div className="star-row" aria-label="5 estrellas">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F97316" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const GoogleLogo = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-label="Google" role="img">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const getInitials = (name) =>
  name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase();

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.max(0, reviews.length - itemsToShow + 1);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) autoPlayRef.current = setInterval(next, 4500);
    return () => clearInterval(autoPlayRef.current);
  }, [next, isPaused]);

  return (
    <section
      id="testimonios"
      className="section testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Opiniones</span>
          <h2 className="section-title">Lo que dicen en Google</h2>
          <div className="global-rating">
            <div className="stars-large">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F97316" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="global-rating-text">
              Calificación promedio <strong>4.8</strong> · 50+ reseñas verificadas
            </span>
          </div>
        </motion.div>

        <div className="carousel-wrapper">
          <button className="nav-btn prev-btn" onClick={prev} aria-label="Reseña anterior">
            <ChevronLeft size={20} />
          </button>

          <div className="carousel-track-outer">
            <motion.div
              className="carousel-track"
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="review-slot"
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                >
                  <div className="review-card">
                    <div className="card-top">
                      <StarRow />
                      <span className="review-time">{review.time}</span>
                    </div>

                    <p className="review-text">"{review.text}"</p>

                    <div className="card-bottom">
                      <div className="reviewer-avatar" aria-hidden="true">
                        {getInitials(review.name)}
                      </div>
                      <div className="reviewer-info">
                        <span className="reviewer-name">{review.name}</span>
                        <div className="google-badge">
                          <GoogleLogo />
                          <span>Reseña de Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="nav-btn next-btn" onClick={next} aria-label="Siguiente reseña">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Paginación de reseñas">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir a página ${i + 1}`}
              role="tab"
              aria-selected={currentIndex === i}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          background: var(--bg-soft);
          overflow: hidden;
        }

        .section-header {
          text-align: center;
        }

        .global-rating {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 56px;
        }

        .stars-large {
          display: flex;
          gap: 3px;
        }

        .global-rating-text {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-muted);
          font-weight: 400;
        }

        .global-rating-text strong {
          color: var(--text-main);
          font-weight: 700;
        }

        /* Carousel */
        .carousel-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .carousel-track-outer {
          overflow: hidden;
          width: 100%;
          padding: 16px 0 24px;
        }

        .carousel-track {
          display: flex;
        }

        .review-slot {
          padding: 0 10px;
        }

        .review-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border: 1px solid rgba(13, 148, 136, 0.08);
          box-shadow: var(--shadow-sm);
          height: 100%;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .review-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .star-row {
          display: flex;
          gap: 2px;
        }

        .review-time {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-light);
          font-weight: 500;
        }

        .review-text {
          font-family: var(--font-heading);
          font-size: 17px;
          font-style: italic;
          color: var(--text-body);
          line-height: 1.6;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-bottom {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(13, 148, 136, 0.06);
        }

        .reviewer-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
          letter-spacing: 0.5px;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .reviewer-name {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          color: var(--text-main);
        }

        .google-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Nav buttons */
        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: white;
          border: 1px solid rgba(13, 148, 136, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: var(--shadow-xs);
          transition: all 0.25s ease;
        }

        .nav-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 8px 20px rgba(13, 148, 136, 0.25);
        }

        /* Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(13, 148, 136, 0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 28px;
          border-radius: 10px;
          background: var(--primary);
        }

        @media (max-width: 768px) {
          .nav-btn { display: none; }
          .review-slot { padding: 0 6px; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
