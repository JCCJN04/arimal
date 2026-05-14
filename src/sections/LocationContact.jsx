import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: <MapPin size={22} />,
    label: 'Dirección',
    content: 'Plaza Hacienda Elite, Av. Cumbres Elite 299-Loc. 106, Cumbres Elite, Sector Villas, 64349 Monterrey, N.L.',
    type: 'text',
  },
  {
    icon: <Phone size={22} />,
    label: 'Teléfono',
    content: '81 2771 1270',
    href: 'tel:8127711270',
    type: 'link',
  },
  {
    icon: <Clock size={22} />,
    label: 'Horario',
    content: 'Lunes a Sábado',
    sub: 'Abierto hasta las 7:00 PM',
    badge: 'Abierto ahora',
    type: 'hours',
  },
];

const LocationContact = () => {
  return (
    <section id="contacto" className="section contact">
      <div className="container contact-container">

        {/* Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">Visítanos</span>
          <h2 className="contact-title">Ubicación y Contacto</h2>
          <p className="contact-intro">
            Visítanos en nuestra clínica o llámanos para agendar tu cita.
            Estamos aquí para servirte.
          </p>

          <div className="contact-cards">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-card">
                <div className="contact-icon-wrap">
                  {item.icon}
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">{item.label}</span>
                  {item.type === 'link' ? (
                    <a href={item.href} className="contact-card-value contact-phone">
                      {item.content}
                    </a>
                  ) : item.type === 'hours' ? (
                    <>
                      <span className="contact-card-value">{item.content}</span>
                      <span className="contact-card-sub">{item.sub}</span>
                      <span className="open-badge">{item.badge}</span>
                    </>
                  ) : (
                    <span className="contact-card-value">{item.content}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/528127711270?text=Hola,%20quiero%20agendar%20una%20cita."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-wa-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar por WhatsApp
          </a>
        </motion.div>

        {/* Map */}
        <motion.div
          className="contact-map-wrap"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.133034012269!2d-100.405461!3d25.7453411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866297eff6d2e08b%3A0x4f41e34395df09d9!2sVeterinaria%20Arimal!5e0!3m2!1ses-419!2smx!4v1707593600000"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 0, minHeight: '460px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Veterinaria Arimal en Google Maps"
          />
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          background: var(--bg-white);
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: flex-start;
        }

        .contact-title {
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .contact-intro {
          font-family: var(--font-body);
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .contact-card {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: var(--bg-soft);
          border-radius: var(--radius-md);
          border: 1px solid rgba(13, 148, 136, 0.08);
          align-items: flex-start;
        }

        .contact-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--primary-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--primary-light);
        }

        .contact-card-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 2px;
        }

        .contact-card-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
        }

        .contact-card-value {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-body);
          line-height: 1.5;
          font-weight: 500;
        }

        .contact-phone {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: -0.01em;
        }

        .contact-phone:hover {
          color: var(--primary-dark);
        }

        .contact-card-sub {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-muted);
        }

        .open-badge {
          display: inline-block;
          margin-top: 4px;
          padding: 4px 12px;
          background: #DCFCE7;
          color: #166534;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
          width: fit-content;
        }

        .contact-wa-btn {
          font-size: 14px;
        }

        /* Map */
        .contact-map-wrap {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(13, 148, 136, 0.1);
          height: 100%;
          min-height: 480px;
        }

        @media (max-width: 1024px) {
          .contact-container { gap: 48px; }
        }

        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-map-wrap { min-height: 360px; }
        }
      `}</style>
    </section>
  );
};

export default LocationContact;
