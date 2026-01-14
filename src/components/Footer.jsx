import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <h2 className="footer-logo-text">Girls Who Yap</h2>
          </div>
          <p className="footer-mission">
            The 2026 conference is just the beginning. Join the movement and help us shape the future of culture and tech.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Share">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="social-icon" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="social-icon" aria-label="Email">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
        
        <div className="footer-columns">
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/resources">Speaker FAQ</Link></li>
              <li><Link to="/resources">Community Guidelines</Link></li>
              <li><Link to="/about">DoraDAO Governance</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Conference</h4>
            <ul>
              <li><Link to="/about">March 12-15, 2026</Link></li>
              <li><Link to="/about">Los Angeles, CA</Link></li>
              <li><Link to="/get-involved">Get Tickets</Link></li>
              <li><Link to="/partners">Sponsorships</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Girls Who Yap. Powered by DoraDAO.</p>
        <div className="footer-links">
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
