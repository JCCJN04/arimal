import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Syringe, Bug, Scissors, Heart, Activity } from 'lucide-react';
import ServiceModal from '../components/ServiceModal';

const services = [
  {
    title: 'Consulta General',
    desc: 'Evaluación exhaustiva para detectar cualquier signo temprano de enfermedad.',
    icon: <Stethoscope size={24} />,
    image: '/assets/consulta.png',
    color: '#0D9488',
    details: {
      includes: [
        'Revisión completa (ojos, oídos, piel, peso)',
        'Evaluación de signos vitales',
        'Detección temprana de enfermedades',
        'Recomendaciones personalizadas',
      ],
      benefits: [
        'Prevención de enfermedades graves',
        'Seguimiento del crecimiento óptimo',
        'Tranquilidad para toda la familia',
      ],
      duration: '20–30 minutos',
      frequency: 'Cada 6–12 meses',
    },
  },
  {
    title: 'Vacunación Preventiva',
    desc: 'Protocolos de inmunización personalizados según la edad y estilo de vida.',
    icon: <Syringe size={24} />,
    image: '/assets/vacunacion.png',
    color: '#2563EB',
    details: {
      includes: [
        'Esquemas según edad y especie',
        'Vacunas de alta calidad certificada',
        'Registro y seguimiento en carnet',
        'Evaluación previa',
      ],
      benefits: [
        'Protección contra virus mortales',
        'Inmunidad comunitaria',
        'Evita gastos médicos de emergencia',
      ],
      duration: '15–20 minutos',
      frequency: 'Refuerzo anual',
    },
  },
  {
    title: 'Desparasitación',
    desc: 'Control especializado contra parásitos internos y externos (pulgas y garrapatas).',
    icon: <Bug size={24} />,
    image: '/assets/desparacitacion.jpeg',
    color: '#D97706',
    details: {
      includes: [
        'Tratamiento contra parásitos internos',
        'Control de pulgas y garrapatas',
        'Opciones orales y tópicas (pipetas)',
        'Cálculo de dosis exactas por peso',
      ],
      benefits: [
        'Hogar libre de plagas',
        'Previene enfermedades transmitidas por parásitos',
        'Salud digestiva óptima',
      ],
      duration: '10–15 minutos',
      frequency: 'Cada 3–6 meses',
    },
  },
  {
    title: 'Cirugía y Esterilización',
    desc: 'Procedimientos quirúrgicos con anestesia monitoreada y recuperación asistida.',
    icon: <Heart size={24} />,
    image: '/assets/cirugia.png',
    color: '#DC2626',
    details: {
      includes: [
        'Esterilización preventiva',
        'Cirugía de tejidos blandos',
        'Anestesia inhalatoria monitoreada',
        'Recuperación asistida post-op',
      ],
      benefits: [
        'Previene tumores y problemas hormonales',
        'Reduce agresividad y marcaje',
        'Control de población responsable',
      ],
      duration: '60–120 minutos',
      frequency: 'Una vez en la vida',
    },
  },
  {
    title: 'Estética Veterinaria',
    desc: 'Baño premium y corte profesional respetando el bienestar de tu mascota.',
    icon: <Scissors size={24} />,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    color: '#7C3AED',
    details: {
      includes: [
        'Baño con productos especializados',
        'Corte de pelo profesional',
        'Limpieza de oídos profunda',
        'Corte de uñas y vaciado de glándulas',
      ],
      benefits: [
        'Piel y pelaje saludable',
        'Reducción de estrés durante el baño',
        'Detección de problemas dermatológicos',
      ],
      duration: '1.5–3 horas',
      frequency: 'Mensual',
    },
  },
  {
    title: 'Diagnóstico Avanzado',
    desc: 'Análisis clínicos y equipos modernos para diagnósticos precisos de salud.',
    icon: <Activity size={24} />,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    color: '#059669',
    details: {
      includes: [
        'Estudios de laboratorio completos',
        'Rayos X y Ultrasonido',
        'Equipos de alta tecnología',
        'Interpretación por especialistas',
      ],
      benefits: [
        'Resultados rápidos y precisos',
        'Tratamientos basados en evidencia',
        'Mejor manejo digestivo/cardiaco',
      ],
      duration: 'Variable según estudio',
      frequency: 'Según indicación médica',
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Lo que ofrecemos</span>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Atención integral para el bienestar de tu familia peluda
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={index}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            >
              <div className="card-image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img"
                  loading="lazy"
                />
                <div className="card-img-overlay" aria-hidden="true" />
                <div
                  className="card-icon"
                  style={{ background: service.color }}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
                <button
                  className="card-cta"
                  style={{ color: service.color }}
                  onClick={() => setSelectedService(service)}
                  aria-label={`Ver más sobre ${service.title}`}
                >
                  Más información
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />

      <style jsx>{`
        .services {
          background: var(--bg-white);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .service-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(13, 148, 136, 0.08);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
          cursor: default;
        }

        .service-card:hover {
          box-shadow: var(--shadow-premium);
          border-color: rgba(13, 148, 136, 0.16);
        }

        .card-image-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
          margin: 12px 12px 0;
          border-radius: calc(var(--radius-lg) - 8px);
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-card:hover .card-img {
          transform: scale(1.07);
        }

        .card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(19, 78, 74, 0.55) 0%,
            transparent 45%
          );
        }

        .card-icon {
          position: absolute;
          bottom: 16px;
          left: 16px;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(4px);
        }

        .card-body {
          padding: 24px 24px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .card-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 20px;
        }

        .card-cta {
          background: none;
          border: none;
          padding: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          cursor: pointer;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 16px;
          transition: gap 0.25s ease;
        }

        .card-cta:hover {
          gap: 10px;
        }

        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Services;
