const SkillsSlide = () => {
  const skills = [
    {
      title: 'Backend Development',
      items: 'PHP, Golang(Go), C++, Python, Node.js',
      icon: '💻'
    },
    {
      title: 'Architecture',
      items: '하이브리드 아키텍처, 마이크로서비스(MSA), 이벤트 기반 시스템',
      icon: '🏗️'
    },
    {
      title: 'Concurrency',
      items: '멀티스레드 프로그래밍, 동시성 제어 (Lock-Free, Job Queue)',
      icon: '⚡'
    },
    {
      title: 'Database & Storage',
      items: 'MySQL, Redis, Memcached, PostgreSQL',
      icon: '💾'
    },
    {
      title: 'DevOps & CI/CD',
      items: 'Docker, Jenkins, Capistrano, Nginx, Supervisor',
      icon: '🚀'
    },
    {
      title: 'Monitoring & Logging',
      items: 'Grafana, EFK Stack (Elasticsearch, Fluentd, Kibana), nGrinder',
      icon: '📊'
    },
    {
      title: 'Message Queue',
      items: 'RabbitMQ, Scribe',
      icon: '📨'
    }
  ];

  return (
    <div className="slide-content" style={{ maxWidth: '1000px' }}>
      <h2>🛠️ 주요 역량</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '12px',
        marginTop: '20px'
      }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
              padding: '15px',
              borderRadius: '12px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              transition: 'transform 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
              {skill.icon}
            </div>
            <h4 style={{
              fontSize: '1rem',
              marginBottom: '8px',
              color: 'white',
              borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
              paddingBottom: '5px'
            }}>
              {skill.title}
            </h4>
            <p style={{
              fontSize: '0.8rem',
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.95)',
              margin: 0
            }}>
              {skill.items}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSlide;

