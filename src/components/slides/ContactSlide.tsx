const ContactSlide = () => {
  return (
    <div className="slide-content">
      <h2 style={{ textAlign: 'center' }}>📬 연락처</h2>
      
      <div style={{
        textAlign: 'center',
        marginTop: '50px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '50px',
          borderRadius: '20px',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h3 style={{ 
            color: 'white', 
            fontSize: '2rem', 
            marginTop: 0,
            marginBottom: '20px'
          }}>
            함께 일하고 싶으신가요?
          </h3>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.95)', 
            fontSize: '1.2rem',
            lineHeight: '1.8',
            margin: 0
          }}>
            8년간의 게임 서버 개발 경험과<br />
            열정으로 여러분의 프로젝트에 기여하겠습니다
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '40px'
        }}>
          <a
            href="https://github.com/cjwcjswo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>💻</span>
            GitHub
          </a>

          <a
            href="https://cjwoov.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📝</span>
            Blog
          </a>
        </div>

        <div style={{
          marginTop: '60px',
          padding: '30px',
          background: '#f7fafc',
          borderRadius: '15px'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#4a5568',
            lineHeight: '1.8',
            margin: 0
          }}>
            <strong style={{ color: '#667eea' }}>이름:</strong> 최진우<br />
            <strong style={{ color: '#667eea' }}>소속:</strong> Com2us (책임, 8년 차)<br />
            <strong style={{ color: '#667eea' }}>전문분야:</strong> 게임 서버 개발, 시스템 아키텍처, DevOps
          </p>
        </div>

        <div style={{ 
          marginTop: '40px', 
          fontSize: '0.95rem', 
          color: '#a0aec0' 
        }}>
          <p>포트폴리오를 봐주셔서 감사합니다! 🎮</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSlide;

