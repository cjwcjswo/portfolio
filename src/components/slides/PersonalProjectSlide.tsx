const PersonalProjectSlide = () => {
  return (
    <div className="slide-content">
      <h2>💡 개인 프로젝트</h2>
      
      <div style={{
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
        padding: '25px',
        borderRadius: '15px',
        color: 'white',
        marginBottom: '20px',
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <h3 style={{ color: 'white', fontSize: '1.5rem', marginTop: 0, marginBottom: '10px' }}>
            🪙 인코픽 (Incopick)
          </h3>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.95)', 
            fontSize: '1.1rem', 
            fontWeight: '600',
            marginBottom: '12px'
          }}>
            AI 기반 코인 추천 서비스
          </p>
          <a 
            href="https://incopick.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#667eea',
              padding: '12px 30px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            🔗 https://incopick.com
          </a>
        </div>
      </div>

      <div style={{ 
        background: 'rgba(247, 250, 252, 0.8)', 
        padding: '18px', 
        borderRadius: '12px',
        marginBottom: '15px'
      }}>
        <h3 style={{ color: '#2d3748', marginTop: 0, fontSize: '1.1rem' }}>📝 개요</h3>
        <p style={{ lineHeight: '1.6', margin: 0, fontSize: '0.9rem' }}>
          <strong>Google Gemini API</strong>를 활용하여 코인 관련 뉴스를 수집/분석하고, 
          자체 알고리즘을 통해 매일 투자 가치가 높은 코인과 낮은 코인을 추천하는 웹 서비스
        </p>
      </div>

      <div className="highlight-item">
        <h4>🤖 AI 뉴스 분석</h4>
        <p>
          Google Gemini API를 통해 매일 최신 뉴스를 크롤링 및 AI 분석하여 요약 리포트 생성
        </p>
      </div>

      <div className="highlight-item">
        <h4>📊 AI 코인 추천</h4>
        <p>
          Gemini 2.5 Pro 기반 추천 알고리즘으로 매일 상위 5개, 하위 5개 코인 추천
        </p>
      </div>

      <div className="tech-stack">
        <span className="tech-badge">React</span>
        <span className="tech-badge">Node.js</span>
        <span className="tech-badge">Python</span>
        <span className="tech-badge">FastAPI</span>
        <span className="tech-badge">PostgreSQL</span>
        <span className="tech-badge">Docker</span>
        <span className="tech-badge">AWS</span>
        <span className="tech-badge">Google Gemini AI</span>
      </div>
    </div>
  );
};

export default PersonalProjectSlide;

