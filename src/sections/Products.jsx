import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Alimento Medics Canino',
      category: 'Salud Nutricional',
      price: '$850',
      image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=2070',
      tag: 'Recomendado'
    },
    {
      name: 'Kit de Higiene Premium',
      category: 'Estética',
      price: '$420',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=2071',
      tag: 'Best Seller'
    },
    {
      name: 'Suplementos Vitality',
      category: 'Bienestar',
      price: '$580',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2030',
      tag: 'Nuevo'
    },
    {
      name: 'Juguetes Interactivos Pro',
      category: 'Diversión',
      price: '$310',
      image: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&q=80&w=2070',
      tag: 'Popular'
    }
  ];

  return (
    <section id="productos" className="section products">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nuestros Productos
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Seleccionamos solo lo mejor para la nutrición y el cuidado de tus mascotas.
          </motion.p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.tag && <span className="product-tag">{product.tag}</span>}
              </div>
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn-icon-round" aria-label="Ver más">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="products-cta">
          <button className="btn btn-secondary">
            Ver catálogo completo <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .products {
          background-color: var(--bg-soft);
          overflow: hidden;
          position: relative;
        }

        .products::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-hsl), 0.1), transparent);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }

        .product-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.6);
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(255, 255, 255, 0.4);
        }

        .product-card:hover {
          transform: translateY(-12px);
          box-shadow: var(--shadow-premium);
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(var(--primary-hsl), 0.2);
        }

        .product-image-container {
          height: 260px;
          position: relative;
          overflow: hidden;
          margin: 12px;
          border-radius: calc(var(--radius-md) - 8px);
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        .product-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--primary);
          color: white;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(var(--primary-hsl), 0.3);
          z-index: 2;
        }

        .product-content {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-category {
          display: block;
          font-size: 11px;
          color: var(--primary);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .product-name {
          font-size: 22px;
          margin-bottom: 24px;
          color: var(--text-main);
          line-height: 1.3;
          font-weight: 700;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .product-price {
          font-size: 24px;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .btn-icon-round {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-white);
          border: 1px solid #ebebeb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-sm);
        }

        .btn-icon-round:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: rotate(15deg) scale(1.1);
          box-shadow: 0 10px 20px rgba(var(--primary-hsl), 0.2);
        }

        .products-cta {
          display: flex;
          justify-content: center;
          padding-top: 20px;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .product-card {
            margin: 0 auto;
            max-width: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
