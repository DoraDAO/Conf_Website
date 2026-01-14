import { Link } from 'react-router-dom';
import './GetInvolved.css';

function GetInvolved() {
  const options = [
    {
      id: 'volunteer',
      title: 'Volunteer with Us',
      description: 'Contribute your time and skills to help build DoraDAO',
      whatYouGain: 'Experience, networking, recognition, and impact',
      whatWeGain: 'Your expertise and passion to drive our mission forward',
    },
    {
      id: 'partner',
      title: 'Become a Partner',
      description: 'Partner with DoraDAO to support innovation and access top talent',
      whatYouGain: 'Access to talent, brand visibility, innovation opportunities',
      whatWeGain: 'Resources, expertise, and expanded reach',
    },
    {
      id: 'corporate',
      title: 'Corporate Opportunities',
      description: 'Explore corporate partnerships and sponsorship opportunities',
      whatYouGain: 'Brand association, talent pipeline, innovation insights',
      whatWeGain: 'Funding, resources, and corporate expertise',
    },
    {
      id: 'donate',
      title: 'Donate / Support',
      description: 'Support DoraDAO financially to help us grow and scale',
      whatYouGain: 'Impact, recognition, tax benefits',
      whatWeGain: 'Resources to expand programs and reach',
    },
  ];

  return (
    <div className="get-involved-page">
      <section className="get-involved-hero">
        <div className="container">
          <h1>Get Involved</h1>
          <p className="hero-description">
            There are many ways to get involved with DoraDAO. Choose the path that fits your goals and interests.
          </p>
        </div>
      </section>

      <section className="involvement-options-section">
        <div className="container">
          <div className="options-grid">
            {options.map((option) => (
              <div key={option.id} className="option-card-detailed">
                <h2>{option.title}</h2>
                <p className="option-description">{option.description}</p>
                <div className="option-benefits">
                  <div className="benefit-block">
                    <h3>What You Gain</h3>
                    <p>{option.whatYouGain}</p>
                  </div>
                  <div className="benefit-block">
                    <h3>What DoraDAO Gains</h3>
                    <p>{option.whatWeGain}</p>
                  </div>
                </div>
                <Link to={`/get-involved/${option.id}`} className="btn-primary">
                  Learn More
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
