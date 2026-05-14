import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const CheckItem = ({ children }) => (
  <li className="check-item">
    <span className="check-mark">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
    <span>{children}</span>
  </li>
);

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  const whatsappUrl = `https://wa.me/528127711270?text=${encodeURIComponent(
    `Hola, quiero información sobre el servicio de ${service.title}`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root">
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            className="modal-window"
            role="dialog"
            aria-modal="true"
            aria-label={service.title}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            {/* Close */}
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="modal-header">
              <div
                className="modal-service-icon"
                style={{ background: service.color }}
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <div>
                <h2 className="modal-title">{service.title}</h2>
                <p className="modal-subtitle">{service.desc}</p>
              </div>
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className="modal-grid">
                <div className="modal-section">
                  <h3 className="modal-section-label">¿Qué incluye?</h3>
                  <ul className="check-list">
                    {service.details?.includes?.map((item, i) => (
                      <CheckItem key={i}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>
                <div className="modal-section">
                  <h3 className="modal-section-label">Beneficios</h3>
                  <ul className="check-list">
                    {service.details?.benefits?.map((item, i) => (
                      <CheckItem key={i}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>
              </div>

              {(service.details?.duration || service.details?.frequency) && (
                <div className="modal-meta">
                  {service.details?.duration && (
                    <div className="meta-row">
                      <span className="meta-key">Duración estimada</span>
                      <span className="meta-val">{service.details.duration}</span>
                    </div>
                  )}
                  {service.details?.frequency && (
                    <div className="meta-row">
                      <span className="meta-key">Frecuencia recomendada</span>
                      <span className="meta-val">{service.details.frequency}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="modal-actions">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-cta-btn"
                >
                  <WhatsAppIcon />
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            .modal-root {
              position: fixed;
              inset: 0;
              z-index: 3000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }

            .modal-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(19, 78, 74, 0.4);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
            }

            .modal-window {
              position: relative;
              background: white;
              width: 100%;
              max-width: 580px;
              max-height: 90vh;
              overflow-y: auto;
              border-radius: var(--radius-xl);
              box-shadow: 0 32px 80px rgba(19, 78, 74, 0.25);
              z-index: 1;
              border: 1px solid rgba(13, 148, 136, 0.1);
            }

            .modal-close {
              position: absolute;
              top: 20px;
              right: 20px;
              width: 38px;
              height: 38px;
              border-radius: 10px;
              background: var(--bg-soft);
              border: 1px solid rgba(13, 148, 136, 0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--text-muted);
              cursor: pointer;
              transition: all 0.2s ease;
              z-index: 10;
            }

            .modal-close:hover {
              background: var(--primary-light);
              color: var(--primary);
              border-color: var(--primary-light);
              transform: rotate(90deg);
            }

            .modal-header {
              display: flex;
              gap: 20px;
              align-items: flex-start;
              padding: 36px 36px 0;
            }

            .modal-service-icon {
              width: 60px;
              height: 60px;
              border-radius: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              flex-shrink: 0;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            }

            .modal-title {
              font-family: var(--font-heading);
              font-size: 26px;
              font-weight: 700;
              color: var(--text-main);
              line-height: 1.1;
              margin-bottom: 6px;
              letter-spacing: -0.01em;
            }

            .modal-subtitle {
              font-family: var(--font-body);
              font-size: 14px;
              color: var(--text-muted);
              line-height: 1.6;
            }

            .modal-body {
              padding: 28px 36px 36px;
            }

            .modal-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 28px;
              margin-bottom: 24px;
            }

            .modal-section-label {
              font-family: var(--font-body);
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              color: var(--primary);
              margin-bottom: 14px;
            }

            .check-list {
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .check-item {
              display: flex;
              align-items: flex-start;
              gap: 10px;
              font-family: var(--font-body);
              font-size: 14px;
              color: var(--text-body);
              line-height: 1.5;
            }

            .check-mark {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: var(--primary-soft);
              color: var(--primary);
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              margin-top: 1px;
              border: 1px solid var(--primary-light);
            }

            .modal-meta {
              background: var(--bg-soft);
              border-radius: var(--radius-md);
              padding: 20px 24px;
              display: flex;
              flex-direction: column;
              gap: 12px;
              margin-bottom: 24px;
              border: 1px solid rgba(13, 148, 136, 0.08);
            }

            .meta-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-family: var(--font-body);
              font-size: 14px;
            }

            .meta-key {
              color: var(--text-muted);
              font-weight: 400;
            }

            .meta-val {
              color: var(--text-main);
              font-weight: 700;
            }

            .modal-actions {
              display: flex;
              justify-content: center;
            }

            .modal-cta-btn {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 15px 36px;
              background: #25D366;
              color: white;
              border-radius: 50px;
              font-family: var(--font-body);
              font-size: 15px;
              font-weight: 700;
              transition: all 0.25s ease;
              box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
            }

            .modal-cta-btn:hover {
              background: #1ebe5d;
              transform: translateY(-2px);
              box-shadow: 0 12px 32px rgba(37, 211, 102, 0.4);
            }

            @media (max-width: 560px) {
              .modal-header { padding: 28px 24px 0; }
              .modal-body { padding: 24px 24px 28px; }
              .modal-grid { grid-template-columns: 1fr; }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
