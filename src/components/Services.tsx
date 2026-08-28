import { motion } from 'framer-motion';
import { UserCheck, ToyBrick, GitBranch, LayoutGrid, ArrowRight } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import './Services.css';

const services = [
  { 
    icon: <UserCheck />, 
    title: 'Psicoterapia Gestalt', 
    desc: 'Un enfoque humanista centrado en el aquí y ahora. Brindamos un espacio seguro, empático y libre de juicios para tu autoconocimiento y sanación.' 
  },
  { 
    icon: <ToyBrick />, 
    title: 'Terapia de Juego', 
    desc: 'Acompañamiento especializado para niños y adolescentes con enfoque Gestalt, utilizando el juego como lenguaje natural de sanación.' 
  },
  { 
    icon: <GitBranch />, 
    title: 'Terapia Transgeneracional', 
    desc: 'Exploración de las lealtades invisibles y patrones heredados de tu historia familiar para liberar tu presente.' 
  },
  { 
    icon: <LayoutGrid />, 
    title: 'Constelaciones Familiares', 
    desc: 'Visualización sistémica mediante miniaturas y colores para restablecer el orden del amor y la fuerza vital en tu sistema.' 
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services-header text-center">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Servicios Especializados
          </motion.h2>
          <p className="section-description mx-auto">
            Acompañamos procesos de cambio profundo con rigor clínico y calidez humana.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              className="service-card-pro"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="service-card-bg"></div>
              <div className="service-content-pro">
                <div className="service-icon-pro">{s.icon}</div>
                <h3 className="serif">{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#contacto" className="service-btn">
                  Agendar <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
