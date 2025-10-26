import { useState, useEffect } from 'react';
import './App.css';
import PixelBackground from './components/PixelBackground';
import IntroSlide from './components/slides/IntroSlide';
import OverviewSlide from './components/slides/OverviewSlide';
import SkillsSlide from './components/slides/SkillsSlide';
import DancevilSlide from './components/slides/DancevilSlide';
import ZenoniaSlide from './components/slides/ZenoniaSlide';
import PersonalProjectSlide from './components/slides/PersonalProjectSlide';
import ContactSlide from './components/slides/ContactSlide';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    <IntroSlide key={0} />,
    <OverviewSlide key={1} />,
    <SkillsSlide key={2} />,
    <DancevilSlide key={3} />,
    <ZenoniaSlide key={4} />,
    <PersonalProjectSlide key={5} />,
    <ContactSlide key={6} />,
  ];

  return (
    <div className="app">
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

      {/* 네비게이션 도트 */}
      <div className="navigation-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>

      {/* 화살표 네비게이션 */}
      <button
        className="nav-arrow left"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
        disabled={currentSlide === 0}
      >
        ←
      </button>
      <button
        className="nav-arrow right"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
        disabled={currentSlide === totalSlides - 1}
      >
        →
      </button>
    </div>
  );
}

export default App;

