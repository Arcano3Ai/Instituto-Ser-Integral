import { motion } from 'framer-motion';
import { BookOpen, PlayCircle, Heart } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import './Resources.css';

const articles = [
  {
    category: "Psicología",
    icon: <BookOpen size={18} />,
    title: "El lenguaje de los síntomas",
    desc: "Cómo el cuerpo expresa lealtades invisibles a nuestro sistema familiar.",
    img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "Meditación",
    icon: <PlayCircle size={18} />,
    title: "Honrar a los ancestros",
    desc: "Una meditación guiada para tomar la fuerza de los que llegaron antes.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "Vínculos",
    icon: <Heart size={18} />,
    title: "El equilibrio entre hermanos",
    desc: "Entendiendo el lugar que ocupamos según nuestro orden de llegada.",
    img: "https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?auto=format&fit=crop&q=80&w=600"
  }
];

const Resources: React.FC = () => {
  return (
    <section id="recursos" className="resources-section">
      <div className="container">
        <div className="resources-header text-center">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Recursos y Sabiduría
          </motion.h2>
          <p className="section-description mx-auto">
            Explora nuestra biblioteca de artículos y herramientas para profundizar en tu proceso personal.
          </p>
        </div>

        <div className="resources-grid">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              className="resource-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="resource-img-container">
                <img src={article.img} alt={article.title} />
                <div className="category-tag">
                  {article.icon}
                  <span>{article.category}</span>
                </div>
              </div>
              <div className="resource-body">
                <h3 className="serif">{article.title}</h3>
                <p>{article.desc}</p>
                <button className="read-more">Leer reflexión</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
