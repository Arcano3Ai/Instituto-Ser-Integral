import { MessageCircle, Mail, MapPin, Share2, Users } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-main">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo serif">Instituto Ser Integral</div>
          <p>Habitando el presente, integrando tu ser.</p>
          <div className="social-links">
            <a href="#" aria-label="Social"><Share2 size={20} /></a>
            <a href="#" aria-label="Comunidad"><Users size={20} /></a>
            <a href="#" aria-label="Chat"><MessageCircle size={20} /></a>
          </div>
        </div>
        
        <div className="footer-nav">
          <h4 className="serif">Navegación</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#que-son">Gestalt</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#facilitador">Sobre mí</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4 className="serif">Contacto</h4>
          <ul>
            <li><Mail size={16} /> hola@serintegral.com</li>
            <li><MessageCircle size={16} /> +52 436 107 0989</li>
            <li><MapPin size={16} /> Purépero, Michoacán</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Instituto Ser Integral. <a href="#">Aviso de Privacidad</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
