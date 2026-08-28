import { motion } from 'framer-motion';
import { Eye, Hand, RefreshCw } from 'lucide-react';
import { fadeInLeft, fadeInUp } from '../utils/animations';
import terapiaImg from '../assets/real/terapia.png';
import './Philosophy.css';

const concepts = [
  {
    icon: <Eye />,
    title: "Darse Cuenta",
    desc: "El proceso de tomar consciencia de lo que ocurre en el campo, tanto interna como externamente, en el momento presente."
  },
  {
    icon: <Hand />,
    title: "Contacto",
    desc: "La frontera entre el 'yo' y el 'otro' donde ocurre la experiencia, el crecimiento y la nutrición emocional."
  },
  {
    icon: <RefreshCw />,
    title: "Cierre de Ciclos",
    desc: "Completar 'asuntos inconclusos' del pasado para liberar energía y permitir que nuevas figuras emerjan en tu vida."
  }
];

const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="philosophy-section">
      <div className="container">
        <div className="philosophy-grid">
          <motion.div 
            className="philosophy-text"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nuestra Filosofía</h2>
            <h3 className="serif subtitle-holistic">Un camino hacia la integridad y la consciencia.</h3>
            <div className="philosophy-image-box">
              <img 
                src={terapiaImg} 
                alt="Sesión de Terapia Gestalt y Constelaciones" 
                className="philosophy-img"
              />
            </div>
            <p className="description-holistic">
              En Instituto Ser Integral nos basamos en los principios de la Terapia Gestalt y el Humanismo. 
              Creemos que cada persona tiene la capacidad intrínseca de regularse y sanar cuando se le brinda 
              el espacio adecuado para ser y expresarse.
            </p>
            <p className="description-holistic">
              Nuestra labor es acompañarte a restaurar tu equilibrio, fomentando la responsabilidad sobre tu 
              propia vida y la integración de todas las partes de tu ser.
            </p>
          </motion.div>

          <div className="orders-cards">
            {concepts.map((concept, i) => (
              <motion.div 
                key={i}
                className="order-card"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="order-icon-box">{concept.icon}</div>
                <div className="order-info">
                  <h4 className="serif">{concept.title}</h4>
                  <p>{concept.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Geometría Sagrada de Fondo */}
      <div className="sacred-geometry">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.05" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.05" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.05" />
        </svg>
      </div>
    </section>
  );
};

export default Philosophy;
