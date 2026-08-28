import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Timeline.css';

const steps = [
  {
    number: "01",
    title: "Escucha y Planteamiento",
    desc: "Iniciamos con una conversación tranquila donde expones el tema, síntoma o dinámica que deseas explorar."
  },
  {
    number: "02",
    title: "Exploración Sistémica",
    desc: "A través de representantes o elementos simbólicos, visualizamos la configuración actual de tu sistema familiar."
  },
  {
    number: "03",
    title: "Nuevas Perspectivas",
    desc: "Observamos los movimientos necesarios para restablecer el orden y permitir que el amor fluya de nuevo."
  },
  {
    number: "04",
    title: "Integración",
    desc: "Cerramos con una reflexión o frase sanadora que te permita asentar lo visto y llevarlo a tu vida cotidiana."
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="text-center mb-60">
          <h2 className="section-title">Tu Camino de Sanación</h2>
          <p className="section-description mx-auto">Un proceso estructurado, respetuoso y profundo en cuatro etapas clave.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="timeline-content">
                <span className="step-number serif">{step.number}</span>
                <h3 className="serif">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
