import './Resources.css';

function Resources() {
  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="resources-hero-container">
          <div className="resources-hero-content">
            <div className="resources-hero-left">
              <span className="resources-badge">Knowledge Base v.02</span>
              <h1 className="resources-title">
                The <span className="text-primary">Resource</span><br/>Collection
              </h1>
            </div>
            <div className="resources-hero-right">
              <p className="resources-subtitle">
                An editorial library of open-source knowledge, playbooks, and strategic documentation for the next generation of digital creators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="resources-main">
        <div className="resources-main-container">
          <div className="resources-layout">
            {/* Sidebar */}
            <aside className="resources-sidebar">
              <div className="sidebar-sticky">
                <h3 className="sidebar-title">Quick Navigation</h3>
                <nav className="sidebar-nav">
                  <a href="#" className="sidebar-link">
                    <span>All Resources</span>
                    <span className="sidebar-count">24</span>
                  </a>
                  <a href="#" className="sidebar-link active">
                    <span>Documentation</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                  <a href="#" className="sidebar-link">
                    <span>Playbooks</span>
                  </a>
                  <a href="#" className="sidebar-link">
                    <span>Toolkits</span>
                  </a>
                  <a href="#" className="sidebar-link">
                    <span>Reports & Case Studies</span>
                  </a>
                  <a href="#" className="sidebar-link">
                    <span>Media & Press</span>
                  </a>
                  <a href="#" className="sidebar-link">
                    <span>Governance & DAO</span>
                  </a>
                </nav>
                <div className="sidebar-callout">
                  <p className="callout-text">Need custom assets? Contact our press office for high-res kits.</p>
                  <a href="#" className="callout-link">Get in touch</a>
                </div>
              </div>
            </aside>

            {/* Resource Cards Grid */}
            <div className="resources-grid">
              {/* Card 1: Standard Operating Documentation */}
              <div className="resource-card card-span-8">
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-icon-wrapper">
                      <span className="material-symbols-outlined card-icon">description</span>
                    </div>
                    <span className="card-updated">Updated 2 days ago</span>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Standard Operating Documentation</h4>
                    <p className="card-description">Technical specifications and foundational guides for building within the Yapper ecosystem.</p>
                  </div>
                  <div className="card-footer">
                    <button className="card-button button-amber">View Documentation</button>
                  </div>
                </div>
                <div className="card-bg-icon">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
              </div>

              {/* Card 2: Strategy Playbooks */}
              <div className="resource-card card-span-4 card-dark">
                <div className="card-icon-dark">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Strategy<br/>Playbooks</h4>
                  <p className="card-description">Step-by-step tactical guides for community management and growth.</p>
                </div>
                <div className="card-footer">
                  <button className="card-button button-primary-full">Open Library</button>
                </div>
              </div>

              {/* Card 3: Creator Toolkits */}
              <div className="resource-card card-span-4">
                <div className="card-header">
                  <span className="material-symbols-outlined card-icon-large">handyman</span>
                  <span className="card-badge">Digital Asset</span>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Creator Toolkits</h4>
                  <p className="card-description">Templates, legal forms, and creative assets to jumpstart your project.</p>
                </div>
                <div className="card-footer">
                  <button className="card-button button-amber button-with-icon">
                    <span className="material-symbols-outlined">download</span> Quick Download
                  </button>
                </div>
              </div>

              {/* Card 4: Industry Reports & Case Studies */}
              <div className="resource-card card-span-8 card-offwhite">
                <div className="card-flex">
                  <div className="card-content-left">
                    <div className="card-body">
                      <h4 className="card-title">Industry Reports<br/>& Case Studies</h4>
                      <p className="card-description">Deep dives into the successful community-led initiatives and emerging cultural trends.</p>
                    </div>
                    <div className="card-footer">
                      <button className="card-button button-charcoal">View All Reports</button>
                    </div>
                  </div>
                  <div className="card-image-right" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr5xqbIM9BJZ-XUoAPOqeNLNUyQr8ky6MhhAl5potCkUk6zHsmpj5Eqd1TwA-kJSPlaDHnRXJ-A3-9_jdD3eaTO4HGjaFiEx9hjZQJAxwerHqHwbGiRmOQLuMGUZVF-ftZrGZFaza15C64YAgKFpHmTvbSOvO3IW5DVHG7-8O0fUekf_14NNomteKGi_hRaRogMAZXeH5JncNPISrNvhM985u9jXUNE3iNnpVKOgcgfBm5-bXu9xua9i9zAoLtTBRkMrtECQgt35ax')`}}>
                    <div className="card-image-overlay"></div>
                  </div>
                </div>
              </div>

              {/* Card 5: Media & Press */}
              <div className="resource-card card-span-6 card-horizontal">
                <div className="card-icon-circle-dashed">
                  <span className="material-symbols-outlined">perm_media</span>
                </div>
                <div className="card-content-horizontal">
                  <div className="card-body">
                    <h4 className="card-title">Media & Press</h4>
                    <p className="card-description">High-resolution brand assets, photography, and press release archives.</p>
                  </div>
                  <div className="card-footer">
                    <button className="card-button button-amber">Access Kit</button>
                  </div>
                </div>
              </div>

              {/* Card 6: Governance Docs */}
              <div className="resource-card card-span-6 card-dark card-horizontal">
                <div className="card-icon-circle-dark">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div className="card-content-horizontal">
                  <div className="card-body">
                    <h4 className="card-title">Governance Docs</h4>
                    <p className="card-description">Constitution, voting protocols, and treasury management for the Yap DAO.</p>
                  </div>
                  <div className="card-footer">
                    <button className="card-button button-amber">View Docs</button>
                  </div>
                </div>
                <div className="card-bg-icon-small">
                  <span className="material-symbols-outlined">shield</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="resources-newsletter">
        <div className="newsletter-bg"></div>
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-left">
              <h2 className="newsletter-title">Stay Ahead of the Yap.</h2>
              <p className="newsletter-description">Join 5,000+ creators receiving our weekly digest of playbooks and reports.</p>
            </div>
            <div className="newsletter-right">
              <input 
                type="email" 
                placeholder="yapper@email.com" 
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
