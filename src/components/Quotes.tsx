import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Quotes.css';

const quotes = [
  {
    text: "El que se queda en el pasado, se pierde el presente. El que asiente al pasado tal como fue, queda libre para el futuro.",
    author: "Bert Hellinger"
  },
  {
    text: "La paz comienza donde cada uno de nosotros puede dejar al otro ser tal como es.",
    author: "Bert Hellinger"
  },
  {
    text: "Cuando alguien encuentra su lugar, se tranquiliza. Y todos los demás también.",
    author: "Bert Hellinger"
  }
];

const Quotes: React.FC = () => {
  return (
    <section className="quotes-section">
      <div className="container">
        <div className="quotes-grid">
          {quotes.map((q, i) => (
            <motion.div 
              key={i}
              className="quote-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Quote className="quote-icon" size={40} />
              <p className="quote-text serif">{q.text}</p>
              <span className="quote-author">— {q.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
