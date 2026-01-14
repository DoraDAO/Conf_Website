import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const programs = [
    {
      id: 1,
      track: 'PROGRAM 01',
      name: 'Girls Who Yap Conference',
      description: 'A flagship, creator-first conference bringing together women across India to explore culture, community, and emerging technology in a safe, non-intimidating space.',
      audience: 'Women creators, founders, storytellers, community builders',
      type: 'image',
      bgColor: 'dark',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVfNFOXv6O8DINPPrTNdkCeQ-B9eAEGQA0etQ20FH7tLpfCaLMiWjNB3glgOXfsQ2JODnTSbGuIn6AvOU7Ov3MSIhh6naHSUwNXA8yaMMXma3IeesqYULJ1JOqu97zWaw5s9Qgh0aeKr1wtbFe6cI2tkOpx4CQLBP2ZEkQ80XnsU7XqQlfxAXACBgCyB3f_mmvu-pSStInxPsX2Hnx7D5FFub8rjNkk5lwMauUfVHX6soronTzJZhhaDrSGH10NuHU6lzerzqRZVI3'
    },
    {
      id: 2,
      track: 'PROGRAM 02',
      name: 'Girls Who Yap (Community Program)',
      description: 'An ongoing community layer beyond the conference — focused on conversations, collaboration, visibility, leadership, and women-led ideas.',
      audience: 'Women creators at any stage',
      type: 'dark',
      bgColor: 'dark'
    },
    {
      id: 3,
      track: 'PROGRAM 03',
      name: 'DoraHacks',
      description: 'Hackathons and build-sprints designed to connect Indian talent with global Web3, AI, and open-innovation opportunities.',
      audience: 'Builders, developers, early-stage experimenters',
      type: 'dark',
      bgColor: 'dark'
    },
    {
      id: 4,
      track: 'PROGRAM 04',
      name: 'W3M (WEB3 MEETS AI)',
      description: 'A knowledge-first initiative exploring the intersection of AI × Web3, focusing on experimentation, research, and emerging use cases.',
      audience: 'Researchers, advanced builders, technical explorers',
      type: 'image-dark',
      bgColor: 'dark',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB_H2KwE1cFVcL4yP3cd60imGXMN_uu2sKVzUO91uhyhjSG8geejO1hEIbfEknBpgX5o3QbzFRrIH8UY8mVkF6-_YxCVQZo2Kp2PAryUU2q2RCDUzdTxN3R_Y8fOYsDw8Af2yHZ7wh9NSjm9bX-xKsj6npJ6T9zaBxNOkIiaRp35-fqO5JCe7Vx4LcXlp2nbjRQHZmEUIcOjHHefhVrO2TIu74JlocVIQoOxNjx2R9q-Z_-ao688_q2JbOUyOy1BMzoiay9ExUBY-K'
    },
    {
      id: 5,
      track: 'PROGRAM 05',
      name: 'OPEN SOURCE & PUBLIC GOODS',
      description: 'An initiative focused on open-source projects, public goods, and community-led tooling, encouraging ownership and long-term contribution.',
      audience: 'Contributors, developers, ecosystem builders',
      type: 'dark-icon',
      bgColor: 'dark',
      icon: 'view_module'
    },
    {
      id: 6,
      track: 'PROGRAM 06',
      name: 'PODCAST & SPOTLIGHTS',
      description: 'A storytelling and visibility program highlighting real journeys, experiments, and ecosystem insights through podcasts, interviews, and creator spotlights.',
      audience: 'Creators, founders, community leaders',
      type: 'image',
      bgColor: 'dark',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARON1Ha_r9Tz2FuK0piC6h4-gOh_e3h4Adqzlr9cUodS0geLcRFoD9iuIzXcNZoUoSr4gT_-X-Wds1rF2Lz0sfH2fBmgvhocU1vnlOxBSARpfR9xhk2UxQQlXd-ej_XRRMhB_ZFKyr9Bh9xD9JOHMNnPx2sqLUTi3lnFUJz1ginOcDkEBaLMaEbJnFd0ITGOwOchfhobwbOuhAq_hlSghTul_mMYKGhCzWu-82QsPK_ZXbd4H2GQOyYzMKKxczUypE9yWRIVgvTbRS'
    },
    {
      id: 7,
      track: 'PROGRAM 07',
      name: 'Build With DoraDAO (Ecosystem Experiments)',
      description: 'A sandbox for new initiatives, pilots, and collaborations — allowing DoraDAO to experiment, validate, and scale ideas with the community.',
      audience: 'Early-stage founders, community builders, partners',
      type: 'dark',
      bgColor: 'dark'
    },
  ];

  const audiences = [
    {
      title: 'The Visionary Creator',
      description: 'Ready to take their digital art and brand to the next frontier of decentralized platforms.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxvqnx6u1aX4y07OlFjW5t-at6fRpfC-A7CoQegqoUHnDSeC1jOjJ3xsnt7aWopffRoNQXIcby5dpr8bn7YFm4pDFEe4zh4hPQNXlz4eRxjCDWUFpvS3xOgqEtRQcwHZVTkQICyXf3bC6KRs4SNAbUqI4_uMj-LMhdgaUFmbkCQW1zNYswhvYwJnwR-rk2vw_ACCxfiMT0XjlMOtTU9U9oqMAXs7oCuuKth4KYtcplrkO3F4yr4haj8-ZSAGbrf2URaQFwMpyi20z9'
    },
    {
      title: 'The Aspiring Student',
      description: 'Eager to break into tech with a community that values voice, ethics, and diverse perspectives.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjxRKZdm0QdGe8aYjAcfgqfh12meVxvkDdL92CGUddW7Y2JBKf26W9tr80LOyGorDOqs5101hMU_zCRM96bHF4v3dKK7Rr29o3aVRe9uH2WmjPOeItb5lmIwIFDEvInFs1VWNGTz75Wh6WcS4jPqM_L4jlhZGrHsu-gZOhBkTmrtISel1sE_hhB1CMZ49H4RFdXI_pYf4HifB3MSq-OTK-B7Jwn0lx_5LimUjdtvRtu-FgkxHkSuuuLZkMFf1ZpEoPR09kQwF6naDH'
    },
    {
      title: 'The Tech Professional',
      description: 'Seasoned experts looking to mentor, connect, and explore the social layers of emerging technology.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLhG648OS-nkTWqch-fAX9jB-tqVXmLf_MNPNQNUuW9XHvkShj0zjwrdXm3iUaIBGrBh73xR-cvyuEL7a8Ng_dGT_8cSFMpijZu5v4BtJRxP7nK7nK1v3fiwZmvHaphG5C6sGCBp_22T5e_522yhm3RIOGe2lkWXRMR_owC2HncmZCuBQ9pch-b0tIYlMIs58ZIfzBdCwNpoFUod8yWosimS_nHmTjdrDHUqp5NoUK5Moy92CXqJSP7bW7l0G3WAnPVXWysk2K0QrO'
    },
  ];

  return (
    <div className="home">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content-left">
            <div className="hero-badge-top">
              <span className="coming-soon">Coming March 2026</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">Girls Who</span> <br/>
              <span className="text-primary">Yap</span>
              <span className="hero-title-conf">Conf</span>
            </h1>
            <p className="hero-description">
              The intersection of culture, tech, and the art of conversation. A space for creators to <span className="text-primary italic">redefine the future</span>, powered by DoraDAO.
            </p>
            <div className="hero-cta">
              <button className="btn-primary-large">Explore Programs</button>
              <button className="btn-secondary-large">Join DoraDAO</button>
            </div>
          </div>
          <div className="hero-image-right">
            <div className="hero-image-wrapper film-grain">
              <img 
                alt="Crowd" 
                className="hero-image" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVf9T7-_KpBL5EPJ2JUDsZScNuZ9K4GVwzXvvXVeKH3P-zvZOQtAzyzpBKFjFNafzJPBEvjhFj6Jsn6BPtaVbKJl9FkjJEEdP25BaEswqnS87cxOJTAjS_f5bm9FXWPHuLqaMHpBY7zqaK1qJh1r5wueZSZF990s9EnaxMEitQgLbgn14ZZSL1aSEVZ4nEj3-bYb7LJM0NkAEUaP-aXkDgsKPJo3tCglbqz5-uQr6NJMpi53KroVhDsnlfMuAcJOgsdzNV7b_zVtOU"
              />
              <div className="hero-gradient-overlay"></div>
            </div>
            <div className="hero-badge">
              <p className="badge-year">2026</p>
              <p className="badge-text">The Year of Voice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="powered-by-section">
        <div className="container powered-by-container">
          <div className="powered-by-content">
            <div className="section-label-wrapper">
              <span className="label-line"></span>
              <span className="section-label">Our Ecosystem</span>
            </div>
            <h2 className="powered-by-title">
              Powered by <br/>
              <span className="text-primary italic script-font">DoraDAO</span>
            </h2>
            <p className="powered-by-description">
              DoraDAO is the decentralized autonomous organization building the infrastructure for community-led movements. We're more than a conference; we're a permanent home for the next generation of female tech pioneers.
            </p>
            <div className="powered-by-cards">
              <div className="powered-by-card">
                <span className="material-symbols-outlined card-icon">hub</span>
                <h3>DECENTRALIZED</h3>
                <p>Community-led governance and ownership for every member.</p>
              </div>
              <div className="powered-by-card">
                <span className="material-symbols-outlined card-icon">language</span>
                <h3>GLOBAL IMPACT</h3>
                <p>Bridging creators across 10+ countries and diverse industries.</p>
              </div>
            </div>
          </div>
          <div className="powered-by-visual">
            <div className="illustration-circle-wrapper">
              <div className="illustration-circle">
                <img 
                  alt="Creative team" 
                  className="illustration-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi39LlNNCil7Zxq7hu3fkCNJesxrnmo1VWcQYgr1ekmGB9kjD2gzj4_JhP3qasnpCIsMDzI0mXQ6eNu0nZSehdd-Q1FSBc4-U3B_tYHVCPK7TDb9pHfW37nMhrUYvJ6VZb-ccinEJ9SUx3VCKlUzWhSvSKzHul532_N9pNchUj_WkF40Iekivgko6-0fM2SXjk6u8a2326Nrgcv1J3oljCS5g2td0_JDcVKoo5MxbGO0WVhmernldIFxxI0kjrX0bVpLfBTBN_lLL_"
                />
                <div className="illustration-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="programs-section">
        <div className="container">
          <div className="programs-header">
            <div className="programs-header-left">
              <h2 className="programs-title">
                The 7 DoraDAO <br/>
                <span className="text-primary">Programs</span>
              </h2>
              <p className="programs-subtitle">Curated tracks designed to elevate every type of creator in the ecosystem.</p>
            </div>
            <button className="view-schedule-btn">
              View Schedule <span className="material-symbols-outlined arrow-icon">arrow_forward</span>
            </button>
          </div>
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className={`program-card program-card-${program.bgColor}`}>
                {program.type === 'image' && (
                  <div className="program-image-bg" style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.8), transparent), url("${program.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt94Y6vbQSrXZcigUsnn59U_96zkYUXltfGeOWZGdZl1vzuFWIC2F33DBYDPl-_Lz-6yP87G70m-Olf3LIvM3x8fbyPCXWniIHqySMbVsxknZkiOs4aTl4VqUMb-uI4Pzu9wqJbrzBlLDvTaGcU_TJSX5pQoRDWl3IFl05YtkIYbWd6X6AIBgxLbdCjjBXShK_gKajk4bGw90AtEs_URRfMTGQUonm0xLmiYUKPsdswN2mw8OaL12o1Z2e4hjtosFsG6wMepvzFkY_'}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                    <span className="program-track">{program.track}</span>
                    <h3>{program.name}</h3>
                    <p className="program-description">{program.description}</p>
                  </div>
                )}
                {program.type === 'image-dark' && (
                  <div className="program-image-bg" style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.8), transparent), url("${program.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1R6eQYF_3oyAcxmxQ9VKFESq5N4LvaskfrqOHwn7ZAYHD1JP1jTE8V6hDSNJOB1dlGyPKFD-3D5zgizENrc1urMVB1T-DXOh2RyKT4HU9Z59OXr3oeHfkydsigRZriAmeAOEQBGzVqmwq60MD8R_eEL3E7e3o2fV6-jd00WlvSflgKmmXWzFAVUrJTg8u3PHdRQyKtqPJMWSJWZHLPmOlhh58eZilDlAkaj-USZf4q9op9n7kESmz5q7fYg7dGxAuDAhcuS_FTy00'}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                    <span className="program-track">{program.track}</span>
                    <h3>{program.name}</h3>
                    {program.description && <p className="program-description">{program.description}</p>}
                  </div>
                )}
                {program.type === 'dark' && (
                  <>
                    <span className="program-track">{program.track}</span>
                    <h3>{program.name}</h3>
                    {program.description && <p className="program-description">{program.description}</p>}
                  </>
                )}
                {program.type === 'dark-icon' && (
                  <>
                    <span className="material-symbols-outlined program-icon-medium">{program.icon}</span>
                    <span className="program-track">{program.track}</span>
                    <h3>{program.name}</h3>
                    {program.description && <p className="program-description">{program.description}</p>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="who-for-section">
        <div className="container">
          <h2 className="who-for-title">
            Who This Is <span className="text-primary italic script-font">For</span>
          </h2>
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <div key={index} className={`audience-card ${index === 1 ? 'mt-20 md:mt-40' : index === 2 ? 'md:mt-10' : ''}`}>
                <div className="audience-image-wrapper">
                  <img 
                    alt={audience.title} 
                    className="audience-image"
                    src={audience.image}
                  />
                  <div className="audience-overlay"></div>
                </div>
                <div className="audience-content">
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">2k+</span>
              <p className="stat-label">Active Members</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <p className="stat-label">Industry Speakers</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <p className="stat-label">Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
