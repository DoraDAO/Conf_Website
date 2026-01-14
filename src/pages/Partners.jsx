import { Link } from 'react-router-dom';
import './Partners.css';

function Partners() {
  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="container">
          <h1>Partners</h1>
          <p className="hero-description">
            DoraDAO collaborates with leading organizations, companies, and institutions to drive 
            innovation in Web3 and support our community.
          </p>
        </div>
      </section>

      <section className="partners-content">
        <div className="container">
          <div className="partners-info">
            <h2>Why Partner with DoraDAO?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Access to Talent</h3>
                <p>Connect with top students, developers, and researchers in the Web3 space</p>
              </div>
              <div className="benefit-card">
                <h3>Innovation</h3>
                <p>Be part of cutting-edge projects and research initiatives</p>
              </div>
              <div className="benefit-card">
                <h3>Brand Visibility</h3>
                <p>Increase your brand awareness in the Web3 community</p>
              </div>
              <div className="benefit-card">
                <h3>Impact</h3>
                <p>Make a meaningful difference in education and innovation</p>
              </div>
            </div>
          </div>

          <div className="partners-cta">
            <h2>Ready to Partner?</h2>
            <p>Join us in building the future of Web3</p>
            <Link to="/get-involved/partner" className="btn-primary btn-large">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
