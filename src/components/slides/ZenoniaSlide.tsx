import YouTubeBackground from '../YouTubeBackground';

const ZenoniaSlide = () => {
  return (
    <>
      <div>
        <h2>⚔️ 제노니아 : 크로노브레이크</h2>
        <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '15px' }}>
          서비스 기간: 2023.06.27 ~ 진행 중 | 개발 참여 기간: 2020.08.05 ~ 2025.10
        </div>

        <div className="project-section">
          <h4>프로젝트 개요</h4>
          <p>
            Full 3D MMORPG 프로젝트의 C++ 서버 개발을 담당, 수천 명 이상의 동시 접속 환경을 가정한 고성능 멀티스레드 서버 아키텍처를 구현했습니다.
          </p>
        </div>

        <div className="project-section">
          <h4>주요 역할 및 성과</h4>
          <div className="highlight-item">
            <h5>1. 멀티스레드 환경에서의 데이터 정합성 확보 및 성능 최적화</h5>
            <ul>
              <li><strong>Job 직렬화를 통한 순서 보장 및 Deadlock 방지</strong>: MMORPG의 고질적인 동시성 문제 해결을 위해, 플레이어 단위의 Job Queue를 활용한 JobSerializer를 독자적으로 설계 및 구현</li>
              <li>아이템 강화, 재화 소모 등 순서 보장이 필수적인 작업을 직렬화하여, 복잡한 Lock 제어 없이 데이터 무결성을 확보하고 데드락 발생 가능성을 원천 차단</li>
              <li>그 외 공유 데이터 접근 영역에는 Spin-Lock을 적용하여 컨텍스트 스위칭 비용을 최소화하고 서버 성능을 최적화</li>
            </ul>
          </div>
          <div className="highlight-item">
            <h5>2. 이벤트 기반 시스템 설계를 통한 콘텐츠 개발 생산성 향상</h5>
            <ul>
              <li><strong>CommonObjective System (이벤트 기반 공통 목표 시스템) 설계</strong>: 퀘스트, 업적, 이벤트 등 각기 다른 콘텐츠가 '몬스터 10마리 사냥'과 같은 동일한 유저 행동을 중복 추적하는 문제를 해결하기 위해, 이벤트 기반의 메시지 전달 시스템을 설계</li>
              <li>플레이어의 모든 행동을 이벤트로 발행(Publish)하고 각 콘텐츠가 이를 구독(Subscribe)하는 느슨한 결합(Loosely Coupled) 구조를 구현하여 신규 콘텐츠 추가 시 기존 코드 의존성을 제거하고 개발 생산성을 50% 이상 향상</li>
            </ul>
          </div>
          <div className="highlight-item">
            <h5>3. 대규모 라이브 서비스 데이터 마이그레이션 주도</h5>
            <ul>
                <li><strong>캐릭터 및 기사단 사전 예약 & 생성, IDP 계정 데이터 이전</strong>: 대규모 HIVE API 호출 및 DB 작업이 필요한 부분을 병렬처리하여 100만건 이상의 데이터를 2시간 이내에 처리</li>
                <li><strong>서버 이전 및 통합 유틸리티 개발</strong>: 라이브 서비스의 민감한 작업인 서버 이전 및 월드 통합을 주도하며 수백만 유저의 캐릭터, 아이템, 길드 등 수십억 건의 데이터를 무결점 이전하기 위해 Python 기반의 데이터 검증 및 마이그레이션 툴을 직접 개발</li>
                <li>사전 시뮬레이션과 최적화를 통해, 실제 작업 시 서비스 중단 시간을 목표의 70% 수준으로 단축하며 성공적으로 프로젝트를 완료</li>
            </ul>
          </div>
          <div className="highlight-item">
            <h5>4. EFK Stack 기반 중앙 집중식 로그 시스템 구축</h5>
            <ul>
                <li>분산된 대규모 C++ 월드 서버 환경에서 발생하는 막대한 양의 로그를 실시간으로 수집, 처리, 분석하기 위해 EFK(Elasticsearch, Fluentd, Kibana) 스택을 구축</li>
                <li><strong>Fluent-bit (Log Collector)</strong>: 각 월드 서버 호스트에 배포하여 로그를 수집. CPU, 메모리 사용량이 매우 낮은 경량 에이전트로, 게임 서버 성능에 미치는 영향을 최소화하면서 안정적인 로그 전송을 보장</li>
                <li><strong>Fluentd (Log Aggregator)</strong>: 중앙 로그 서버에서 Fluent-bit로부터 전송된 로그를 취합, 버퍼링, 파싱하는 역할을 담당. 풍부한 플러그인을 활용해 로그를 정규화하고 Elasticsearch로 안정적으로 라우팅</li>
                <li><strong>Elasticsearch (Storage & Search)</strong>: 수집된 대용량 로그를 저장하고 색인하는 분산 검색 엔진으로 활용. 복잡한 조건의 로그도 수초 내에 검색 가능</li>
                <li><strong>Kibana (Visualization)</strong>: Elasticsearch에 저장된 데이터를 시각화하는 대시보드를 구축. 이를 통해 에러 발생 빈도, 특정 유저 행동 로그, 서버 성능 지표 등을 실시간으로 모니터링하여, 장애 발생 시 신속한 원인 파악 및 대응이 가능하도록 시스템을 완성</li>
            </ul>
          </div>
        </div>

        <div className="project-section">
          <h4>적용 기술</h4>
          <div className="tech-stack">
            <span className="tech-badge-category">Backend</span>
            <span className="tech-badge">C++(Game Server)</span>
            <span className="tech-badge">Python(Utility)</span>
            <span className="tech-badge">C#(Admin Tool)</span>
            <br />
            <span className="tech-badge-category">DB & Storage</span>
            <span className="tech-badge">MySQL</span>
            <br />
            <span className="tech-badge-category">Message Queue</span>
            <span className="tech-badge">RabbitMQ</span>
            <br />
            <span className="tech-badge-category">Logging (EFK Stack)</span>
            <span className="tech-badge">Fluent-bit</span>
            <span className="tech-badge">Fluentd</span>
            <span className="tech-badge">Elasticsearch</span>
            <span className="tech-badge">Kibana</span>
            <br />
            <span className="tech-badge-category">DevOps</span>
            <span className="tech-badge">SVN</span>
            <span className="tech-badge">Jenkins</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZenoniaSlide;

