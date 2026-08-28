import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: "¿En qué consiste una sesión de Terapia Gestalt?",
    a: "Es un encuentro centrado en el momento presente. A través del diálogo y experimentos vivenciales, exploramos cómo te relacionas contigo mismo y con el mundo, facilitando el 'darse cuenta' de patrones que ya no te sirven."
  },
  {
    q: "¿Qué diferencia a la Gestalt de otras terapias?",
    a: "A diferencia del psicoanálisis tradicional que busca el 'por qué' en el pasado, la Gestalt se enfoca en el 'cómo' vives tu experiencia aquí y ahora, priorizando la vivencia emocional y corporal sobre la intelectualización."
  },
  {
    q: "¿Es necesario tener un problema grave para asistir?",
    a: "No. La Terapia Gestalt es también una filosofía de vida y una herramienta de crecimiento personal. Cualquier persona que desee conocerse mejor, mejorar su calidad de vida o cerrar ciclos puede beneficiarse."
  },
  {
    q: "¿Ofrecen atención presencial y online?",
    a: "Sí. Ambas modalidades son igualmente efectivas. La atención online permite la misma profundidad de encuentro y compromiso, facilitando el acceso desde cualquier lugar."
  },
  {
    q: "¿Cuánto dura un proceso terapéutico?",
    a: "La duración es variable y depende de tus objetivos personales. Algunos procesos son breves y enfocados en situaciones puntuales, mientras que otros son de mayor profundidad y acompañamiento a largo plazo."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title text-center">Preguntas Frecuentes</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${activeIndex === i ? 'active' : ''}`}>
              <button 
                className="faq-question serif" 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className="icon" size={20} />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="answer-content">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
