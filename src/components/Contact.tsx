import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import Toast from './Toast';
import './Contact.css';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulamos envío de API
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      
      // Auto ocultar toast
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="contact">
      <Toast 
        message="¡Mensaje enviado! Nos contactaremos pronto." 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
      <div className="container contact-container">
        <motion.div 
          className="contact-info"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">Comienza tu Proceso</h2>
          <p className="contact-subtitle serif">Un primer paso hacia la presencia plena.</p>
          <p className="contact-text">Completa el formulario y nos pondremos en contacto contigo para agendar tu consulta o resolver cualquier duda sobre el proceso terapéutico.</p>
          
          <div className="contact-methods">
            <div className="method">
              <strong>Email:</strong> 
              <span>hola@serintegral.com</span>
            </div>
            <div className="method">
              <strong>WhatsApp:</strong> 
              <span>+52 436 107 0989</span>
            </div>
            <div className="method">
              <strong>Ubicación:</strong> 
              <span>Purépero, Michoacán</span>
            </div>
          </div>
        </motion.div>
        
        <motion.form 
          className="contact-form"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Nombre Completo</label>
            <input type="text" placeholder="Tu nombre..." required />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Teléfono</label>
              <input type="tel" placeholder="Tu teléfono..." required />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="Tu correo..." required />
            </div>
          </div>
          
          <div className="form-group">
            <label>Motivo de consulta</label>
            <textarea rows={4} placeholder="Cuéntanos brevemente qué te gustaría explorar..." required></textarea>
          </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>Enviando... <Loader2 size={18} className="animate-spin" /></>
            ) : (
              <>Quiero comenzar mi proceso <Send size={18} /></>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
