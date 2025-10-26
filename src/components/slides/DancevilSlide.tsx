import YouTubeBackground from '../YouTubeBackground';

const DancevilSlide = () => {
  // 유튜브 동영상 ID 설정 (예: https://www.youtube.com/watch?v=VIDEO_ID)
  const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ'; // 원하는 유튜브 동영상 ID로 변경하세요
  
  return (
    <>
      <YouTubeBackground videoId={YOUTUBE_VIDEO_ID} />
      <div className="slide-content" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
        <h2>🎵 댄스빌 (Dancevil)</h2>
      
      <div style={{ 
        background: 'rgba(247, 250, 252, 0.8)', 
        padding: '15px', 
        borderRadius: '10px',
        marginBottom: '15px'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          유저가 직접 음악과 뮤직비디오를 제작하고 공유하는 <strong>UGC 기반 모바일 소셜 게임</strong>
        </p>
      </div>

      <div className="highlight-item">
        <h4>1️⃣ 고성능 실시간 서버 및 백엔드 시스템</h4>
        <p>
          <strong>PHP(API)와 Golang(Socket)을 조합한 하이브리드 아키텍처 설계</strong>
        </p>
        <ul>
          <li>복잡한 비즈니스 로직은 PHP(Yaf 프레임워크)로 구현하여 개발 속도 확보</li>
          <li>실시간 채팅, 멀티플레이 등은 Golang TCP 소켓 서버로 성능 극대화</li>
          <li>Redis Pub/Sub과 내부 API로 데이터 정합성 보장</li>
        </ul>
      </div>

      <div className="highlight-item">
        <h4>2️⃣ 메시지 큐 기반 비동기 UGC 처리 파이프라인</h4>
        <ul>
          <li>Scribe와 Redis를 메시지 큐로 활용하여 무거운 인코딩 작업 분리</li>
          <li>UGC 트래픽 급증 시에도 <strong>API 응답 속도 평균 100ms 이하 유지</strong></li>
          <li>서비스 전체 안정성 크게 향상</li>
        </ul>
      </div>

      <div className="highlight-item">
        <h4>3️⃣ Golang 기반 실시간 번역 마이크로서비스</h4>
        <ul>
          <li>Google Translate API 연동한 실시간 채팅 번역 서버 (Echo 프레임워크)</li>
          <li>Redis 캐시로 <strong>API 호출 수 최대 80% 감소, 비용 절감</strong></li>
          <li>평균 응답 속도 <strong>50ms까지 단축</strong></li>
        </ul>
      </div>

      <div className="highlight-item">
        <h4>4️⃣ DevOps 환경 구축 및 자동화</h4>
        <ul>
          <li><strong>Docker 기반 개발 환경 표준화</strong> - 온보딩 기간 3일 → 반나절</li>
          <li><strong>Capistrano + Jenkins CI/CD</strong> - 버튼 클릭으로 무중단 배포</li>
          <li><strong>Grafana 모니터링</strong> - 실시간 지표 확인 및 Slack 알림</li>
          <li><strong>nGrinder 부하 테스트</strong> - 사전 병목 구간 최적화</li>
        </ul>
      </div>

      <div className="tech-stack">
        <span className="tech-badge">PHP</span>
        <span className="tech-badge">Golang</span>
        <span className="tech-badge">Node.js</span>
        <span className="tech-badge">MySQL</span>
        <span className="tech-badge">Redis</span>
        <span className="tech-badge">Docker</span>
        <span className="tech-badge">Jenkins</span>
        <span className="tech-badge">Grafana</span>
        <span className="tech-badge">Nginx</span>
        <span className="tech-badge">Scribe</span>
      </div>
      </div>
    </>
  );
};

export default DancevilSlide;

