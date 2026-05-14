import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Alimento Medics Canino',
    category: 'Salud Nutricional',
    price: '$850',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=800',
    tag: 'Recomendado',
    tagColor: '#0D9488',
  },
  {
    name: 'Kit de Higiene Premium',
    category: 'Estética',
    price: '$420',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller',
    tagColor: '#F97316',
  },
  {
    name: 'Suplementos Vitality',
    category: 'Bienestar',
    price: '$580',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    tag: 'Nuevo',
    tagColor: '#7C3AED',
  },
  {
    name: 'Juguetes Interactivos Pro',
    category: 'Diversión',
    price: '$310',
    image: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&q=80&w=800',
    tag: 'Popular',
    tagColor: '#2563EB',
  },
];

const Products = () => {
  return (
    <section id="productos" className="section products">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Tienda</span>
          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle">
            Seleccionamos solo lo mejor para la nutrición y el cuidado de tus mascotas.
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              className="product-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  loading="lazy"
                />
                {product.tag && (
                  <span
                    className="product-tag"
                    style={{ background: product.tagColor }}
                  >
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="product-body">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button
                    className="product-add-btn"
                    aria-label={`Ver más sobre ${product.name}`}
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="products-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="btn btn-secondary">
            Ver catálogo completo
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .products {
          background: var(--bg-soft);
          position: relative;
          overflow: hidden;
        }

        .section-header { text-align: center; }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 56px;
        }

        .product-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(13, 148, 136, 0.08);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
          cursor: pointer;
        }

        .product-card:hover {
          box-shadow: var(--shadow-premium);
          border-color: rgba(13, 148, 136, 0.15);
        }

        .product-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          margin: 12px 12px 0;
          border-radius: calc(var(--radius-lg) - 8px);
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .product-card:hover .product-img {
          transform: scale(1.07);
        }

        .product-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          color: white;
          padding: 5px 12px;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .product-body {
          padding: 20px 20px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-category {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .product-name {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 20px;
          flex: 1;
          line-height: 1.2;
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-price {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .product-add-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(13, 148, 136, 0.2);
          background: var(--primary-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .product-add-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 8px 20px rgba(13, 148, 136, 0.3);
        }

        .products-cta {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1100px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Products;
