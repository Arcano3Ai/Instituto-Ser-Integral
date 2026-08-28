import { motion } from 'framer-motion';
import { fadeInLeft, scaleUp } from '../utils/animations';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-title">Terapia Gestalt</h1>
            <p className="hero-subtitle serif">
              Acompañamiento integral para <span className="highlight">niños, adolescentes y adultos</span>.
            </p>
            <p className="hero-description">
              En Instituto Ser Integral te acompañamos a redescubrir tus recursos internos, cerrar ciclos y vivir con mayor plenitud y consciencia desde el aquí y ahora.
            </p>
            <div className="hero-ctas">
              <a href="#contacto" className="btn-primary">Agenda una sesión</a>
              <a href="#que-son" className="btn-secondary">Explorar más</a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image-wrapper"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Consultorio Zen Instituto Ser Integral" 
              className="hero-main-img"
            />
            <div className="floating-element circle-1"></div>
            <div className="floating-element circle-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
