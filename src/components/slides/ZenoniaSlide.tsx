import YouTubeBackground from '../YouTubeBackground';

const ZenoniaSlide = () => {
  // 유튜브 동영상 ID 설정 (예: https://www.youtube.com/watch?v=VIDEO_ID)
  const YOUTUBE_VIDEO_ID = 'jNQXAC9IVRw'; // 원하는 유튜브 동영상 ID로 변경하세요
  
  return (
    <>
      <YouTubeBackground videoId={YOUTUBE_VIDEO_ID} />
      <div className="slide-content" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
        <h2>⚔️ 제노니아 (Zenonia)</h2>
      
      <div style={{ 
        background: 'rgba(247, 250, 252, 0.8)', 
        padding: '15px', 
        borderRadius: '10px',
        marginBottom: '15px'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          <strong>Full 3D MMORPG</strong> 프로젝트의 C++ 서버 개발 담당<br />
          수천 명 이상의 동시 접속 환경을 위한 <strong>고성능 멀티스레드 서버 아키텍처</strong> 구현
        </p>
      </div>

      <div className="highlight-item">
        <h4>1️⃣ 멀티스레드 환경 데이터 정합성 확보 및 성능 최적화</h4>
        <p>
          <strong>Job 직렬화를 통한 순서 보장 및 Deadlock 방지</strong>
        </p>
        <ul>
          <li>플레이어 단위의 <strong>Job Queue를 활용한 JobSerializer 독자 설계 및 구현</strong></li>
          <li>아이템 강화, 재화 소모 등 순서 보장 필수 작업 직렬화</li>
          <li>복잡한 Lock 제어 없이 데이터 무결성 확보, <strong>데드락 발생 원천 차단</strong></li>
          <li>공유 데이터 접근 영역에 <strong>Spin-Lock 적용</strong>으로 컨텍스트 스위칭 최소화</li>
        </ul>
      </div>

      <div className="highlight-item">
        <h4>2️⃣ 이벤트 기반 시스템 설계로 콘텐츠 개발 생산성 향상</h4>
        <p>
          <strong>CommonObjective System (이벤트 기반 공통 목표 시스템)</strong>
        </p>
        <ul>
          <li>퀘스트, 업적, 이벤트 등이 동일 유저 행동 중복 추적하는 문제 해결</li>
          <li><strong>Publish-Subscribe 패턴</strong>으로 느슨한 결합 구조 구현</li>
          <li>신규 콘텐츠 추가 시 기존 코드 의존성 제거</li>
          <li><strong>개발 생산성 50% 이상 향상</strong></li>
        </ul>
      </div>

      <div className="highlight-item">
        <h4>3️⃣ 대규모 라이브 서비스 데이터 마이그레이션 주도</h4>
        <ul>
          <li>서버 이전 및 월드 통합 프로젝트 주도</li>
          <li>수백만 유저, <strong>수십억 건 데이터 무결점 이전</strong></li>
          <li><strong>Python 기반 검증 및 마이그레이션 툴 개발</strong></li>
          <li>서비스 중단 시간 <strong>목표 대비 70% 수준으로 단축</strong></li>
        </ul>
      </div>

      <div className="highlight-item">
        <h4>4️⃣ 핵심 게임 시스템 및 라이브 운영툴 개발</h4>
        <ul>
          <li><strong>MMORPG 핵심 경제 시스템:</strong> 아이템 강화, 합성, 제작, 재련 등</li>
          <li><strong>서버 간 비동기 통신:</strong> RabbitMQ로 C# 운영툴과 C++ 게임 서버 중계</li>
          <li>운영 명령으로 인한 게임 서버 부하 최소화</li>
        </ul>
      </div>

      <div className="tech-stack">
        <span className="tech-badge">C++</span>
        <span className="tech-badge">Python</span>
        <span className="tech-badge">C#</span>
        <span className="tech-badge">MySQL</span>
        <span className="tech-badge">RabbitMQ</span>
        <span className="tech-badge">EFK Stack</span>
        <span className="tech-badge">Jenkins</span>
        <span className="tech-badge">SVN</span>
      </div>
      </div>
    </>
  );
};

export default ZenoniaSlide;

