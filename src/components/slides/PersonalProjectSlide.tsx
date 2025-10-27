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
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginTop: 0, marginBottom: '10px' }}>
          🪙 인코픽 (Incopick) - AI 기반 코인 추천 서비스
        </h3>
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
        >
          https://incopick.com
        </a>
      </div>

      <div className="project-section">
        <h4>프로젝트 개요</h4>
        <p>
          Google Gemini API를 활용하여 코인 관련 뉴스를 수집/분석하고, 자체 알고리즘을 통해 매일 투자 가치가 높은 코인과 낮은 코인을 추천하는 웹 서비스입니다.
          게임 데이터 분석 및 추천 시스템에 적용 가능한 AI 백엔드 기술을 실험적으로 적용한 프로젝트로, AI 기반 게임 운영 자동화에도 응용 가능한 구조입니다.
        </p>
      </div>

      <div className="project-section">
        <h4>주요 기능 및 로직</h4>
        <ul>
          <li><strong>AI 뉴스 분석</strong>: Google Gemini API를 통해 매일 최신 뉴스를 크롤링 및 AI 분석하여 요약 리포트 생성</li>
          <li><strong>AI 코인 추천</strong>: Gemini 2.5 Pro 기반으로 생성된 추천 알고리즘을 통해 매일 상위 5개, 하위 5개 코인 추천</li>
          <li><strong>코드 리뷰 시스템</strong>: 커밋되는 코드를 AI 리뷰를 통해 코드 품질을 보장하고 버그 발생을 최소화</li>
        </ul>
      </div>

      <div className="project-section">
        <h4>적용 기술</h4>
        <div className="tech-stack">
          <span className="tech-badge-category">Frontend</span>
          <span className="tech-badge">React (Node.js)</span>
          <br/>
          <span className="tech-badge-category">Backend</span>
          <span className="tech-badge">Python (FastAPI)</span>
          <br/>
          <span className="tech-badge-category">DB</span>
          <span className="tech-badge">PostgreSQL</span>
          <br/>
          <span className="tech-badge-category">DevOps</span>
          <span className="tech-badge">Docker (docker-compose)</span>
          <span className="tech-badge">Ubuntu (AWS)</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectSlide;

