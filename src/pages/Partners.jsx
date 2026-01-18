import { Link } from 'react-router-dom';
import './Partners.css';

function Partners() {
  const partners = [
    { 
      name: 'Coinbase', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Coinbase_Logo.png/512px-Coinbase_Logo.png' 
    },
    { 
      name: 'Google', 
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
    },
    { 
      name: 'Polytechnic University', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/New_York_University_Polytechnic_School_of_Engineering_logo.svg/512px-New_York_University_Polytechnic_School_of_Engineering_logo.svg.png' 
    },
    { 
      name: 'Binance', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/512px-Binance_logo.svg.png' 
    },
    { 
      name: 'Chainlink', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Chainlink_Logo.svg/512px-Chainlink_Logo.svg.png' 
    },
    { 
      name: 'AWS', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png' 
    },
    { 
      name: 'Berkeley', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/512px-Seal_of_University_of_California%2C_Berkeley.svg.png' 
    },
    { 
      name: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png' 
    },
    { 
      name: 'Meta', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png' 
    },
  ];

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="container">
          <h1>Trusted by global leaders in Web3 & innovation</h1>
          <p className="hero-description">
            We collaborate with leading organizations, companies, and institutions to accelerate Web3 innovation and empower communities worldwide.
          </p>
        </div>
      </section>

      <section className="partners-content">
        <div className="container">
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="partner-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="partner-logo-fallback" style={{display: 'none'}}>
                  {partner.name}
                </div>
              </div>
            ))}
          </div>

          <div className="partners-cta-button">
            <Link to="/get-involved/partner" className="partner-cta-btn">
              Partner with DoraDAO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
