const SkillsSlide = () => {
  const skills = [
    {
      title: 'Backend Development',
      items: ['C++', 'Python', 'PHP', 'Golang', 'Node.js'],
      icon: '💻',
      level: 'Expert',
      color: '#667eea'
    },
    {
      title: 'Concurrency',
      items: ['멀티스레드', 'Lock-Free', 'Job Queue'],
      icon: '⚡',
      level: 'Expert',
      color: '#f093fb'
    },
    {
      title: 'Database & Storage',
      items: ['MySQL', 'Redis', 'Memcached', 'PostgreSQL'],
      icon: '💾',
      level: 'Advanced',
      color: '#4facfe'
    },
    {
      title: 'DevOps & CI/CD',
      items: ['Docker', 'Jenkins', 'Nginx', 'Supervisor'],
      icon: '🚀',
      level: 'Advanced',
      color: '#43e97b'
    },
    {
      title: 'Monitoring & Logging',
      items: ['Grafana', 'EFK Stack', 'nGrinder'],
      icon: '📊',
      level: 'Intermediate',
      color: '#fa709a'
    },
    {
      title: 'Message Queue',
      items: ['RabbitMQ'],
      icon: '📨',
      level: 'Advanced',
      color: '#ffecd2'
    }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Expert': return '#63e2b7';
      case 'Advanced': return '#4facfe';
      case 'Intermediate': return '#fa709a';
      default: return '#ffffff';
    }
  };

  return (
    <div className="slide-content" style={{ maxWidth: '1200px' }}>
      <h2>🛠️ 핵심 기술 스택</h2>
      
      <div className="skills-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
              padding: '25px',
              borderRadius: '15px',
              color: 'white',
              border: `2px solid ${skill.color}40`,
              boxShadow: `0 8px 25px ${skill.color}30`,
              transition: 'all 0.3s ease',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 12px 35px ${skill.color}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 8px 25px ${skill.color}30`;
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>
                {skill.icon}
              </div>
              <div style={{
                background: getLevelColor(skill.level),
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {skill.level}
              </div>
            </div>
            
            <h4 style={{
              fontSize: '1.2rem',
              marginBottom: '15px',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {skill.title}
            </h4>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {skill.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  style={{
                    background: `${skill.color}30`,
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    border: `1px solid ${skill.color}60`
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: '40px',
        padding: '20px',
        background: 'linear-gradient(135deg, rgba(99, 226, 183, 0.1), rgba(99, 226, 183, 0.05))',
        borderRadius: '15px',
        border: '2px solid rgba(99, 226, 183, 0.3)',
        textAlign: 'center'
      }}>
        <p style={{ 
          color: '#63e2b7', 
          fontSize: '1.1rem', 
          fontWeight: 'bold',
          margin: 0 
        }}>
          💡 8년간 다양한 프로젝트를 통해 검증된 기술 역량
        </p>
      </div>
    </div>
  );
};

export default SkillsSlide;

