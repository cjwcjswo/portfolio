const AboutSlide = () => {
  return (
    <div className="slide-content">
      <h2>👤 About</h2>
      
      <div className="about-container" style={{ display: 'flex', gap: '30px', marginBottom: '20px', alignItems: 'flex-start' }}>
        {/* 증명사진 영역 */}
        <div style={{
          flex: '0 0 180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div className="profile-image" style={{
            width: '180px',
            height: '240px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
            marginBottom: '10px'
          }}>
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="증명사진"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
          <p style={{ 
            fontSize: '12px', 
            color: '#FFFFFF', 
            textAlign: 'center',
            margin: 0,
            fontWeight: 600
          }}>
            최진우
          </p>
        </div>

        {/* 기본 정보 영역 */}
        <div style={{ flex: '1' }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          padding: 'clamp(12px, 3vw, 18px)', 
          borderRadius: '12px',
          marginBottom: '15px',
          borderLeft: '4px solid #FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}>
          <h3 style={{ color: '#FFFFFF', marginTop: 0, fontSize: '1.1rem', fontWeight: 600 }}>👤 기본 정보</h3>
          <ul className="no-bullet-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ paddingLeft: 0, marginBottom: '8px', position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>이름:</strong> 최진우
            </li>
            <li style={{ paddingLeft: 0, marginBottom: '8px', position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>생년월일:</strong> 1992.11.03
            </li>
            <li style={{ paddingLeft: 0, marginBottom: '8px', position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>직무 & 경력:</strong> 책임, 8년차
            </li>
            <li style={{ paddingLeft: 0, marginBottom: '8px', position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>Blog:</strong>{' '}
              <a 
                href="https://cjwoov.tistory.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#FFFFFF', textDecoration: 'underline' }}
              >
                https://cjwoov.tistory.com
              </a>
            </li>
            <li style={{ paddingLeft: 0, position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>GitHub:</strong>{' '}
              <a 
                href="https://github.com/cjwcjswo" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#FFFFFF', textDecoration: 'underline' }}
              >
                https://github.com/cjwcjswo
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, rgba(99, 226, 183, 0.1), rgba(99, 226, 183, 0.05))',
        padding: '25px',
        borderRadius: '15px',
        color: 'white',
        border: '2px solid rgba(99, 226, 183, 0.3)',
        boxShadow: '0 0 20px rgba(99, 226, 183, 0.2)'
      }}>
        <h3 style={{ color: '#63e2b7', marginTop: 0, fontSize: '1.3rem', fontWeight: 600, marginBottom: '20px' }}>💡 핵심 역량</h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h4 style={{ color: '#63e2b7', margin: '0 0 15px 0', fontSize: '1.1rem' }}>🎮 게임 서버 개발</h4>
            <p style={{ color: '#FFFFFF', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
              <strong>MMORPG & UGC 소셜 게임</strong><br/>
              수천 명 동시 접속 환경의 고성능 서버 아키텍처 설계 및 구현
            </p>
          </div>
          
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h4 style={{ color: '#63e2b7', margin: '0 0 15px 0', fontSize: '1.1rem' }}>⚡ 기술 스택</h4>
            <p style={{ color: '#FFFFFF', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
              <strong>PHP, Golang, C++</strong><br/>
              Docker, Jenkins 기반 DevOps & CI/CD 파이프라인 구축
            </p>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          background: 'rgba(99, 226, 183, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(99, 226, 183, 0.3)'
        }}>
          <p style={{ color: '#FFFFFF', lineHeight: '1.6', fontSize: '1rem', margin: 0, textAlign: 'center', fontWeight: 'bold' }}>
            "8년간 다양한 장르의 라이브 서비스를 통해 검증된 안정성과 성능을 제공합니다"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;

