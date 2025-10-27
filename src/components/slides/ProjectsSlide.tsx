import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ZenoniaSlide from './ZenoniaSlide';
import DancevilSlide from './DancevilSlide';

const ProjectsSlide = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const projects = [
    {
      id: 'zenonia',
      title: '⚔️ 제노니아 : 크로노브레이크',
      period: '2023.06.27 ~ 진행 중',
      description: 'Full 3D MMORPG 프로젝트의 C++ 서버 개발을 담당, 수천 명 이상의 동시 접속 환경을 가정한 고성능 멀티스레드 서버 아키텍처를 구현했습니다.',
      tech: ['C++', 'Python', 'MySQL', 'RabbitMQ', 'EFK Stack'],
      color: '#4facfe',
      image: `${import.meta.env.BASE_URL}zenonia-preview.jpg`,
      slide: <ZenoniaSlide />
    },
    {
      id: 'dancevil',
      title: '🎵 댄스빌 (Dancevil)',
      period: '2019.01.09 ~ 2020.08.31',
      description: '유저가 직접 음악과 뮤직비디오를 제작하고 공유하는 UGC(User-Generated Content) 기반의 모바일 소셜 게임입니다.',
      tech: ['PHP', 'Golang', 'Node.js', 'MySQL', 'Redis', 'Docker'],
      color: '#43e97b',
      image: `${import.meta.env.BASE_URL}dancevil-preview.webp`,
      slide: <DancevilSlide />
    }
  ];

  return (
    <div className="slide-content projects-slide">
      <h2>💼 참여 프로젝트</h2>
      
      {/* 프로젝트 썸네일 그리드 */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-thumbnail"
            onClick={() => setSelectedProject(project.id)}
            style={{ borderColor: project.color }}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  // 이미지 로드 실패 시 기본 아이콘 표시
                  e.currentTarget.style.display = 'none';
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                  if (placeholder) {
                    placeholder.style.display = 'flex';
                  }
                }}
              />
              <div className="project-image-placeholder" style={{ backgroundColor: project.color }}>
                <span className="project-icon">
                  {project.id === 'zenonia' ? '⚔️' : '🎵'}
                </span>
              </div>
            </div>
            <div className="project-header" style={{ backgroundColor: project.color }}>
              <h3>{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            <div className="project-body">
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag" style={{ backgroundColor: project.color }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <span className="view-details">상세보기 →</span>
            </div>
          </div>
        ))}
      </div>

      {/* 모달창 - Portal을 사용하여 document.body에 직접 렌더링 */}
      {selectedProject && createPortal(
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{projects.find(p => p.id === selectedProject)?.title}</h3>
              <button 
                className="modal-close" 
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {projects.find(p => p.id === selectedProject)?.slide}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ProjectsSlide;
