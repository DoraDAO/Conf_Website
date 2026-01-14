import { useParams, Link } from 'react-router-dom';
import './CommunityDetail.css';

function CommunityDetail() {
  const { communityId } = useParams();

  const communityData = {
    students: {
      title: 'Student Community',
      who: 'Students at any level (undergraduate, graduate, or self-learners) interested in Web3 technologies',
      what: 'Access to learning resources, mentorship, networking opportunities, and hands-on projects',
      how: 'Join through any of our student-focused programs or apply directly to the community',
    },
    'early-career': {
      title: 'Early Career Network',
      who: 'Professionals in the first 5 years of their career looking to transition into or grow in Web3',
      what: 'Career guidance, professional networking, skill development workshops, and job opportunities',
      how: 'Apply through our early career programs or join our professional development initiatives',
    },
    builders: {
      title: 'Builders & Contributors',
      who: 'Developers, designers, and creators actively building in the Web3 space',
      what: 'Collaboration opportunities, project funding, technical resources, and recognition',
      how: 'Contribute to open-source projects or apply to join our builder programs',
    },
    regional: {
      title: 'Regional Chapters',
      who: 'Anyone looking to connect with DoraDAO members in their local area',
      what: 'Local meetups, regional events, language-specific resources, and cultural connections',
      how: 'Find your regional chapter and join local events or start a new chapter',
    },
    alumni: {
      title: 'Alumni / Past Contributors',
      who: 'Former program participants, volunteers, and contributors who want to stay connected',
      what: 'Alumni network access, continued learning opportunities, and ways to give back',
      how: 'Maintain your connection through our alumni portal and events',
    },
  };

  const data = communityData[communityId] || communityData.students;

  return (
    <div className="community-detail-page">
      <section className="community-detail-hero">
        <div className="container">
          <h1>{data.title}</h1>
        </div>
      </section>

      <div className="container">
        <section className="community-section">
          <h2>Who Belongs Here</h2>
          <p>{data.who}</p>
        </section>

        <section className="community-section">
          <h2>What They Get</h2>
          <p>{data.what}</p>
        </section>

        <section className="community-section">
          <h2>How to Join</h2>
          <p>{data.how}</p>
          <Link to="/get-involved" className="btn-primary btn-large">
            Join Now
          </Link>
        </section>
      </div>
    </div>
  );
}

export default CommunityDetail;
