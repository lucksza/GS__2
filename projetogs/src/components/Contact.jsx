import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact">
      <h2>Contato</h2>
      <p>Entre em contato conosco através das redes sociais:</p>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/FFD700/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/FFD700/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/FFD700/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in  " target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/FFD700/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
