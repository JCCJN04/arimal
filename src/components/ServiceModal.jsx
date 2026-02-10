import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

const ServiceModal = ({ isOpen, onClose, service }) => {
    if (!service) return null;

    const whatsappMessage = `Hola, quiero información sobre el servicio de ${service.title}`;
    const whatsappUrl = `https://wa.me/528127711270?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay-container">
                    {/* Backdrop */}
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="modal-window"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
                            <X size={24} />
                        </button>

                        <div className="modal-body">
                            <div className="modal-header">
                                <div className="service-icon-box" style={{ backgroundColor: service.color }}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h2 className="modal-title">{service.title}</h2>
                                    <p className="modal-subtitle">{service.desc}</p>
                                </div>
                            </div>

                            <div className="modal-info-grid">
                                <div className="info-section">
                                    <h3 className="info-label">¿Qué incluye?</h3>
                                    <ul className="info-list">
                                        {service.details?.includes?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="info-section">
                                    <h3 className="info-label">Beneficios</h3>
                                    <ul className="info-list">
                                        {service.details?.benefits?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="modal-meta">
                                {service.details?.duration && (
                                    <div className="meta-item">
                                        <span className="meta-label">Duración estimada:</span>
                                        <span className="meta-value">{service.details.duration}</span>
                                    </div>
                                )}
                                {service.details?.frequency && (
                                    <div className="meta-item">
                                        <span className="meta-label">Frecuencia recomendada:</span>
                                        <span className="meta-value">{service.details.frequency}</span>
                                    </div>
                                )}
                            </div>

                            <div className="modal-actions">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-modal-wa">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor" style={{ marginRight: '10px' }}>
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.4-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                    Agendar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <style jsx>{`
            .modal-overlay-container {
              position: fixed;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2000;
              padding: 20px;
            }

            .modal-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(0, 0, 0, 0.5);
              backdrop-filter: blur(5px);
            }

            .modal-window {
              position: relative;
              background: white;
              width: 100%;
              max-width: 600px;
              border-radius: 24px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              overflow: hidden;
              z-index: 2001;
            }

            .modal-close {
              position: absolute;
              top: 20px;
              right: 20px;
              background: #f5f5f5;
              border: none;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--text-muted);
              cursor: pointer;
              transition: all 0.2s ease;
            }

            .modal-close:hover {
              background: #eee;
              color: var(--text-main);
              transform: rotate(90deg);
            }

            .modal-body {
              padding: 40px;
            }

            .modal-header {
              display: flex;
              gap: 20px;
              align-items: center;
              margin-bottom: 32px;
            }

            .service-icon-box {
              width: 64px;
              height: 64px;
              border-radius: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              flex-shrink: 0;
            }

            .modal-title {
              font-size: 28px;
              font-weight: 800;
              color: var(--text-main);
              line-height: 1.2;
              margin-bottom: 4px;
            }

            .modal-subtitle {
              color: var(--text-muted);
              font-size: 16px;
            }

            .modal-info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin-bottom: 32px;
            }

            .info-label {
              font-size: 14px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: var(--primary);
              margin-bottom: 12px;
            }

            .info-list {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .info-list li {
              font-size: 15px;
              color: var(--text-main);
              margin-bottom: 8px;
              display: flex;
              align-items: center;
              gap: 10px;
            }

            .info-list li::before {
              content: '✓';
              color: var(--primary);
              font-weight: 800;
            }

            .modal-meta {
              background: #f8faf9;
              padding: 24px;
              border-radius: 16px;
              margin-bottom: 32px;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .meta-item {
              display: flex;
              justify-content: space-between;
              font-size: 15px;
            }

            .meta-label {
              color: var(--text-muted);
              font-weight: 500;
            }

            .meta-value {
              color: var(--text-main);
              font-weight: 700;
            }

            .modal-actions {
              display: flex;
              justify-content: center;
            }

            .btn-modal-wa {
              background: #25D366;
              color: white;
              padding: 16px 36px;
              border-radius: 16px;
              font-weight: 700;
              font-size: 17px;
              display: flex;
              align-items: center;
              text-decoration: none;
              transition: all 0.3s ease;
              box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
            }

            .btn-modal-wa:hover {
              background: #1ebe5d;
              transform: translateY(-3px);
              box-shadow: 0 15px 30px rgba(37, 211, 102, 0.3);
            }

            @media (max-width: 600px) {
              .modal-info-grid {
                grid-template-columns: 1fr;
              }
              .modal-body {
                padding: 30px 24px;
              }
              .modal-title {
                font-size: 24px;
              }
            }
          `}</style>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
