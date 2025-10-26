const OverviewSlide = () => {
  return (
    <div className="slide-content">
      <h2>📋 개요</h2>
      
      <div style={{ display: 'flex', gap: '30px', marginBottom: '20px', alignItems: 'flex-start' }}>
        {/* 증명사진 영역 */}
        <div style={{
          flex: '0 0 180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
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
          padding: '18px', 
          borderRadius: '12px',
          marginBottom: '15px',
          borderLeft: '4px solid #FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ color: '#FFFFFF', marginTop: 0, fontSize: '1.1rem', fontWeight: 600 }}>👤 기본 정보</h3>
          <ul className="no-bullet-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ paddingLeft: 0, marginBottom: '8px', position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>이름:</strong> 최진우
            </li>
            <li style={{ paddingLeft: 0, marginBottom: '8px', position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>생년월일:</strong> 1992년 11월 3일
            </li>
            <li style={{ paddingLeft: 0, marginBottom: '8px', position: 'relative' }}>
              <strong style={{ color: '#FFFFFF' }}>소속:</strong> Com2us (책임, 8년 차)
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
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '12px',
        color: 'white',
        border: '2px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{ color: '#FFFFFF', marginTop: 0, fontSize: '1.1rem', fontWeight: 600 }}>💼 전문성</h3>
        <p style={{ color: '#FFFFFF', lineHeight: '1.7', fontSize: '0.95rem' }}>
          8년 경력의 게임 서버 프로그래머입니다. 대규모 트래픽을 안정적으로 처리하는 
          <strong> UGC 소셜 게임</strong>부터 <strong>고성능 MMORPG 서버 개발</strong>까지 
          다양한 장르의 라이브 서비스 경험을 보유하고 있습니다.
        </p>
        <p style={{ color: '#FFFFFF', lineHeight: '1.7', fontSize: '0.95rem' }}>
          <strong>PHP, Golang, C++</strong> 등 다양한 언어를 활용한 시스템 아키텍처 설계에 능숙하며, 
          <strong> Docker, Jenkins</strong> 등을 활용한 DevOps 환경 구축 및 
          <strong> CI/CD 파이프라인 자동화</strong>를 통해 개발 생산성과 서비스 안정성을 
          동시에 확보한 경험이 있습니다.
        </p>
      </div>
    </div>
  );
};

export default OverviewSlide;

