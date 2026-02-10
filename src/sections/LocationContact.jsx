import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const LocationContact = () => {
  return (
    <section id="contacto" className="section contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title">Ubicación y Contacto</h2>
          <p className="contact-intro">Visítanos en nuestra clínica o llámanos para agendar tu cita. Estamos para servirte.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={24} />
              </div>
              <div className="contact-text">
                <h3>Dirección</h3>
                <p>Plaza Hacienda Elite, Av. Cumbres Elite 299-Loc. 106, Cumbres Elite, Sector Villas, 64349 Monterrey, N.L.</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Phone size={24} />
              </div>
              <div className="contact-text">
                <h3>Teléfono</h3>
                <a href="tel:8127711270" className="clickable-link">81 2771 1270</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Clock size={24} />
              </div>
              <div className="contact-text">
                <h3>Horario</h3>
                <p>Lunes a Sábado: Abierto hasta las 7:00 PM</p>
                <p className="status-badge">Abierto ahora</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.133034012269!2d-100.405461!3d25.7453411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866297eff6d2e08b%3A0x4f41e34395df09d9!2sVeterinaria%20Arimal!5e0!3m2!1ses-419!2smx!4v1707593600000"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '24px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Veterinaria Arimal"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background-color: var(--bg-white);
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }

        .section-title {
          font-size: 36px;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .contact-intro {
          color: var(--text-muted);
          margin-bottom: 40px;
          font-size: 18px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-item {
          display: flex;
          gap: 20px;
        }

        .contact-icon-box {
          width: 56px;
          height: 56px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-text h3 {
          font-size: 18px;
          margin-bottom: 6px;
          color: var(--text-main);
        }

        .contact-text p, .contact-text a {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.5;
        }

        .clickable-link {
          font-weight: 700;
          color: var(--primary) !important;
          font-size: 18px !important;
        }

        .status-badge {
          display: inline-block;
          margin-top: 8px;
          padding: 4px 12px;
          background: #e8f5e9;
          color: #2e7d32;
          border-radius: 50px;
          font-size: 12px !important;
          font-weight: 600;
        }

        .contact-map {
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-radius: 24px;
        }

        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default LocationContact;
