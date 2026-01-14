import { useParams, Link } from 'react-router-dom';
import './GetInvolvedDetail.css';

function GetInvolvedDetail() {
  const { optionId } = useParams();

  const optionData = {
    volunteer: {
      title: 'Volunteer with Us',
      who: 'Anyone passionate about Web3, education, or community building who wants to contribute their time and skills',
      whatYouGain: 'Gain valuable experience, build your network, receive recognition for your contributions, and make a real impact',
      whatWeGain: 'Your expertise, passion, and dedication to help drive our mission forward and grow our programs',
      nextStep: 'Fill out our volunteer application form',
    },
    partner: {
      title: 'Become a Partner',
      who: 'Organizations, companies, or institutions interested in collaborating with DoraDAO',
      whatYouGain: 'Access to top talent, brand visibility, innovation opportunities, and a chance to shape the future of Web3',
      whatWeGain: 'Resources, expertise, expanded reach, and partnerships that help us scale our impact',
      nextStep: 'Contact our partnerships team to discuss opportunities',
    },
    corporate: {
      title: 'Corporate Opportunities',
      who: 'Corporations looking to sponsor programs, provide resources, or collaborate on initiatives',
      whatYouGain: 'Brand association with innovation, access to a talent pipeline, insights into Web3 trends, and CSR impact',
      whatWeGain: 'Funding, resources, corporate expertise, and support to expand our programs',
      nextStep: 'Reach out to explore corporate partnership options',
    },
    donate: {
      title: 'Donate / Support',
      who: 'Individuals or organizations who want to support DoraDAO financially',
      whatYouGain: 'Make a meaningful impact, receive recognition, and potentially qualify for tax benefits',
      whatWeGain: 'Resources to expand programs, reach more people, and scale our impact globally',
      nextStep: 'Make a donation through our secure platform',
    },
  };

  const data = optionData[optionId] || optionData.volunteer;

  return (
    <div className="get-involved-detail-page">
      <section className="get-involved-detail-hero">
        <div className="container">
          <h1>{data.title}</h1>
        </div>
      </section>

      <div className="container">
        <section className="involvement-section">
          <h2>Who Should Apply</h2>
          <p>{data.who}</p>
        </section>

        <section className="involvement-section">
          <h2>What You Gain</h2>
          <p>{data.whatYouGain}</p>
        </section>

        <section className="involvement-section">
          <h2>What DoraDAO Gains</h2>
          <p>{data.whatWeGain}</p>
        </section>

        <section className="involvement-section cta-section">
          <h2>Next Step</h2>
          <p>{data.nextStep}</p>
          <Link to="/get-involved" className="btn-primary btn-large">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}

export default GetInvolvedDetail;
