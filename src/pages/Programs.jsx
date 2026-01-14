import { Link } from 'react-router-dom';
import './Programs.css';

function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Girls Who Yap Conference',
      description: 'A flagship, creator-first conference bringing together women across India to explore culture, community, and emerging technology in a safe, non-intimidating space.',
      audience: 'Women creators, founders, storytellers, community builders',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVfNFOXv6O8DINPPrTNdkCeQ-B9eAEGQA0etQ20FH7tLpfCaLMiWjNB3glgOXfsQ2JODnTSbGuIn6AvOU7Ov3MSIhh6naHSUwNXA8yaMMXma3IeesqYULJ1JOqu97zWaw5s9Qgh0aeKr1wtbFe6cI2tkOpx4CQLBP2ZEkQ80XnsU7XqQlfxAXACBgCyB3f_mmvu-pSStInxPsX2Hnx7D5FFub8rjNkk5lwMauUfVHX6soronTzJZhhaDrSGH10NuHU6lzerzqRZVI3',
      span: 8,
      aspect: '16/9',
      hasButton: true
    },
    {
      id: 2,
      name: 'Girls Who Yap (Community Program)',
      description: 'An ongoing community layer beyond the conference — focused on conversations, collaboration, visibility, leadership, and women-led ideas.',
      audience: 'Women creators at any stage',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiqqm74WrppGjajptb9J-j2T0Lv_bkHK2Yp8KuBcSsenZeGiiBQW3Ddh9ylvkeobMzQNkM0d83UIQBEQu77--k3DlraxKODMfsn7-8pPnlbg3w49AyhHaZzc215nDcvsb_hKfOItp26DzHK6kA_whozcmjJJ2-x7ZMfa3bkdqe_TK6tgbkTbBX4fMkH3V_Rj3HBkbYo9RC5VGOuK5dcBBC60DJjJGvFSglkXuF8bnhuDSfPVK6gOcskvnze1AzMxbvKld1aFYO6Jbi',
      span: 4,
      aspect: 'square',
      hasButton: false
    },
    {
      id: 3,
      name: 'DoraHacks',
      description: 'Hackathons and build-sprints designed to connect Indian talent with global Web3, AI, and open-innovation opportunities.',
      audience: 'Builders, developers, early-stage experimenters',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBThhpJF6SAXCDX8Kht1HHqF_Sn6s5Ka2rwC6DEGIQs0xiXbkS0gSdMSTGpAssL4zCDnWs7-hLy7gUb1KDy8e3WWrYnDLZubC6yP80o8CUw0GoIbx9HL5M_tRorxHAgo37XYvCWEQUhxxvEPyh51YXbC-NYlfUUNUJx9C8rgJfFlOqGDZjTKpBXzey6tnrzOcSb27XsMfrCk1WBbdPDsqzUy6gF0arYh2JQdRh5OurklmqF_ES1C18u_dHZ5czT7q2B3164pT-uZZ00',
      span: 4,
      aspect: '4/5',
      hasButton: true
    },
    {
      id: 4,
      name: 'W3M (Web3 Meets AI)',
      description: 'A knowledge-first initiative exploring the intersection of AI × Web3, focusing on experimentation, research, and emerging use cases.',
      audience: 'Researchers, advanced builders, technical explorers',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB_H2KwE1cFVcL4yP3cd60imGXMN_uu2sKVzUO91uhyhjSG8geejO1hEIbfEknBpgX5o3QbzFRrIH8UY8mVkF6-_YxCVQZo2Kp2PAryUU2q2RCDUzdTxN3R_Y8fOYsDw8Af2yHZ7wh9NSjm9bX-xKsj6npJ6T9zaBxNOkIiaRp35-fqO5JCe7Vx4LcXlp2nbjRQHZmEUIcOjHHefhVrO2TIu74JlocVIQoOxNjx2R9q-Z_-ao688_q2JbOUyOy1BMzoiay9ExUBY-K',
      span: 4,
      aspect: '4/5',
      hasButton: true
    },
    {
      id: 5,
      name: 'Open Source & Public Goods',
      description: 'An initiative focused on open-source projects, public goods, and community-led tooling, encouraging ownership and long-term contribution.',
      audience: 'Contributors, developers, ecosystem builders',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu0EWLX8k2FELrbfETdckMoWLxX52WwXK8xwhc0BaSGxEFznbknDVxEWAD9--NFYD9f8blX3zVtL79DlpQLxTKwX5AvBgRvPmqAFxaZ1tPiYKW5PJKpX3nh_eOqvwZHTFk2-VdIu59gBdYuHeFlMsAASQTOvKtIT01IRoWEEYuX9dR3g03069DV0FoqFGS_0qy8zhvKGVRE0keCtZTyS2S5-bsfqM-Q6JXAoWb_jofSArQz0OaJ4uhUqR4XQe9yXHIx153m8xjKmrY',
      span: 4,
      aspect: '4/5',
      hasButton: true
    },
    {
      id: 6,
      name: 'Podcast & Spotlights',
      description: 'A storytelling and visibility program highlighting real journeys, experiments, and ecosystem insights through podcasts, interviews, and creator spotlights.',
      audience: 'Creators, founders, community leaders',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARON1Ha_r9Tz2FuK0piC6h4-gOh_e3h4Adqzlr9cUodS0geLcRFoD9iuIzXcNZoUoSr4gT_-X-Wds1rF2Lz0sfH2fBmgvhocU1vnlOxBSARpfR9xhk2UxQQlXd-ej_XRRMhB_ZFKyr9Bh9xD9JOHMNnPx2sqLUTi3lnFUJz1ginOcDkEBaLMaEbJnFd0ITGOwOchfhobwbOuhAq_hlSghTul_mMYKGhCzWu-82QsPK_ZXbd4H2GQOyYzMKKxczUypE9yWRIVgvTbRS',
      span: 6,
      aspect: 'video',
      hasButton: false
    },
    {
      id: 7,
      name: 'Build With DoraDAO (Ecosystem Experiments)',
      description: 'A sandbox for new initiatives, pilots, and collaborations — allowing DoraDAO to experiment, validate, and scale ideas with the community.',
      audience: 'Early-stage founders, community builders, partners',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHaxvBpFVsi4ig7gtSkY0pw4FTLUUPzAu9Bh6UTFNfQy0DXjik98zr0O45YcX3vf-C7NNGFwSGxghGmOtAcmNQBuHo2snUv4UsqViegt9_gagPKMlD6Eg9UWSqJNvL4vJ8l4iIZVxGsCdatspcv4dKF-g1-mTerLJ2rVJAXE0y5KMwbj_d5xUvj3T10dcNRY8xxTKXW0fTG1MyDNL1WguPhCmtKQZSRxHOYFtQeiKugSiZTLjr-clGKvjLGV8yfYq_5F3ygYkGXdoM',
      span: 6,
      aspect: 'video',
      hasButton: false
    }
  ];

  return (
    <div className="programs-page">
      <main className="programs-main">
        {/* Hero Section */}
        <div className="programs-hero">
          <div className="hero-background">
            <div className="hero-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVfNFOXv6O8DINPPrTNdkCeQ-B9eAEGQA0etQ20FH7tLpfCaLMiWjNB3glgOXfsQ2JODnTSbGuIn6AvOU7Ov3MSIhh6naHSUwNXA8yaMMXma3IeesqYULJ1JOqu97zWaw5s9Qgh0aeKr1wtbFe6cI2tkOpx4CQLBP2ZEkQ80XnsU7XqQlfxAXACBgCyB3f_mmvu-pSStInxPsX2Hnx7D5FFub8rjNkk5lwMauUfVHX6soronTzJZhhaDrSGH10NuHU6lzerzqRZVI3')` }}></div>
            <div className="hero-gradient"></div>
            <div className="grain-overlay"></div>
          </div>
          <div className="hero-content">
            <span className="hero-badge">Independent & Autonomous</span>
            <h1 className="hero-title">
              THE CORE <span className="hero-title-accent">SEVEN</span>
            </h1>
            <p className="hero-description">
              Shaping the future of culture and emerging tech through creator-first initiatives by <span className="hero-dora">DoraDAO</span>.
            </p>
            <div className="hero-buttons">
              <button className="btn-explore">Explore Programs</button>
              <button className="btn-manifesto">Read the Manifesto</button>
            </div>
          </div>
        </div>

        {/* Info Action Panel */}
        <div className="info-panel">
          <div className="info-content">
            <h3 className="info-title">
              <span className="material-symbols-outlined">auto_awesome</span>
              Independent Nature
            </h3>
            <p className="info-description">
              Each of our 7 core initiatives operates independently to foster specific sub-cultures within the emerging tech landscape. We don't believe in silos, we believe in <span className="info-italic">sovereignty</span>.
            </p>
          </div>
          <button className="btn-learn-more">LEARN MORE</button>
        </div>

        {/* Section Header */}
        <div className="section-header">
          <div className="header-left">
            <h2 className="section-title">The 7 DoraDAO Programs</h2>
            <p className="section-subtitle">Curated tracks designed to elevate every type of creator in the ecosystem.</p>
          </div>
          <div className="header-right">
            <span className="active-badge">7 active programs</span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {programs.map((program) => (
            <Link 
              key={program.id} 
              to={`/programs/program-${program.id}`}
              className={`program-card program-card-${program.id} program-span-${program.span} program-aspect-${program.aspect}`}
            >
              <div className="program-image" style={{ backgroundImage: `url('${program.image}')` }}></div>
              <div className="program-gradient"></div>
              <div className="program-content">
                <div>
                <span className={`program-badge ${
                  program.id === 2 || program.id === 6
                    ? 'badge-light' 
                    : program.id === 4
                    ? 'badge-white' 
                    : 'badge-primary'
                }`}>
                  {program.audience}
                </span>
                  <h4 className="program-name">{program.name}</h4>
                  {program.description && (
                    <p className="program-desc">{program.description}</p>
                  )}
                  {program.hasButton && program.id !== 1 && (
                    <button className="program-view-btn">
                      View Program <span className="material-symbols-outlined">north_east</span>
                    </button>
                  )}
                </div>
                {program.id === 1 && (
                  <button className="program-arrow-btn">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Programs;
