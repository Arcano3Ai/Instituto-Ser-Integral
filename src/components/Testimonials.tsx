import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { scaleUp } from '../utils/animations';
import './Testimonials.css';

const testimonials = [
  {
    text: "Fue una experiencia transformadora que me ayudó a comprender mejor mi historia familiar y soltar cargas que no me pertenecían.",
    author: "María G.",
    role: "Cliente de Sesión Individual"
  },
  {
    text: "Encontré herramientas reales para mejorar mis relaciones. El enfoque sistémico te da una claridad que otras terapias no logran.",
    author: "Ricardo M.",
    role: "Participante de Taller"
  },
  {
    text: "Un espacio de escucha, respeto y crecimiento profundo. Me sentí contenida y segura durante todo el proceso de sanación.",
    author: "Laura P.",
    role: "Cliente Online"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title text-center">Experiencias de Vida</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className="testimonial-card"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--soft-gold)" color="var(--soft-gold)" />)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <span className="author-name serif">{t.author}</span>
                <span className="author-role">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
