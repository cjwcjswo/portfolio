import { useState, useEffect, useCallback } from 'react';
import './App.css';
import PixelBackground from './components/PixelBackground';
import HubWorld from './components/HubWorld';
import IntroSlide from './components/slides/IntroSlide';
import AboutSlide from './components/slides/AboutSlide';
import SkillsSlide from './components/slides/SkillsSlide';
import ProjectsSlide from './components/slides/ProjectsSlide';
import PersonalProjectSlide from './components/slides/PersonalProjectSlide';

type Mode = 'hub' | 'slide';

function App() {
  const [mode, setMode] = useState<Mode>('hub');
  const [currentSlide, setCurrentSlide] = useState(-1);

  const slideTitles = ['Intro', 'About', '기술 스택', '참여 프로젝트', '개인 프로젝트'];
  const slides = [
    <IntroSlide key={0} />,
    <AboutSlide key={1} />,
    <SkillsSlide key={2} />,
    <ProjectsSlide key={3} />,
    <PersonalProjectSlide key={4} />,
  ];
  const totalSlides = slides.length;

  // Zone 이름을 슬라이드 인덱스로 매핑
  const zoneToSlideIndex: { [key: string]: number } = {
    'intro': 0,
    'about': 1,
    'skills': 2,
    'projects': 3,
    'personal': 4,
  };

  // 허브 월드에서 존 입장 시
  const handleZoneEnter = (zoneName: string) => {
    const slideIndex = zoneToSlideIndex[zoneName];
    if (slideIndex !== undefined) {
      setCurrentSlide(slideIndex);
      setMode('slide');
    }
  };

  // 허브 월드로 돌아가기
  const returnToHub = useCallback(() => {
    setMode('hub');
    setCurrentSlide(-1);
  }, []);

  useEffect(() => {
    // 슬라이드 모드에서만 키보드 이벤트 처리
    if (mode !== 'slide') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC로 허브 월드로 돌아가기
      if (e.key === 'Escape') {
        returnToHub();
        return;
      }

      // 슬라이드 모드에서 화살표 키로 슬라이드 이동
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, totalSlides, returnToHub]);

  return (
    <div className="app">
      {/* 허브 월드 모드 */}
      {mode === 'hub' && (
        <HubWorld onZoneEnter={handleZoneEnter} />
      )}

      {/* 슬라이드 모드 */}
      {mode === 'slide' && (
        <>
          {/* 전체 화면 배경 */}
          <PixelBackground />

          {/* 콘텐츠 영역 */}
          <div className="slide-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''} ${
                  index < currentSlide ? 'left' : index > currentSlide ? 'right' : ''
                }`}
              >
                {slide}
              </div>
            ))}
          </div>

          {/* 네비게이션 텍스트 */}
          <div className="navigation-texts">
            {slideTitles.map((title, index) => (
              <button
                key={index}
                className={`nav-text ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`${title} 슬라이드로 이동`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* 허브 월드로 돌아가기 버튼 */}
          <button
            onClick={returnToHub}
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              background: 'rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
              zIndex: 200,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
              e.currentTarget.style.borderColor = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            ← 허브 월드로 돌아가기 (ESC)
          </button>
        </>
      )}
    </div>
  );
}

export default App;

