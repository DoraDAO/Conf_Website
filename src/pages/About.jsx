import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <h1>
                SHAPE THE <span className="highlight-yellow">FUTURE</span> OF THE YAP.
              </h1>
              <p className="hero-description">
                Join our movement at the intersection of culture and tech. Become a part of the most influential creator-first conference for women.
              </p>
              <Link to="/programs" className="hero-cta-button">
                VIEW PATHWAYS
              </Link>
            </div>
            <div className="hero-image-content">
              <div className="hero-image-cutout"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="doradao-overview-section">
        <div className="container">
          <div className="doradao-branding">
            <h2 className="doradao-logo">
              <span className="logo-white">DORADA</span><span className="logo-yellow">O</span>
            </h2>
            <div className="branding-line">
              <span className="branding-icon">🌐</span>
              <div className="line"></div>
              <span className="branding-icon">👤</span>
            </div>
            <p className="branding-tagline">
              The bridge between curiosity and global opportunity.
              <br />
              Empowering the next generation of indian creators.
            </p>
          </div>
          
          <div className="overview-intro-box">
            <span className="material-symbols-outlined intro-icon">check_circle</span>
            <p className="intro-text">
              DoraDAO is a non-profit community on a mission to make AI and Web3 accessible, inclusive, and human, not just for hardcore tech experts, but for everyone.
            </p>
          </div>

          <div className="overview-content-grid">
            <div className="overview-column">
              <h3 className="overview-column-title">Origin story of DoraDAO</h3>
              <p className="overview-text">
                DoraDAO was born from an <span className="highlight-text">uncomfortable realization</span>: access to global opportunities—hackathons, grants, fellowships, early-stage experiments—wasn't universal. For communities in India and emerging markets, these doors often felt closed, or at least hard to find.
              </p>
              <p className="overview-text">
                We saw a missing bridge. DoraDAO became that bridge—connecting India with global opportunities, and helping global ecosystems understand and work with India in a real, grounded way.
              </p>
              <p className="overview-text">
                Opportunity should travel both ways...
              </p>
            </div>
            
            <div className="overview-column">
              <h3 className="overview-column-title">Story behind the NAME..</h3>
              <p className="overview-text">
                The name <span className="highlight-text">DoraDAO</span> is inspired by "Dora the Explorer"—a character who fearlessly asks questions, no matter how obvious, basic, or "silly" they might seem, and never worries about judgment.
              </p>
              <p className="overview-text">
                That curiosity stuck with us. That's how DoraDAO came to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="conference-overview-section">
        <div className="container">
          <div className="overview-split">
            <div className="overview-text-side">
              <h2 className="section-title">THE <span className="highlight-yellow-text">VISION</span></h2>
              <p className="overview-lead">
                Empowering the next generation of creators to turn voices into movements. We aren't just talking; we're building the future of the web.
              </p>
              <p>
                Girls Who Yap Conference is a creator-first gathering bringing together women creators from across India to connect, collaborate, and explore opportunities at the intersection of culture, community, and emerging technology.
              </p>
              <p>
                It is designed as a safe, open, and non-intimidating space where women can explore AI, Web3, and emerging platforms as tools, not barriers — tools for expression, ownership, income, visibility, and leadership.
              </p>
              <p className="emphasis-text">
                This is not a traditional tech conference. It is a launchpad for women-led ideas, conversations, and communities.
              </p>
            </div>
            <div className="overview-image-side">
              <div className="overview-image-cutout"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="about-section">
          <h2>Value Proposition</h2>
          <p>Girls Who Yap Conference enables women creators to:</p>
          <ul className="value-list">
            <li>explore emerging technology without fear or jargon</li>
            <li>turn ideas into visibility, ownership, and income</li>
            <li>host conversations and build authority</li>
            <li>connect with aligned peers, partners, and communities</li>
            <li>position themselves as leaders shaping the next generation of platforms and culture</li>
          </ul>
        </section>


        <section className="why-now-section">
          <div className="container">
            <h2 className="why-now-title">
              <span className="title-white">Why</span> <span className="title-yellow">Now?</span>
            </h2>
            <div className="stats-grid-modern">
              <div className="stat-card-modern">
                <div className="stat-number-modern">$250B+</div>
                <div className="stat-title-modern">Creator Market</div>
                <div className="stat-description-modern">The estimated global value of the creator economy in 2021.</div>
              </div>
              <div className="stat-card-modern">
                <div className="stat-number-modern">75%</div>
                <div className="stat-title-modern">Gen-Z Creators</div>
                <div className="stat-description-modern">of Gen-Z aspire to build their own creative digital businesses.</div>
              </div>
              <div className="stat-card-modern">
                <div className="stat-number-modern">90%</div>
                <div className="stat-title-modern">Mobile First</div>
                <div className="stat-description-modern">of Gen-Z creator growth is driven by mobile-first consumption.</div>
              </div>
              <div className="stat-card-modern">
                <div className="stat-number-modern">2×</div>
                <div className="stat-title-modern">Growth Rate</div>
                <div className="stat-description-modern">Twice the growth rate of traditional media in Southeast Asia.</div>
              </div>
            </div>
            <p className="why-now-text">
              Girls Who Yap fills this gap with community, tools, access, and vibe — not gatekeeping.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Who the Conference Is For</h2>
          <div className="audience-grid">
            <div className="audience-item">Women creators and storytellers</div>
            <div className="audience-item">Early-career professionals</div>
            <div className="audience-item">Founders and aspiring founders</div>
            <div className="audience-item">Artists and cultural builders</div>
            <div className="audience-item">Community builders and organizers</div>
            <div className="audience-item">Women intentionally building a personal brand</div>
          </div>
          <p className="no-tech-required">
            <strong>No prior tech background required.</strong>
          </p>
        </section>

        <section className="about-section">
          <h2>Conference Format</h2>
          <div className="format-grid">
            <div className="format-item">
              <span className="material-symbols-outlined">mic</span>
              <span>Talks & panels</span>
            </div>
            <div className="format-item">
              <span className="material-symbols-outlined">forum</span>
              <span>Community-led conversations</span>
            </div>
            <div className="format-item">
              <span className="material-symbols-outlined">star</span>
              <span>Creator spotlights</span>
            </div>
            <div className="format-item">
              <span className="material-symbols-outlined">groups</span>
              <span>Networking & collaboration spaces</span>
            </div>
            <div className="format-item">
              <span className="material-symbols-outlined">explore</span>
              <span>Ecosystem exposure (platforms, tools, partners)</span>
            </div>
          </div>
          <p className="format-note">
            The experience prioritizes participation over performance.
          </p>
        </section>

        <section className="about-section">
          <h2>Key Event Information</h2>
          <div className="event-info-grid">
            <div className="info-item">
              <strong>Event Name:</strong> Girls Who Yap Conference
            </div>
            <div className="info-item">
              <strong>Tentative Date:</strong> 28th February, 2026
            </div>
            <div className="info-item">
              <strong>Location:</strong> India
            </div>
            <div className="info-item">
              <strong>Venue:</strong> To Be Announced
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Applications & Important Dates</h2>
          <p className="dates-note">(All dates subject to confirmation)</p>
          <div className="dates-list">
            <div className="date-item">
              <strong>Speaker Applications:</strong> 5th January
            </div>
            <div className="date-item">
              <strong>Institute / Alliance Partnerships:</strong> 7th January
            </div>
            <div className="date-item">
              <strong>Girls Who Yap Conference Applications:</strong> 10th January
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Community & Impact</h2>
          <p className="impact-subtitle">Powered by DoraDAO</p>
          <div className="impact-grid">
            <div className="impact-item">
              <strong>2000+</strong> creators and builders in the ecosystem
            </div>
            <div className="impact-item">
              <strong>Presence</strong> across Tier 1 & Tier 2 Indian cities
            </div>
            <div className="impact-item">
              <strong>Strong global exposure</strong> through hackathons, fellowships, and partnerships
            </div>
            <div className="impact-item">
              <strong>Community-led initiatives</strong> spanning AI, Web3, culture, and open innovation
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>How to Get Involved</h2>
          <div className="involvement-grid">
            <div className="involvement-item">Attend the conference</div>
            <div className="involvement-item">Volunteer with DoraDAO</div>
            <div className="involvement-item">Partner or sponsor the event</div>
            <div className="involvement-item">Join the broader DoraDAO community</div>
          </div>
        </section>

        <section className="about-section">
          <h2>Sponsorship & Partnerships</h2>
          <p>
            For sponsorship and partnership opportunities, reach out at:
          </p>
          <div className="contact-info">
            <p><strong>📩 Email:</strong> <a href="mailto:connectdoradao@gmail.com">connectdoradao@gmail.com</a></p>
          </div>
        </section>

        <section className="about-section">
          <h2>Official Community Links</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/doradao/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://x.com/connectdoradao" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter / X
            </a>
            <a href="https://www.instagram.com/connectdoradao/" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
            <a href="https://discord.gg/CRaEtrtZ2v" target="_blank" rel="noopener noreferrer" className="social-link">
              Discord
            </a>
            <a href="https://luma.com/connectdoradao" target="_blank" rel="noopener noreferrer" className="social-link">
              Luma
            </a>
          </div>
        </section>
      </div>

      {/* Our Reach Section */}
      <section className="our-reach-section">
        <div className="container">
          <h2 className="reach-title">Our Reach</h2>
          
          <div className="reach-content">
            <div className="world-map-container">
              <div className="map-image-wrapper">
                <img 
                  src="https://www.notion.so/image/attachment%3Aca1f0355-6603-4b0b-b5b3-0cb00715372b%3AGWY_CONF_INDIA.png?table=block&id=2ded8cf9-6e75-8008-8cac-ca870b1f92cc&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=2000&userId=&cache=v2"
                  alt="Our Reach - Global Presence Map"
                  className="reach-map-image"
                />
                <div className="map-overlay"></div>
                <div className="map-shine"></div>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="reach-stats">
              <div className="reach-stat stat-left-top">
                <span className="stat-icon stat-icon-green">✦</span>
                <div className="stat-content">
                  <span className="stat-label">Total Reach</span>
                  <span className="stat-value">2M+</span>
                </div>
              </div>
              
              <div className="reach-stat stat-left-bottom">
                <span className="stat-icon stat-icon-yellow">✦</span>
                <div className="stat-content">
                  <span className="stat-label">Community Size</span>
                  <span className="stat-value">40,000+</span>
                </div>
              </div>
              
              <div className="reach-stat stat-right-top">
                <span className="stat-icon stat-icon-pink">✦</span>
                <div className="stat-content">
                  <span className="stat-label">Institutions Partners</span>
                  <span className="stat-value">280+ global</span>
                </div>
              </div>
              
              <div className="reach-stat stat-right-bottom">
                <span className="stat-icon stat-icon-purple">✦</span>
                <div className="stat-content">
                  <span className="stat-label">Operating in</span>
                  <span className="stat-value">15+ countries and 20+ languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
