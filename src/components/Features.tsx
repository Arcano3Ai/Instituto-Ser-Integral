import { motion } from 'framer-motion';
import { Users, Heart, TreeDeciduous, Sparkles, Sprout, MessageCircle } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import './Features.css';

const benefits = [
  { icon: <Users />, title: 'Presencia Plena', text: 'Desarrolla la capacidad de estar presente en el aquí y ahora con consciencia total.' },
  { icon: <Sprout />, title: 'El Darse Cuenta', text: 'Amplía tu percepción para reconocer tus necesidades y patrones automáticos.' },
  { icon: <Sparkles />, title: 'Cierre de Ciclos', text: 'Resuelve situaciones inconclusas que limitan tu energía y vitalidad en el presente.' },
  { icon: <TreeDeciduous />, title: 'Auto-Responsabilidad', text: 'Recupera el poder de elegir y actuar desde tu autenticidad e integridad.' },
  { icon: <MessageCircle />, title: 'Acompañamiento Humano', text: 'Un espacio de encuentro genuino, sin juicios, centrado en tu experiencia.' },
  { icon: <Heart />, title: 'Integración del Ser', text: 'Unifica tus pensamientos, emociones y acciones en una gestalt armoniosa.' }
];

const Features: React.FC = () => {
  return (
    <section id="que-son" className="features">
      <div className="container">
        <div className="features-header">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            El Enfoque Gestalt
          </motion.h2>
          <p className="section-description">
            La Terapia Gestalt permite desarrollar el "darse cuenta" y la responsabilidad personal, facilitando que la persona recupere su espontaneidad y vitalidad.
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <motion.div 
              key={i} 
              className="benefit-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="benefit-icon-wrapper">
                {b.icon}
              </div>
              <h3 className="benefit-title serif">{b.title}</h3>
              <p className="benefit-text">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
