import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Home.css';
import image from "../assets/image.png"
import GirlsWhoYap from "../assets/GirlsWhoYap.png"

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [communityImpactProgress, setCommunityImpactProgress] = useState(0);
  const [poweredByTitleProgress, setPoweredByTitleProgress] = useState(0);
  const scrollContainerRef = useRef(null);
  const scrollAnimationRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setScrollY(scrollPosition);
          
          const heroSection = document.querySelector('.hero-section');
          if (heroSection) {
            const rect = heroSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            setIsVisible(rect.top < viewportHeight && rect.bottom > 0);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll functionality for programs gallery
  useEffect(() => {
    let animationFrameId = null;
    const scrollSpeed = 1.5;
    let isScrolling = false;

    const scroll = () => {
      const container = scrollContainerRef.current;
      if (!container) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }
      
      const gallery = container.querySelector('.programs-scroll-gallery');
      if (!gallery) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      // Check if container is actually scrollable
      const canScroll = gallery.scrollWidth > container.clientWidth;
      if (!canScroll || gallery.scrollWidth === 0) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      const totalWidth = gallery.scrollWidth;
      const singleSetWidth = totalWidth / 2;
      let currentScroll = container.scrollLeft;
      
      if (currentScroll >= singleSetWidth - 10) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = currentScroll + scrollSpeed;
      }
      
      isScrolling = true;
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start scrolling - try multiple times to ensure it starts
    const startScrolling = () => {
      if (!isScrolling) {
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    // Start after delays to ensure DOM is ready
    const timeout1 = setTimeout(startScrolling, 300);
    const timeout2 = setTimeout(startScrolling, 1000);
    const timeout3 = setTimeout(startScrolling, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  const programs = [
    {
      id: 1,
      track: 'PROGRAM 01',
      name: 'Girls Who Yap Conference',
      description: 'A flagship, creator-first conference bringing together women across India to explore culture, community, and emerging technology in a safe, non-intimidating space.',
      audience: 'Women creators, founders, storytellers, community builders',
      type: 'image',
      bgColor: 'dark',
      image: 'https://www.notion.so/image/attachment%3Aa26605a1-477b-4a63-96fe-707f986d41f4%3AGWY_CONF-2.png?table=block&id=2ded8cf9-6e75-8183-bd25-f1ebaa1c7f99&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2'
    },
    {
      id: 2,
      track: 'PROGRAM 02',
      name: 'Girls Who Yap (Community Program)',
      description: 'An ongoing community layer beyond the conference — focused on conversations, collaboration, visibility, leadership, and women-led ideas.',
      audience: 'Women creators at any stage',
      type: 'image',
      bgColor: 'dark',
      image: 'https://www.notion.so/image/attachment%3A5b69da9f-fd2f-471c-bf4a-ddd916d56737%3ABeige_and_Red_Orange_Modern_Project_Proposal_Presentation-3.png?id=2ded8cf9-6e75-815b-bb86-f79c31c4c90a&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2'
    },
    {
      id: 3,
      track: 'PROGRAM 03',
      name: 'DoraHacks',
      description: 'Hackathons and build-sprints designed to connect Indian talent with global Web3, AI, and open-innovation opportunities.',
      audience: 'Builders, developers, early-stage experimenters',
      type: 'image',
      bgColor: 'dark',
      image: 'https://www.notion.so/image/attachment%3A4113cb3a-ac01-45f4-83f5-7d69e84d0714%3AGIRLS_WHO_YAP-3.png?id=2ded8cf9-6e75-8156-a19e-ff97a7fa27aa&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2'
    },
    {
      id: 4,
      track: 'PROGRAM 04',
      name: 'W3M (WEB3 MEETS AI)',
      description: 'A knowledge-first initiative exploring the intersection of AI × Web3, focusing on experimentation, research, and emerging use cases.',
      audience: 'Researchers, advanced builders, technical explorers',
      type: 'image-dark',
      bgColor: 'dark',
      image: 'https://www.notion.so/image/attachment%3A143d8827-68d9-4b51-973b-6834fbf76052%3ABeige_and_Red_Orange_Modern_Project_Proposal_Presentation.png?id=2ded8cf9-6e75-813a-9309-c356d557c341&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2'
    },
    {
      id: 5,
      track: 'PROGRAM 05',
      name: 'OPEN SOURCE & PUBLIC GOODS',
      description: 'An initiative focused on open-source projects, public goods, and community-led tooling, encouraging ownership and long-term contribution.',
      audience: 'Contributors, developers, ecosystem builders',
      type: 'image',
      bgColor: 'dark',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1960&q=80'
    },
    {
      id: 6,
      track: 'PROGRAM 06',
      name: 'PODCAST & SPOTLIGHTS',
      description: 'A storytelling and visibility program highlighting real journeys, experiments, and ecosystem insights through podcasts, interviews, and creator spotlights.',
      audience: 'Creators, founders, community leaders',
      type: 'image',
      bgColor: 'dark',
      image: 'https://www.notion.so/image/attachment%3Ad7fa826c-e785-49b9-88a4-82118386602d%3ACertificate_Of_Completetion.png?table=block&id=2dfd8cf9-6e75-8040-aecd-ca41c6952e37&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2'
    },
    {
      id: 7,
      track: 'PROGRAM 07',
      name: 'Build With DoraDAO (Ecosystem Experiments)',
      description: 'A sandbox for new initiatives, pilots, and collaborations — allowing DoraDAO to experiment, validate, and scale ideas with the community.',
      audience: 'Early-stage founders, community builders, partners',
      type: 'image',
      bgColor: 'dark',
      image: 'https://www.notion.so/image/attachment%3Ade3dbafe-7e3a-47ef-b6f4-9204d8922a38%3ADeck-4.png?id=2ded8cf9-6e75-8112-b918-f125c4d7e21b&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2'
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

  const partners = [
  { name: 'DoraDAO', logo: 'https://cdn.simpleicons.org/dora' }, // closest available
  { name: 'Google', logo: 'https://cdn.simpleicons.org/google' },
  { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft' },
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github' },
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws' },
  { name: 'Meta', logo: 'https://cdn.simpleicons.org/meta' },
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel' },
  { name: 'Netlify', logo: 'https://cdn.simpleicons.org/netlify' },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman' },
  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion' },
  { name: 'Linear', logo: 'https://cdn.simpleicons.org/linear' },
  { name: 'Cloudflare', logo: 'https://cdn.simpleicons.org/cloudflare' },
  { name: 'Twilio', logo: 'https://cdn.simpleicons.org/twilio' },
  { name: 'SendGrid', logo: 'https://cdn.simpleicons.org/sendgrid' },
  { name: 'Auth0', logo: 'https://cdn.simpleicons.org/auth0' },
  { name: 'Okta', logo: 'https://cdn.simpleicons.org/okta' },
  { name: 'Databricks', logo: 'https://cdn.simpleicons.org/databricks' },
  { name: 'Snowflake', logo: 'https://cdn.simpleicons.org/snowflake' },
  { name: 'Tableau', logo: 'https://cdn.simpleicons.org/tableau' },
  { name: 'Looker', logo: 'https://cdn.simpleicons.org/looker' },
  { name: 'Segment', logo: 'https://cdn.simpleicons.org/segment' },
  { name: 'Polygon', logo: 'https://cdn.simpleicons.org/polygon' }
];



const textStart = 0;
const textEnd = 500;

const imageStart = textEnd;
const imageEnd = 900; // shorter = faster image entry

// Text progress (0 → 1)
const textProgress = Math.min(
  Math.max((scrollY - textStart) / (textEnd - textStart), 0),
  1
);

// Image progress (0 → 1) — locked until text completes
const imageProgress =
  scrollY < textEnd
    ? 0
    : Math.min(
        (scrollY - imageStart) / (imageEnd - imageStart),
        1
      );

// Controls where text STOPS
const TEXT_STOP = 420; // tweak to match sentence width



const visualRef = useRef(null);
  const poweredByImageRef = useRef(null);
  const [poweredByImageProgress, setPoweredByImageProgress] = useState(0);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visual.classList.add("in-view");
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(visual);

    return () => observer.disconnect();
  }, []);

  // Scroll animation for Powered By image
  useEffect(() => {
    const handlePoweredByScroll = () => {
      if (!poweredByImageRef.current) return;
      
      const element = poweredByImageRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element position
      // Start animation when element is near viewport
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;
      
      if (rect.top < startTrigger && rect.bottom > endTrigger) {
        // Element is in view range
        const progress = Math.min(
          Math.max(
            (startTrigger - rect.top) / (startTrigger - endTrigger),
            0
          ),
          1
        );
        setPoweredByImageProgress(progress);
      }
    };

    window.addEventListener('scroll', handlePoweredByScroll, { passive: true });
    handlePoweredByScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handlePoweredByScroll);
  }, []);

  // Scroll animation for Community Impact Section
  useEffect(() => {
    const handleCommunityImpactScroll = () => {
      const section = document.querySelector('.community-impact-section');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0-1) based on scroll position
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;
      
      if (rect.top < startTrigger && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((startTrigger - rect.top) / (windowHeight * 0.6), 0),
          1
        );
        setCommunityImpactProgress(progress);
      }
    };

    window.addEventListener('scroll', handleCommunityImpactScroll, { passive: true });
    handleCommunityImpactScroll();
    
    return () => window.removeEventListener('scroll', handleCommunityImpactScroll);
  }, []);

  // Scroll animation for Powered By Title
  useEffect(() => {
    const handlePoweredByTitleScroll = () => {
      const title = document.querySelector('.powered-by-title');
      if (!title) return;
      
      const rect = title.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Slower, more gradual reveal
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.3;
      
      if (rect.top < startTrigger && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((startTrigger - rect.top) / (windowHeight * 0.8), 0),
          1
        );
        setPoweredByTitleProgress(progress);
      }
    };

    window.addEventListener('scroll', handlePoweredByTitleScroll, { passive: true });
    handlePoweredByTitleScroll();
    
    return () => window.removeEventListener('scroll', handlePoweredByTitleScroll);
  }, []);
  
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
        {/* Background Image */}
        <div className="hero-background-image">
          <img src={GirlsWhoYap} alt="" />
        </div>
       
        <div className="container hero-container">
          <div className="hero-content-left">
            <h1 className="hero-title">
              <div className="hero-title-line">
                <span className="hero-title-girls">Yap freely. Grow together.</span>
              </div>
              <div className="hero-title-line">
                <span className="hero-title-yap">girls who yap</span>
              </div>
            </h1>
            <p className="hero-description">
              Welcome to Girls Who Yap! Join one of India's most thriving communities to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment powered by DoraDAO.
            </p>
          </div>
  <div  >
  <div
  className="scroll-acent-bg-text"
  style={{
    transform: `translateX(${textProgress * 600}px)`,
    opacity: textProgress,
  }}
>
  Girls Who Yap
</div>

<div
  className="scroll-accent-circle"
  style={{
    transform: `translateX(${(1 - imageProgress) * 100}%) 
                rotate(${imageProgress * 36}deg) 
                scale(${1 - imageProgress * 0.2})`,
    opacity: imageProgress,
  }}
>
  <a href="https://discord.gg/cNckZxYn" target="_blank" rel="noopener noreferrer">
    <img src={image} className="hero-circle-image" />
  </a>

  <div className="circle-overlay" />
</div>


</div>
        </div>
      </section>


     

      {/* Powered By Section */}
      <section className="powered-by-section">
        <div className="container powered-by-container">
          <div 
            className="powered-by-visual" 
            ref={poweredByImageRef}
            style={{
              transform: `translateX(${-100 + (poweredByImageProgress * 100)}px)`,
              opacity: poweredByImageProgress,
            }}
          >
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
          <div className="powered-by-content">
            <div className="section-label-wrapper">
              <span className="label-line"></span>
              <span className="section-label">Our Ecosystem</span>
            </div>
           
            <h2 className="powered-by-title">
              <span 
                className="title-part title-part-1"
                style={{ opacity: Math.min(poweredByTitleProgress * 2, 1) }}
              >
                We are not just a <br/>
              </span>
              <span 
                className="title-part title-part-2"
                style={{ opacity: Math.min(Math.max((poweredByTitleProgress - 0.4) * 2.5, 0), 1) }}
              >
                <span className="text-primary italic script-font">community</span>
              </span>
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
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="programs-section">
        <div className="programs-content-wrapper">
          <div className="container programs-header-container">
            <div className="programs-header">
              <div className="programs-header-left">
                <h2 className="programs-title">The 7 Programs</h2>
                <p className="programs-description">
                  Curated tracks designed to elevate every type of creator in the ecosystem. From conferences to hackathons, community programs to open source initiatives, we provide diverse opportunities for women to build, innovate, and lead in tech.
                </p>
                <div className="programs-cta">
                  <button className="programs-explore-btn">Explore Now</button>
                  <button className="programs-arrow-btn">
                    <span className="material-symbols-outlined">arrow_upward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="programs-scroll-container" ref={scrollContainerRef}>
            <div className="programs-scroll-gallery">
              {/* First set of programs */}
              {programs.map((program) => (
                <Link 
                  key={program.id} 
                  to="/programs"
                  className="program-scroll-card"
                >
                  {program.image ? (
                    <>
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="program-scroll-image"
                      />
                      <div className="program-scroll-overlay"></div>
                      <div className="program-scroll-content">
                        <span className="program-scroll-track">{program.track}</span>
                        <h3 className="program-scroll-name">{program.name}</h3>
                        <p className="program-scroll-description">{program.description}</p>
                        <span className="program-scroll-audience">{program.audience}</span>
                      </div>
                    </>
                  ) : (
                    <div className="program-scroll-placeholder">
                      <span className="material-symbols-outlined program-placeholder-icon">{program.icon || 'groups'}</span>
                      <span className="program-track">{program.track}</span>
                      <h3 className="program-placeholder-title">{program.name}</h3>
                      <p className="program-scroll-description">{program.description}</p>
                      <span className="program-scroll-audience">{program.audience}</span>
                    </div>
                  )}
                </Link>
              ))}
              {/* Duplicate set for seamless loop */}
              {programs.map((program) => (
                <Link 
                  key={`${program.id}-duplicate`} 
                  to="/programs"
                  className="program-scroll-card"
                >
                  {program.image ? (
                    <>
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="program-scroll-image"
                      />
                      <div className="program-scroll-overlay"></div>
                      <div className="program-scroll-content">
                        <span className="program-scroll-track">{program.track}</span>
                        <h3 className="program-scroll-name">{program.name}</h3>
                        <p className="program-scroll-description">{program.description}</p>
                        <span className="program-scroll-audience">{program.audience}</span>
                      </div>
                    </>
                  ) : (
                    <div className="program-scroll-placeholder">
                      <span className="material-symbols-outlined program-placeholder-icon">{program.icon || 'groups'}</span>
                      <span className="program-track">{program.track}</span>
                      <h3 className="program-placeholder-title">{program.name}</h3>
                      <p className="program-scroll-description">{program.description}</p>
                      <span className="program-scroll-audience">{program.audience}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
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

      {/* Community Impact Section */}
      <section className="community-impact-section">
        <div className="container community-impact-container">
          <h2 className="community-impact-headline">
            <span 
              className="headline-part headline-part-1"
              style={{ opacity: Math.min(communityImpactProgress * 3, 1) }}
            >
              Be part of a community like no other and get the true{' '}
              <span className="highlight-orange">creator experience.</span>{' '}
            </span>
            <span 
              className="headline-part headline-part-2"
              style={{ opacity: Math.min(Math.max((communityImpactProgress - 0.3) * 3, 0), 1) }}
            >
              Girls Who Yap strongly embodies the values of{' '}
              <span className="highlight-purple">inclusivity and diversity.</span>
            </span>
          </h2>
          <div className="stats-grid-new">
            <div className="stat-card-new">
              <span className="stat-number-new">10k+</span>
              <p className="stat-label-new">overall hacker reach</p>
            </div>
            <div className="stat-card-new">
              <span className="stat-number-new">55+</span>
              <p className="stat-label-new">countries global community</p>
            </div>
            <div className="stat-card-new">
              <span className="stat-number-new">60+</span>
              <p className="stat-label-new">workshops provided</p>
            </div>
            <div className="stat-card-new">
              <span className="stat-number-new">590+</span>
              <p className="stat-label-new">innovative projects built</p>
            </div>
            <div className="stat-card-new">
              <span className="stat-number-new">24+</span>
              <p className="stat-label-new">successful events conducted</p>
            </div>
            <div className="stat-card-new">
              <span className="stat-number-new">290+</span>
              <p className="stat-label-new">universities connected</p>
            </div>
            <div className="stat-card-new">
              <span className="stat-number-new">15k+</span>
              <p className="stat-label-new">overall social media reach</p>
            </div>
            <div className="stat-card-new">
              <span className="stat-number-new">62+</span>
              <p className="stat-label-new">trusted partners & sponsors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container partners-container">
          <h2 className="partners-title">Partners in doing good</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="partner-logo-fallback" style={{ display: 'none' }}>
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
