import { useParams, Link } from 'react-router-dom';
import './ProgramDetail.css';

function ProgramDetail() {
  const { programId } = useParams();
  const programNumber = programId?.replace('program-', '') || '1';

  // In a real app, this would fetch from an API
  const programData = {
    name: `Program ${programNumber}`,
    description: `This is a detailed description of Program ${programNumber}. It provides comprehensive information about what the program offers, its goals, and how it contributes to the DoraDAO ecosystem.`,
    why: `Program ${programNumber} exists to address specific needs in the Web3 ecosystem and provide value to its target audience.`,
    targetAudience: 'Students, Developers, Researchers',
    experienceLevel: 'Beginner to Advanced',
    format: 'Hybrid (Online + Offline events)',
    duration: '6-month cohorts',
    communitySize: '500+ active members',
    regions: 'Global (50+ countries)',
    growthStage: 'Scaling',
  };

  return (
    <div className="program-detail-page">
      <section className="program-detail-hero">
        <div className="container">
          <h1>{programData.name}</h1>
          <p className="program-tagline">{programData.description}</p>
        </div>
      </section>

      <div className="container">
        {/* Program Overview */}
        <section className="program-section">
          <h2>Program Overview</h2>
          <div className="content-block">
            <h3>What This Program Is</h3>
            <p>{programData.description}</p>
          </div>
          <div className="content-block">
            <h3>Why It Exists</h3>
            <p>{programData.why}</p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="program-section">
          <h2>Who It's For</h2>
          <div className="content-block">
            <h3>Target Audience</h3>
            <p>{programData.targetAudience}</p>
          </div>
          <div className="content-block">
            <h3>Entry Level / Experience Level</h3>
            <p>{programData.experienceLevel}</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="program-section">
          <h2>How It Works</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Format</h3>
              <p>{programData.format}</p>
            </div>
            <div className="info-card">
              <h3>Duration / Cycles</h3>
              <p>{programData.duration}</p>
            </div>
          </div>
        </section>

        {/* Community Size & Geography */}
        <section className="program-section">
          <h2>Community Size & Geography</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Regions Active</h3>
              <p>{programData.regions}</p>
            </div>
            <div className="info-card">
              <h3>Community Size</h3>
              <p>{programData.communitySize}</p>
            </div>
            <div className="info-card">
              <h3>Growth Stage</h3>
              <p>{programData.growthStage}</p>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="program-section">
          <h2>Opportunities Inside the Program</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <h3>Learning</h3>
              <p>Access to curated resources, workshops, and mentorship opportunities</p>
            </div>
            <div className="opportunity-card">
              <h3>Leadership</h3>
              <p>Take on leadership roles and help shape the program's direction</p>
            </div>
            <div className="opportunity-card">
              <h3>Contributions</h3>
              <p>Contribute to open-source projects and real-world initiatives</p>
            </div>
            <div className="opportunity-card">
              <h3>Recognition</h3>
              <p>Get recognized for your contributions and achievements</p>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="program-section">
          <h2>How to Join</h2>
          <div className="content-block">
            <p>Ready to join {programData.name}? Follow these steps:</p>
            <ol className="join-steps">
              <li>Review the program requirements and ensure you meet the criteria</li>
              <li>Complete the application form</li>
              <li>Attend an orientation session</li>
              <li>Start your journey with the program</li>
            </ol>
            <Link to="/get-involved" className="btn-primary btn-large">
              Apply Now
            </Link>
          </div>
        </section>

        {/* Program-Specific Resources */}
        <section className="program-section">
          <h2>Program-Specific Resources</h2>
          <div className="resources-links">
            <Link to="/resources" className="resource-link">
              <h3>Documentation</h3>
              <p>Comprehensive guides and documentation</p>
            </Link>
            <Link to="/resources" className="resource-link">
              <h3>Toolkits</h3>
              <p>Tools and resources to get started</p>
            </Link>
            <Link to="/resources" className="resource-link">
              <h3>Case Studies</h3>
              <p>Learn from past participants and projects</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProgramDetail;
