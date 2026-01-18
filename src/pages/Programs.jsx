import { Link } from 'react-router-dom';
import './Programs.css';

function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Girls Who Yap Conference',
      description: 'A flagship, creator-first conference bringing together women across India to explore culture, community, and emerging technology in a safe, non-intimidating space.',
      audience: 'Women creators, founders, storytellers, community builders',
      image: 'https://www.notion.so/image/attachment%3Aa26605a1-477b-4a63-96fe-707f986d41f4%3AGWY_CONF-2.png?table=block&id=2ded8cf9-6e75-8183-bd25-f1ebaa1c7f99&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2',
      span: 8,
      aspect: '16/9',
      hasButton: true
    },
    {
      id: 2,
      name: 'Girls Who Yap (Community Program)',
      description: 'An ongoing community layer beyond the conference — focused on conversations, collaboration, visibility, leadership, and women-led ideas.',
      audience: 'Women creators at any stage',
      image: 'https://www.notion.so/image/attachment%3A5b69da9f-fd2f-471c-bf4a-ddd916d56737%3ABeige_and_Red_Orange_Modern_Project_Proposal_Presentation-3.png?id=2ded8cf9-6e75-815b-bb86-f79c31c4c90a&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2',
      span: 4,
      aspect: 'square',
      hasButton: false
    },
    {
      id: 3,
      name: 'DoraHacks',
      description: 'Hackathons and build-sprints designed to connect Indian talent with global Web3, AI, and open-innovation opportunities.',
      audience: 'Builders, developers, early-stage experimenters',
      image: 'https://www.notion.so/image/attachment%3A4113cb3a-ac01-45f4-83f5-7d69e84d0714%3AGIRLS_WHO_YAP-3.png?id=2ded8cf9-6e75-8156-a19e-ff97a7fa27aa&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2',
      span: 4,
      aspect: '4/5',
      hasButton: true
    },
    {
      id: 4,
      name: 'W3M (Web3 Meets AI)',
      description: 'A knowledge-first initiative exploring the intersection of AI × Web3, focusing on experimentation, research, and emerging use cases.',
      audience: 'Researchers, advanced builders, technical explorers',
      image: 'https://www.notion.so/image/attachment%3A143d8827-68d9-4b51-973b-6834fbf76052%3ABeige_and_Red_Orange_Modern_Project_Proposal_Presentation.png?id=2ded8cf9-6e75-813a-9309-c356d557c341&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2',
      span: 4,
      aspect: '4/5',
      hasButton: true
    },
    {
      id: 5,
      name: 'Open Source & Public Goods',
      description: 'An initiative focused on open-source projects, public goods, and community-led tooling, encouraging ownership and long-term contribution.',
      audience: 'Contributors, developers, ecosystem builders',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1960&q=80',
      span: 4,
      aspect: '4/5',
      hasButton: true
    },
    {
      id: 6,
      name: 'Podcast & Spotlights',
      description: 'A storytelling and visibility program highlighting real journeys, experiments, and ecosystem insights through podcasts, interviews, and creator spotlights.',
      audience: 'Creators, founders, community leaders',
      image: 'https://www.notion.so/image/attachment%3Ad7fa826c-e785-49b9-88a4-82118386602d%3ACertificate_Of_Completetion.png?table=block&id=2dfd8cf9-6e75-8040-aecd-ca41c6952e37&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2',
      span: 6,
      aspect: 'video',
      hasButton: false
    },
    {
      id: 7,
      name: 'Build With DoraDAO (Ecosystem Experiments)',
      description: 'A sandbox for new initiatives, pilots, and collaborations — allowing DoraDAO to experiment, validate, and scale ideas with the community.',
      audience: 'Early-stage founders, community builders, partners',
      image: 'https://www.notion.so/image/attachment%3Ade3dbafe-7e3a-47ef-b6f4-9204d8922a38%3ADeck-4.png?id=2ded8cf9-6e75-8112-b918-f125c4d7e21b&table=block&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=1960&userId=&cache=v2',
      span: 6,
      aspect: 'video',
      hasButton: false
    }
  ];

  return (
    <div className="programs-page">
      <main className="programs-main">
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
              to="/programs"
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
