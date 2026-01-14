import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About DoraDAO</h1>
          <p className="hero-description">
            Building the future of Web3 through education, research, and innovation.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="about-section">
          <h2>Vision & Mission</h2>
          <div className="content-grid">
            <div className="content-block">
              <h3>Vision</h3>
              <p>
                To create a decentralized global ecosystem where Web3 education, research, and innovation 
                thrive, empowering individuals and communities worldwide.
              </p>
            </div>
            <div className="content-block">
              <h3>Mission</h3>
              <p>
                DoraDAO supports multiple independent programs and communities, providing infrastructure, 
                resources, and a collaborative framework for Web3 education, research, and innovation 
                across the globe.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Team & Contributors</h2>
          <p>
            DoraDAO is built and maintained by a global community of volunteers, contributors, and team members 
            who are passionate about Web3 and education. Our decentralized structure allows anyone to contribute 
            and help shape the future of the organization.
          </p>
        </section>

        <section className="about-section">
          <h2>Media & Press</h2>
          <p>
            Stay updated with the latest news, press releases, and media coverage about DoraDAO and our programs.
          </p>
          <Link to="/resources" className="btn-secondary">
            View Media Resources
          </Link>
        </section>

        <section className="about-section">
          <h2>Contact</h2>
          <p>
            Have questions or want to get in touch? Reach out to us through our contact channels.
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> contact@doradao.org</p>
            <p><strong>Discord:</strong> Join our community</p>
            <p><strong>Twitter:</strong> @DoraDAO</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
