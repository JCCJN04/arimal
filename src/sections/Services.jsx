import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Syringe, Bug, Scissors, Heart, Activity } from 'lucide-react';
import ServiceModal from '../components/ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Consulta General',
      desc: 'Evaluación exhaustiva para detectar cualquier signo temprano de enfermedad.',
      icon: <Stethoscope size={28} />,
      image: '/assets/consulta.png',
      color: 'var(--primary)',
      details: {
        includes: [
          'Revisión completa (ojos, oídos, piel, peso)',
          'Evaluación de signos vitales',
          'Detección temprana de enfermedades',
          'Recomendaciones personalizadas'
        ],
        benefits: [
          'Prevención de enfermedades graves',
          'Seguimiento del crecimiento óptimo',
          'Tranquilidad para toda la familia'
        ],
        duration: '20–30 minutos',
        frequency: 'Cada 6-12 meses'
      }
    },
    {
      title: 'Vacunación Preventiva',
      desc: 'Protocolos de inmunización personalizados según la edad y estilo de vida.',
      icon: <Syringe size={28} />,
      image: '/assets/vacunacion.png',
      color: '#2d98da',
      details: {
        includes: [
          'Esquemas según edad y especie',
          'Vacunas de alta calidad certificada',
          'Registro y seguimiento en carnet',
          'Evaluación previa'
        ],
        benefits: [
          'Protección contra virus mortales',
          'Inmunidad comunitaria',
          'Evita gastos médicos de emergencia'
        ],
        duration: '15–20 minutos',
        frequency: 'Refuerzo anual'
      }
    },
    {
      title: 'Desparasitación',
      desc: 'Control especializado contra parásitos internos y externos (pulgas y garrapatas).',
      icon: <Bug size={28} />,
      image: '/assets/desparacitacion.jpeg',
      color: '#f7b731',
      details: {
        includes: [
          'Tratamiento contra parásitos internos',
          'Control de pulgas y garrapatas',
          'Opciones orales y tópicas (pipetas)',
          'Cálculo de dosis exactas por peso'
        ],
        benefits: [
          'Hogar libre de plagas',
          'Previene enfermedades transmitidas por parásitos',
          'Salud digestiva óptima'
        ],
        duration: '10–15 minutos',
        frequency: 'Cada 3-6 meses'
      }
    },
    {
      title: 'Cirugía y Esterilización',
      desc: 'Procedimientos quirúrgicos con anestesia monitoreada y recuperación asistida.',
      icon: <Heart size={28} />,
      image: '/assets/cirugia.png',
      color: '#eb3b5a',
      details: {
        includes: [
          'Esterilización preventiva',
          'Cirugía de tejidos blandos',
          'Anestesia inhalatoria monitoreada',
          'Recuperación asistida post-op'
        ],
        benefits: [
          'Previene tumores y problemas hormonales',
          'Reduce agresividad y marcaje',
          'Control de población responsable'
        ],
        duration: '60–120 minutos',
        frequency: 'Una vez en la vida'
      }
    },
    {
      title: 'Estética Veterinaria',
      desc: 'Baño premium y corte profesional respetando el bienestar de tu mascota.',
      icon: <Scissors size={28} />,
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=2071',
      color: '#a55eea',
      details: {
        includes: [
          'Baño con productos especializados',
          'Corte de pelo profesional',
          'Limpieza de oídos profunda',
          'Corte de uñas y vaciado de glándulas'
        ],
        benefits: [
          'Piel y pelaje saludable',
          'Reducción de estrés durante el baño',
          'Detección de problemas dermatológicos'
        ],
        duration: '1.5–3 horas',
        frequency: 'Mensual'
      }
    },
    {
      title: 'Diagnóstico Avanzado',
      desc: 'Análisis clínicos y equipos modernos para diagnósticos precisos de salud.',
      icon: <Activity size={28} />,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070',
      color: '#20bf6b',
      details: {
        includes: [
          'Estudios de laboratorio completos',
          'Rayos X y Ultrasonido',
          'Equipos de alta tecnología',
          'Interpretación por especialistas'
        ],
        benefits: [
          'Resultados rápidos y precisos',
          'Tratamientos basados en evidencia',
          'Mejor manejo digestivo/cardiaco'
        ],
        duration: 'Variable según estudio',
        frequency: 'Según indicación médica'
      }
    }
  ];

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Atención integral para el bienestar de tu familia peluda
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-img" />
                <div className="service-icon-floating">
                  <div className="icon-box" style={{ backgroundColor: service.color }}>
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <div className="service-footer">
                  <button
                    className="learn-more-btn"
                    style={{ color: service.color }}
                    onClick={() => setSelectedService(service)}
                  >
                    Más información
                  </button>
                </div>
              </div>
            </motion.div>
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
          background-color: var(--bg-soft);
          position: relative;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .service-card {
          background: white;
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: var(--shadow-md);
        }

        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: var(--shadow-premium);
          border-color: rgba(var(--primary-hsl), 0.2);
        }

        .service-image-container {
          height: 240px;
          position: relative;
          overflow: hidden;
          margin: 12px;
          border-radius: calc(var(--radius-md) - 8px);
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .service-img {
          transform: scale(1.1);
        }

        .service-icon-floating {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%);
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .icon-box {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .service-content {
          padding: 24px 32px 32px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .service-card-title {
          font-size: 24px;
          margin-bottom: 16px;
          color: var(--text-main);
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .service-card-desc {
          color: var(--text-muted);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 28px;
          flex-grow: 1;
        }

        .service-footer {
          padding-top: 24px;
          border-top: 1px dashed #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .learn-more-btn {
          background: none;
          border: none;
          padding: 0;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .learn-more-btn::after {
          content: '→';
          transition: transform 0.3s ease;
        }

        .service-card:hover .learn-more-btn::after {
          transform: translateX(8px);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            max-width: 450px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
