import { motion } from 'framer-motion';
import { Mail, Gift } from 'lucide-react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <motion.div 
          className="newsletter-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="newsletter-content">
            <div className="gift-icon-box">
              <Gift size={32} />
            </div>
            <h2 className="serif">Recibe Sabiduría Sistémica</h2>
            <p>Suscríbete y descarga gratis nuestra guía: <strong>"Los 3 Secretos del Orden Familiar"</strong>.</p>
            
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Tu correo electrónico" required />
              <button type="submit" className="newsletter-btn">
                Quiero la guía <Mail size={18} />
              </button>
            </form>
            <p className="privacy-note">Respetamos tu privacidad. Sin spam, solo sanación.</p>
          </div>
          <div className="newsletter-decoration"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
