import { Link } from 'react-router-dom';
import './GetInvolved.css';

function GetInvolved() {
  const options = [
    {
      id: 'volunteer',
      title: 'Volunteer with Us',
      icon: '❤️',
      description: 'Contribute your time and skills to help build DoraDAO',
      benefits: [
        'Gain hands-on experience',
        'Connect with a passionate community'
      ],
      buttonText: 'Learn More',
    },
    {
      id: 'partner',
      title: 'Become a Partner',
      icon: '🤝',
      description: 'Partner with DoraDAO to support innovation and access top talent',
      benefits: [
        'Access top talent and resources',
        'Enhance your brand visibility'
      ],
      buttonText: 'Partner with Us',
    },
    {
      id: 'corporate',
      title: 'Corporate Opportunities',
      icon: '💼',
      description: 'Explore corporate partnerships and sponsorship opportunities',
      benefits: [
        'Customized partnership solutions',
        'Reach a global Web3 ecosystem'
      ],
      buttonText: 'Explore Options',
    },
  ];

  return (
    <div className="get-involved-page">
      <section className="get-involved-hero">
        <div className="container">
          <h1>Get Involved</h1>
          <p className="hero-description">
            Choose the path that fits your goals and interests.
          </p>
        </div>
      </section>

      <section className="involvement-options-section">
        <div className="container">
          <div className="options-grid">
            {options.map((option) => (
              <div key={option.id} className="option-card-detailed">
                <div className="option-icon-wrapper">
                  <div className={`option-icon option-icon-${option.id}`}>
                    {option.icon}
                  </div>
                </div>
                <h2>{option.title}</h2>
                <p className="option-description">{option.description}</p>
                <div className="option-benefits">
                  <h3 className="benefits-title">What You Gain</h3>
                  <ul className="benefits-list">
                    {option.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <span className="checkmark">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={`/get-involved/${option.id}`} className="option-cta-button">
                  <span>{option.buttonText}</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInvolved;
