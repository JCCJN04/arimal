import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Cruz C",
    stars: 5,
    time: "Hace 2 meses",
    text: "Excelente atención, trataron muy bien a mi cachorro, con mucho tacto para realizar los procedimientos."
  },
  {
    name: "Cecilia De la Mora",
    stars: 5,
    time: "Hace 1 mes",
    text: "Siempre ha tratado a mis dos perritos de maravilla. Tengo con ellos más de 5 años trabajando y los recomiendo ampliamente."
  },
  {
    name: "Aidee Chapa",
    stars: 5,
    time: "Hace 6 meses",
    text: "Excelente atención y servicio siempre con mis 4 shih tzu y en especial con las esterilizaciones."
  },
  {
    name: "Maria Luisa Cantú",
    stars: 5,
    time: "Hace 8 meses",
    text: "Excelente trato, llevé a mi perrito a esterilizar y todo salió súper bien. Siempre al pendiente de su evolución."
  },
  {
    name: "Ivan Rubio M",
    stars: 5,
    time: "Hace 5 meses",
    text: "Muy buena atención médica canina."
  },
  {
    name: "Daniela Reza García",
    stars: 5,
    time: "Hace 1 año",
    text: "Excelente trato a mi perrita y muy amables conmigo. Súper recomendados."
  },
  {
    name: "Carlos Carranza",
    stars: 5,
    time: "Hace 10 meses",
    text: "Excelente trato por parte del médico. Muy profesional y atento. Servicio de estética 10/10."
  },
  {
    name: "Gustavo Escobedo",
    stars: 5,
    time: "Hace 2 años",
    text: "Buen lugar para baño y corte, buen servicio a buen precio."
  },
  {
    name: "Leonel Rodz",
    stars: 5,
    time: "Hace 3 años",
    text: "Nos atendieron muy bien y fue el mejor precio de la zona."
  },
  {
    name: "Carlos Ibañez",
    stars: 5,
    time: "Hace 3 años",
    text: "Fuimos de urgencia y nos sorprendió el cariño que tienen por los animales. Súper recomendado."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef();

  // Handle responsiveness
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const totalPages = Math.max(0, reviews.length - itemsToShow + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(nextSlide, 4500);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [nextSlide, isPaused]);

  return (
    <section id="testimonios" className="section reviews-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <div className="container">
        <div className="carousel-header">
          <h2 className="section-title">Lo que dicen nuestros clientes en Google</h2>
          <div className="google-status">
            <span className="stars-row">
              {[...Array(5)].map((_, i) => <Star key={i} fill="#FFB34D" color="#FFB34D" size={20} />)}
            </span>
            <span className="rating-text">Calificación promedio: ★★★★★</span>
          </div>
        </div>

        <div className="carousel-container">
          <button className="nav-btn prev" onClick={prevSlide} aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track-wrapper">
            <motion.div
              className="carousel-track"
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="review-card-wrapper"
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                >
                  <div className="review-card glass-premium">
                    <div className="card-top">
                      <div className="stars-group">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill="#FFB34D" color="#FFB34D" size={14} />
                        ))}
                      </div>
                      <span className="time-ago">{review.time}</span>
                    </div>
                    <p className="review-text">{review.text}</p>
                    <div className="card-footer">
                      <div className="user-info">
                        <span className="user-name">{review.name}</span>
                        <div className="google-badge">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="google-icon" />
                          <span>Reseña de Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="nav-btn next" onClick={nextSlide} aria-label="Siguiente">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .reviews-carousel {
          background: linear-gradient(180deg, #ffffff 0%, var(--bg-soft) 100%);
          overflow: hidden;
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .google-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }

        .rating-text {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 15px;
        }

        .carousel-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .carousel-track-wrapper {
          overflow: hidden;
          width: 100%;
          padding: 20px 0;
        }

        .carousel-track {
          display: flex;
        }

        .review-card-wrapper {
          padding: 0 12px;
        }

        .review-card {
          background: white;
          padding: 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255,255,255,0.8);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .card-top {
          margin-bottom: 16px;
        }

        .stars-group {
          display: flex;
          gap: 2px;
          margin-bottom: 4px;
        }

        .time-ago {
          font-size: 12px;
          color: var(--text-muted);
        }

        .review-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-main);
          margin-bottom: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .card-footer {
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
        }

        .user-name {
          display: block;
          font-weight: 700;
          font-size: 15px;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .google-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .google-icon {
          width: 12px;
          height: 12px;
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: white;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          cursor: pointer;
          z-index: 10;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: var(--primary);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ddd;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 24px;
          border-radius: 10px;
          background: var(--primary);
        }

        @media (max-width: 768px) {
          .nav-btn {
            display: none;
          }
          .review-card-wrapper {
            padding: 0 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
