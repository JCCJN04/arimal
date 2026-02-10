import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="nosotros" className="section about">
            <div className="container about-container">
                <motion.div
                    className="about-image-side"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1964" alt="Veterinaria Arimal - Trato amable" className="about-img" />
                        <div className="experience-badge">
                            <span className="exp-number">10+</span>
                            <span className="exp-text">Años de Pasión</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Nuestra Misión</h2>
                    <p className="lead-text">
                        En <strong>Veterinaria Arimal</strong> brindamos atención médica, estética y cuidado integral para perros y gatos, con un trato amable y profesional.
                    </p>
                    <p className="about-description">
                        Nuestro objetivo es ofrecer servicios de calidad a precios accesibles, priorizando el bienestar de tu mascota. Sabemos que son parte de tu familia, por eso los cuidamos como si fueran la nuestra.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-val">4.8</span>
                            <span className="stat-label">Calificación Google</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">50+</span>
                            <span className="stat-label">Opiniones reales</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-val">100%</span>
                            <span className="stat-label">Compromiso</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .about {
          background-color: var(--bg-soft);
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-image-wrapper {
          position: relative;
        }

        .about-img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .experience-badge {
          position: absolute;
          top: -20px;
          right: -20px;
          background: var(--primary);
          color: white;
          padding: 24px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 30px rgba(var(--primary-hsl), 0.3);
        }

        .exp-number {
          font-size: 32px;
          font-weight: 800;
          line-height: 1;
        }

        .exp-text {
          font-size: 12px;
          font-weight: 500;
          text-align: center;
        }

        .section-title {
          font-size: 36px;
          color: var(--primary);
          margin-bottom: 24px;
        }

        .lead-text {
          font-size: 20px;
          color: var(--text-main);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .about-description {
          color: var(--text-muted);
          margin-bottom: 40px;
        }

        .about-stats {
          display: flex;
          gap: 40px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }

        .stat-label {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        @media (max-width: 992px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-image-side {
            order: 2;
          }
          .about-content {
            order: 1;
          }
          .about-stats {
            justify-content: space-between;
            gap: 20px;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
