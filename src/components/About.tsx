import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../utils/animations';
import draRosy from '../assets/real/dra-rosy.png';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="facilitador" className="about">
      <div className="container about-container">
        <motion.div 
          className="about-image-wrapper"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-frame">
            <img 
              src={draRosy} 
              alt="Dra. Rosy Chávez - Psicoterapeuta Gestalt" 
              className="about-img"
            />
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Años de<br/>Experiencia</span>
            </div>
          </div>
          <div className="image-decoration"></div>
        </motion.div>
        
        <motion.div 
          className="about-content-pro"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Sobre la Dra. Rosy Chávez</h2>
          <h3 className="serif subtitle-pro">Acompañando procesos de vida con calidez humana y rigor clínico.</h3>
          
          <div className="about-description">
            <p>
              Especialista en Psicoterapia Gestalt, enfocada en el acompañamiento integral de niños, adolescentes y adultos. Mi práctica se basa en un enfoque humanista centrado en el aquí y el ahora, brindando un espacio seguro, empático y libre de juicios donde mis pacientes pueden desarrollar su autoconocimiento, procesar sus emociones y descubrir herramientas de sanación.
            </p>
            <p>
              A lo largo de mi trayectoria, he combinado la calidez humana con el rigor clínico para guiar a personas de todas las edades en la superación de crisis, manejo de la ansiedad, fortalecimiento de la autoestima y mejora de sus relaciones interpersonales. Mi compromiso es facilitar procesos de cambio profundo que permitan a cada individuo vivir de manera más plena, consciente y auténtica.
            </p>
          </div>
          
          <div className="achievements-pro">
            <div className="achievement-item">
              <span className="achievement-val serif">Niños</span>
              <span className="achievement-label">Psicoterapia Infantil</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-val serif">Adolescentes</span>
              <span className="achievement-label">Acompañamiento Juvenil</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-val serif">Adultos</span>
              <span className="achievement-label">Terapia Individual</span>
            </div>
          </div>
          
          <div className="signature-wrapper">
            <div className="signature-line"></div>
            <span className="signature-name serif">Dra. Rosy Chávez</span>
            <span className="signature-title">Psicoterapeuta Gestalt Humanista</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
