import YouTubeBackground from '../YouTubeBackground';

const DancevilSlide = () => {
  return (
    <>
      <div>
        <h2>🎵 댄스빌 (Dancevil)</h2>
        <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '15px' }}>
          서비스 기간: 2019.01.09 ~ 2020.08.31 | 개발 참여 기간: 2018.08.27 ~ 2020.08.05
        </div>

        <div className="project-section">
          <h4>프로젝트 개요</h4>
          <p>
            유저가 직접 음악과 뮤직비디오를 제작하고 공유하는 UGC(User-Generated Content) 기반의 모바일 소셜 게임입니다.
          </p>
          
          {/* 유튜브 영상 */}
          <div style={{ 
            marginTop: '20px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h5 style={{ color: '#63e2b7', marginBottom: '15px', fontSize: '1.1rem' }}>
              🎮 게임 플레이 영상
            </h5>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
              aspectRatio: '16/9',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/756eY2-MmQs?si=nAgXHFQuS6uwenZQ"
                title="Dancevil 게임 플레이 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              ></iframe>
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '0.9rem', 
              marginTop: '10px',
              fontStyle: 'italic'
            }}>
              댄스빌 게임의 실제 플레이 모습을 확인해보세요
            </p>
          </div>
        </div>

        <div className="project-section">
          <h4>주요 역할 및 성과</h4>
          <div className="highlight-item">
            <h5>1. 고성능 실시간 서버 및 백엔드 시스템 설계, 개발</h5>
            <ul>
              <li>PHP(API)와 Golang(Socket)을 조합한 하이브리드 아키텍처 설계</li>
              <li>복잡한 비즈니스 로직은 생산성이 높은 PHP로 구현하여 개발 속도를 확보</li>
              <li>실시간 채팅, 멀티플레이 등 동시성 처리가 필요한 기능은 Golang TCP 소켓 서버로 구현하여 서버 성능을 극대화</li>
              <li>두 서버 간 데이터 정합성은 Redis Pub/Sub과 내부 API 호출을 통해 보장하여 역할과 책임을 명확히 분리</li>
            </ul>
          </div>
          <div className="highlight-item">
            <h5>2. 안정적인 라이브 서비스 운영을 위한 DevOps 환경 구축</h5>
            <ul>
                <li><strong>Docker 기반 개발/운영 환경 표준화</strong>: docker-compose를 활용하여 개발 환경을 컨테이너화하여 신규 입사자의 온보딩 기간을 3일에서 반나절로 단축하고 로컬 환경 차이로 인한 버그를 원천적으로 제거</li>
                <li><strong>Capistrano, Jenkins를 활용한 배포 자동화 (CI/CD)</strong>: Capistrano 배포 스크립트를 작성하여 수십 대 서버의 배포 프로세스를 자동화하고 Jenkins 파이프라인과 연동하여 버튼 클릭 한 번으로 무중단 배포가 가능한 시스템을 구축</li>
                <li><strong>데이터 기반의 선제적 장애 대응 및 성능 모니터링</strong>: Grafana 대시보드를 구축하여 API 응답 시간, 에러율 등 핵심 지표를 실시간 모니터링하고, 임계치 초과 시 Slack(Jandi) 알림을 구성하여 장애를 사전에 예측하고 대응하며 nGrinder를 이용한 주기적인 부하 테스트로 잠재적인 병목 구간을 사전에 식별 및 최적화하여, 대규모 이벤트 시에도 안정적인 서비스를 제공</li>
            </ul>
          </div>
        </div>

        <div className="project-section">
          <h4>적용 기술</h4>
          <div className="tech-stack">
            <span className="tech-badge-category">Backend</span>
            <span className="tech-badge">PHP</span>
            <span className="tech-badge">Go(Golang)</span>
            <span className="tech-badge">Node.js</span>
            <br/>
            <span className="tech-badge-category">DB & Storage</span>
            <span className="tech-badge">MySQL</span>
            <span className="tech-badge">Redis</span>
            <span className="tech-badge">Memcached</span>
            <br/>
            <span className="tech-badge-category">DevOps & Infra</span>
            <span className="tech-badge">Docker</span>
            <span className="tech-badge">Nginx</span>
            <span className="tech-badge">Supervisor</span>
            <span className="tech-badge">Capistrano</span>
            <span className="tech-badge">Jenkins</span>
            <span className="tech-badge">Scribe</span>
            <br/>
            <span className="tech-badge-category">Monitoring & Test</span>
            <span className="tech-badge">Grafana</span>
            <span className="tech-badge">nGrinder(Groovy)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DancevilSlide;

