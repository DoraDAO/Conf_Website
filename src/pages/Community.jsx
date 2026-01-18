import './Community.css';

function Community() {
  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="community-hero">
        <div className="community-hero-container">
          <div className="community-hero-bg-text">COMMUNITY</div>
          <div className="community-hero-content">
            <h1 className="community-title">
              <span className="community-title-line1">Empowering</span> <span className="community-title-script">Community</span>
              <br/>
              <span className="community-title-line2">Enabling</span> <span className="community-title-script-alt">Connection</span>
            </h1>
            <p className="community-description">
              A cohesive ecosystem designed to support your journey from campus to career, creation, and beyond.
            </p>
          </div>
          <a href="#groups-overview" className="community-hero-cta-circle">
            <svg className="circle-text" viewBox="0 0 200 200" width="200" height="200">
              <defs>
                <path id="circle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text fill="#171612" fontSize="12" fontFamily="Epilogue, sans-serif" fontWeight="700">
                <textPath href="#circle" startOffset="0%">
                  Discover Your Circle • Discover Your Circle • 
                </textPath>
              </text>
            </svg>
            <div className="circle-arrow">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </a>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="community-marquee" id="groups-overview">
        <div className="marquee-container">
          <div className="marquee-content">
            <span>Student Community</span>
            <span className="marquee-dot">•</span>
            <span>Early Career Network</span>
            <span className="marquee-dot">•</span>
            <span>Builders & Contributors</span>
            <span className="marquee-dot">•</span>
            <span>Regional Chapters</span>
            <span className="marquee-dot">•</span>
            <span>Alumni Legacy</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span>Student Community</span>
            <span className="marquee-dot">•</span>
            <span>Early Career Network</span>
            <span className="marquee-dot">•</span>
            <span>Builders & Contributors</span>
            <span className="marquee-dot">•</span>
            <span>Regional Chapters</span>
            <span className="marquee-dot">•</span>
            <span>Alumni Legacy</span>
          </div>
        </div>
      </section>

      {/* Student Community Section */}
      <section className="community-section" id="students">
        <div className="section-container">
          <div className="section-grid">
            <div className="section-content">
              <span className="section-number">01. Academic Squads</span>
              <h2 className="section-title">Student <br/>Community</h2>
              <p className="section-description">
                Connect with peers, find your study squad, and bridge the gap between campus and the real world.
              </p>
              <div className="section-info-grid">
                <div className="info-item">
                  <h4 className="info-label">Who belongs</h4>
                  <p className="info-text">Current university students & recent high school grads.</p>
                </div>
                <div className="info-item">
                  <h4 className="info-label">What they get</h4>
                  <p className="info-text">Study pods, internship pipelines, campus perks.</p>
                </div>
                <div className="info-item">
                  <h4 className="info-label">How to join</h4>
                  <p className="info-text">Verify your .edu email and join our discord.</p>
                </div>
              </div>
              <button className="section-button button-primary">Join Student Community</button>
            </div>
            <div className="section-image">
              <div className="image-wrapper image-rotate">
                <div className="image-overlay"></div>
                <div className="image-bg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWZnXhQvEfB7ThPSE8ypDTVO_FO6xNr-KlbNmzWtLdrOs73ENj8bM4UpCjw434oi-mu2rtvCk6AiwrTPKfUrKBBAey2vuohA5u5IVE-AVqnjgTaMMzpKo74GvgiifpzUo9N8jSs_fuX9Z2f7i5ncaR5_lEoizUfmUH2DmjZPyUqxABpPvNvvjGEqNmKhcxVBqV73Sirs5-CAYQJXS9RiIzxrn8jfTovm6ARm4rx-Y9FOKFCU_uRdRHHGDE5yU7I4lFJ2v8KlbRc4r0')`}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Career Network Section */}
      <section className="community-section section-career" id="career">
        <div className="section-container">
          <div className="section-grid section-grid-reverse">
            <div className="section-content">
              <span className="section-number">02. Career Launch</span>
              <h2 className="section-title">Early Career <br/>Network</h2>
              <p className="section-description">
                Navigating the first 4 years of the corporate or creative maze together.
              </p>
              <div className="section-info-list">
                <div className="info-item-row">
                  <div className="info-icon">
                    <span className="material-symbols-outlined">person_search</span>
                  </div>
                  <div>
                    <h4 className="info-label-row">Who belongs here</h4>
                    <p className="info-text-row">New grads and young professionals (1-4 years exp).</p>
                  </div>
                </div>
                <div className="info-item-row">
                  <div className="info-icon">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 className="info-label-row">What they get</h4>
                    <p className="info-text-row">Salary data, mentorship, and industry-specific yapping sessions.</p>
                  </div>
                </div>
                <div className="info-item-row">
                  <div className="info-icon">
                    <span className="material-symbols-outlined">login</span>
                  </div>
                  <div>
                    <h4 className="info-label-row">How to join</h4>
                    <p className="info-text-row">Apply with your LinkedIn profile for curated placement.</p>
                  </div>
                </div>
              </div>
              <button className="section-button button-dark">Apply to Network</button>
            </div>
            <div className="section-images-grid">
              <div className="image-square image-rotate-negative">
                <div className="image-bg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgE0HqL6TSivAhr_rraER3uckCpl4oQE3ATTJx-892nrZrA3AIcZlNHaEmBvj1USlJyVAM52gVYG8z_NEh-4yu51iRDBfnDWLHknFuy6MR1aYFILYSJ-Vs4jqyuzuIdraHokRqADpwjQ2UBJc13KRga8FCGRh05wyyDasbArBsIeu530jJ-AcSFYho5VU6ktrHy_fccA4fMofBXkJfjpKqW4XltOrcLP3WboY37Ryw6JIOoMdrhcKjx8AGuPGOwr3MJA5T17RSksGd')`}}></div>
              </div>
              <div className="image-square">
                <div className="image-bg image-grayscale" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuSKJkV74Xvgpv7cC4_JQ8KxzQHoC9KexHHfQy8D2TWiCRNF49xhCAmXXoPbcnmAdXUac7yn3d97sPITxV0aDDvhmr12y0gN0YhSPqD1xTDLkF_w91ISqaB_OkkGGiX4bWOGgaESRkmoOnF3mQKYx0c9Arsq0tOV84ytUc39RkZ2PoouKJerLBGjPsoOvaqjh-h1hcDuApJsSxcTmoJhR0P522Nj5MusEeONREoQKd7nIl_mmMzS3yc4iCL_O7w8p8gyFAoounEhK9')`}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Builders & Contributors Section */}
      <section className="community-section section-builders" id="builders">
        <div className="section-container">
          <div className="builders-grid">
            <div className="builders-content">
              <span className="section-number">03. The Creators</span>
              <h2 className="builders-title">Builders & Contributors</h2>
              <p className="builders-description">
                The engine of our ecosystem. Designers, writers, developers, and event architects.
              </p>
              <button className="section-button button-dark button-with-icon">
                Become a Builder <span className="material-symbols-outlined">bolt</span>
              </button>
            </div>
            <div className="builders-images">
              <div className="builders-grid-images">
                <div className="builders-image-item">
                  <div className="image-bg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLDKNbYXIHaMovzB5BOJu_o6Ppy6LHDi4TqkorhIFBnyLsefhZfgRKxruAl58GkDRwZ2KGcw-zFqFdLzkXbGyPRAIn6ZI1W6M3ebsdABWhtQDGj2p7_T9lJJgWlqd98rE6l6MwvXDI1rcdjo9xAoI0isM-h3U8YGG4hnt-Huag_Ajaz5TSJqC2EkUXkOCO-cprOq1zJ788Tl3QmRDR4ZwirqLUMd5RcApJXCQH2AwTjMKH3_z2ub1qy_6omW5OI04BfQTSY0TFs0nh')`}}></div>
                </div>
                <div className="builders-info-column">
                  <div className="builders-info-card">
                    <h4 className="builders-info-title">What they get</h4>
                    <ul className="builders-info-list">
                      <li>• Revenue sharing on assets</li>
                      <li>• Exclusive Lab access</li>
                      <li>• Profile featured in hub</li>
                    </ul>
                  </div>
                  <div className="builders-image-item">
                    <div className="image-bg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCr1Lmf1GCvIdqeGs8scJukq_IFYMLNJ75MQx6BOjqtrLRAcH5gXRpfmNl5CX42CAgGdyKkLfYwJufCKa0LPMXjfRbyQLlvjzxsbV_Ep84oJKCx7nBD6Nhkl2gkmDGjRwm6-mNd64bWnt-z4uGCqPrhollivXiHEpqDMNS1T6k2hQSzgl1uXZSnZDqJxJZ1jFmRGcpqOMviuqT3zndE_eE_gsSx3IBvcBS6-sEbXixErt_YgEv9HZBNfkW05BBSj-8RLQB274_0RWRr')`}}></div>
                  </div>
                </div>
                <div className="builders-info-column builders-info-column-hidden">
                  <div className="builders-image-item">
                    <div className="image-bg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzqoxOQj69xpUxmVIyIUYB_rPinDvsdTsBHHY2Mve9OrIHt01kAWrG7BBBZV00xGA7mAGt1PBp-9kDFPD4LPLdESb_N0i8TlPrfhEEZSYng1iE0yaW4oi6DxalXArjicA_ykciugV50xAA3rQarK_oNqFCLrtamLVKhNHc0WKVY3X_CxlB3W1M0WGNhu4PihS1ZoQpm--TAPt9K-xYAv3HBlpD3uZnLgDwYcbNWkHhe98TE_PL0XD2M4oX51ZbfWPwBMn5gBlu1OJh')`}}></div>
                  </div>
                  <div className="builders-info-card-light">
                    <h4 className="builders-info-title-light">How to join</h4>
                    <p className="builders-info-text-light">Submit your portfolio to the Lab portal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Chapters Section */}
      <section className="community-section" id="regional">
        <div className="section-container">
          <div className="regional-header">
            <span className="section-number">04. Find Your Locals</span>
            <h2 className="section-title">Regional Chapters</h2>
          </div>
          <div className="regional-content">
            <div className="regional-image-wrapper">
              <div className="regional-image-bg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTV1ulw2ezWq43vrxXBbTUj3i0BhQRHOqVooYOVJ0Irvh9bc7Md-CtVJ_5y_V3g0NXWRPsfjpXF4OF857Q8i817E--7vxmD-hY3aoHCuQ4ShFDkRwl3hrS44uI2qlM9S2yxoj6F83ILjJTqMBobO1TAuyiHYOaJPJ74tu-o3eswsyNyKxiivenCg64-Lvk5LaUyTpbu_H73NEkBkCw5FbELynkAXCvpxYcz_qPOB801cwTxiPhw4s-pVvwZCXpiPSCgcrvdmgfadRD')`}}></div>
              <div className="regional-image-overlay"></div>
              <div className="regional-image-text">
                <p className="regional-script">Yap Global</p>
                <h3 className="regional-title">20+ Active Cities</h3>
              </div>
            </div>
            <div className="regional-info-column">
              <div className="regional-info-card">
                <h4 className="info-label">Who belongs here</h4>
                <p className="info-text">Anyone craving in-person connection, coffee walks, and localized support systems.</p>
                <h4 className="info-label">What they get</h4>
                <ul className="info-list">
                  <li>• Monthly neighborhood mixers</li>
                  <li>• Local job opportunity board</li>
                  <li>• WhatsApp city circles</li>
                </ul>
              </div>
              <div className="regional-cta-card">
                <h4 className="info-label-white">How to join</h4>
                <p className="info-text-white">Drop your zip code to find your nearest chapter leader.</p>
                <button className="section-button button-dark-full">Find My Chapter</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Legacy Section */}
      <section className="community-section section-alumni" id="alumni">
        <div className="section-container">
          <div className="alumni-wrapper">
            <div className="alumni-bg-image"></div>
            <div className="alumni-content">
              <span className="section-number">05. The OG Yappers</span>
              <h2 className="alumni-title">
                Alumni <br/>
                <span className="alumni-title-accent">Legacy</span>
              </h2>
              <div className="alumni-info-grid">
                <div>
                  <h4 className="info-label">Who belongs</h4>
                  <p className="info-text-white">Seasoned pros who've passed through our programs and are now leading their industries.</p>
                </div>
                <div>
                  <h4 className="info-label">What they get</h4>
                  <p className="info-text-white">Advisory roles, speaking slots, and exclusive executive networking.</p>
                </div>
              </div>
              <div className="alumni-cta">
                <div>
                  <h4 className="info-label">How to join</h4>
                  <p className="info-text-white">Automatic transition for active builders and community leaders after 2 years.</p>
                </div>
                <button className="section-button button-white">Stay Connected</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
