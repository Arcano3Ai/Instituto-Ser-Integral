import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a 
      href="https://wa.me/524361070989" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="pulse-animation"></div>
      <MessageCircle size={30} />
      <span className="tooltip">¿Tienes dudas? Escríbenos</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
