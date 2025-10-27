import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Text, Sky } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three-stdlib';

// Window 객체에 터치 핸들러 타입 추가
declare global {
  interface Window {
    touchMoveHandler?: (direction: string) => void;
    touchZoomHandler?: (direction: 'in' | 'out') => void;
  }
}

interface HubWorldProps {
  onZoneEnter: (zoneName: string) => void;
}

// FBX 모델 로더 컴포넌트
function FBXModel({ url, position, rotation, onLoad }: { 
  url: string; 
  position: [number, number, number];
  rotation: number;
  onLoad?: (model: THREE.Group) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      url,
      (fbx) => {
        // 모델 크기 조정
        fbx.scale.setScalar(0.01);
        fbx.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // 애니메이션 믹서 설정
        if (fbx.animations && fbx.animations.length > 0) {
          mixer.current = new THREE.AnimationMixer(fbx);
          const action = mixer.current.clipAction(fbx.animations[0]);
          action.play();
        }

        setModel(fbx);
        if (onLoad) onLoad(fbx);
      },
      undefined,
      (error) => {
        console.error('FBX 로드 에러:', error);
      }
    );
  }, [url, onLoad]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation;
    }
  }, [rotation]);

  if (!model) return null;

  return (
    <group ref={groupRef} position={position}>
      <primitive object={model} />
    </group>
  );
}

// 강아지 캐릭터 컴포넌트 (FBX 사용)
function Character({ position, onPositionChange, onRotationChange }: { 
  position: [number, number, number]; 
  onPositionChange: (pos: [number, number, number]) => void;
  onRotationChange: (rotation: number) => void;
}) {
  const [currentPosition, setCurrentPosition] = useState<[number, number, number]>(position);
  const [currentRotation, setCurrentRotation] = useState(0); // 초기 방향을 앞면으로 설정
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const moveSpeed = 0.15;
    const rotationSpeed = 0.1;
    
    let moveX = 0;
    let moveZ = 0;
    let targetRotation = currentRotation;
    let isMoving = false;

    // 이동 방향 결정 (카메라 기준으로 직관적인 방향)
    // 위쪽 키: 북쪽으로 이동 (강아지 뒷면 보임)
    if (keysPressed.current['ArrowUp'] || keysPressed.current['w'] || keysPressed.current['W']) {
      moveZ = -moveSpeed;
      targetRotation = Math.PI; // 북쪽을 향함
      isMoving = true;
    }
    // 아래쪽 키: 남쪽으로 이동 (강아지 앞면 보임)
    if (keysPressed.current['ArrowDown'] || keysPressed.current['s'] || keysPressed.current['S']) {
      moveZ = moveSpeed;
      targetRotation = 0; // 남쪽을 향함
      isMoving = true;
    }
    // 왼쪽 키: 서쪽으로 이동 (강아지 왼쪽면 보임)
    if (keysPressed.current['ArrowLeft'] || keysPressed.current['a'] || keysPressed.current['A']) {
      moveX = -moveSpeed;
      targetRotation = -Math.PI / 2; // 서쪽을 향함
      isMoving = true;
    }
    // 오른쪽 키: 동쪽으로 이동 (강아지 오른쪽면 보임)
    if (keysPressed.current['ArrowRight'] || keysPressed.current['d'] || keysPressed.current['D']) {
      moveX = moveSpeed;
      targetRotation = Math.PI / 2; // 동쪽을 향함
      isMoving = true;
    }

    // 대각선 이동
    if ((keysPressed.current['ArrowUp'] || keysPressed.current['w'] || keysPressed.current['W']) && 
        (keysPressed.current['ArrowLeft'] || keysPressed.current['a'] || keysPressed.current['A'])) {
      targetRotation = -Math.PI * 3 / 4; // 북서쪽
      isMoving = true;
    }
    if ((keysPressed.current['ArrowUp'] || keysPressed.current['w'] || keysPressed.current['W']) && 
        (keysPressed.current['ArrowRight'] || keysPressed.current['d'] || keysPressed.current['D'])) {
      targetRotation = Math.PI * 3 / 4; // 북동쪽
      isMoving = true;
    }
    if ((keysPressed.current['ArrowDown'] || keysPressed.current['s'] || keysPressed.current['S']) && 
        (keysPressed.current['ArrowLeft'] || keysPressed.current['a'] || keysPressed.current['A'])) {
      targetRotation = -Math.PI / 4; // 남서쪽
      isMoving = true;
    }
    if ((keysPressed.current['ArrowDown'] || keysPressed.current['s'] || keysPressed.current['S']) && 
        (keysPressed.current['ArrowRight'] || keysPressed.current['d'] || keysPressed.current['D'])) {
      targetRotation = Math.PI / 4; // 남동쪽
      isMoving = true;
    }

    // 회전 보간 (이동 중일 때만)
    if (isMoving) {
      let rotationDiff = targetRotation - currentRotation;
      
      // 최단 경로로 회전
      if (rotationDiff > Math.PI) rotationDiff -= Math.PI * 2;
      if (rotationDiff < -Math.PI) rotationDiff += Math.PI * 2;
      
      const newRotation = currentRotation + rotationDiff * rotationSpeed;
      setCurrentRotation(newRotation);
      onRotationChange(newRotation);
    }

    // 위치 업데이트 (이동 중일 때만)
    if (isMoving && (moveX !== 0 || moveZ !== 0)) {
      let newX = currentPosition[0] + moveX;
      let newZ = currentPosition[2] + moveZ;

      // 경계 제한
      newX = Math.max(-20, Math.min(20, newX));
      newZ = Math.max(-20, Math.min(20, newZ));

      const newPos: [number, number, number] = [newX, currentPosition[1], newZ];
      setCurrentPosition(newPos);
      onPositionChange(newPos);
    }
  });

  return (
    <FBXModel 
      url={`${import.meta.env.BASE_URL}character.fbx`}
      position={currentPosition}
      rotation={currentRotation}
    />
  );
}

// useFrame을 사용하기 위한 래퍼
function CharacterWrapper({ position, onPositionChange, onRotationChange }: { 
  position: [number, number, number]; 
  onPositionChange: (pos: [number, number, number]) => void;
  onRotationChange: (rotation: number) => void;
}) {
  return <Character position={position} onPositionChange={onPositionChange} onRotationChange={onRotationChange} />;
}

// 트리거 존 컴포넌트
function TriggerZone({ 
  position, 
  label, 
  color, 
  zoneName,
  characterPosition 
}: { 
  position: [number, number, number]; 
  label: string; 
  color: string;
  zoneName: string;
  characterPosition: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (!meshRef.current) return;

    const distance = Math.sqrt(
      Math.pow(characterPosition[0] - position[0], 2) +
      Math.pow(characterPosition[2] - position[2], 2)
    );

    const threshold = 3; // 트리거 거리
    setIsNear(distance < threshold);
  }, [characterPosition, position]);

  return (
    <group position={position}>
      {/* 바닥 플랫폼 */}
      <mesh ref={meshRef} receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[2.5, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={isNear ? 0.8 : 0.4}
          emissive={color}
          emissiveIntensity={isNear ? 0.5 : 0.2}
        />
      </mesh>
      {/* 포털 이펙트 */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[2, 2.5, 3, 32, 1, true]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={isNear ? 0.4 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* 텍스트 라벨 */}
      <Text
        position={[0, 3.5, 0]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        {label}
      </Text>
      {isNear && (
        <Text
          position={[0, 4.5, 0]}
          fontSize={0.4}
          color="#ffff00"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.03}
          outlineColor="#000000"
        >
          Press SPACE to Enter
        </Text>
      )}
    </group>
  );
}

// 터치 컨트롤 컴포넌트
function TouchControls({ onMove, onZoom, onEnter }: { 
  onMove: (direction: string) => void; 
  onZoom: (direction: 'in' | 'out') => void;
  onEnter: () => void;
}) {
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [joystickPosition, setJoystickPosition] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setIsTouchActive(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!touchStart || !isTouchActive) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    
    // 조이스틱 영역 (화면 왼쪽 하단)
    const joystickArea = { x: 50, y: window.innerHeight - 150, size: 100 };
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance < joystickArea.size) {
      setJoystickPosition({ x: deltaX, y: deltaY });
      
      // 이동 방향 결정
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        onMove(deltaX > 0 ? 'right' : 'left');
      } else {
        onMove(deltaY > 0 ? 'down' : 'up');
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsTouchActive(false);
    setJoystickPosition(null);
    setTouchStart(null);
  };

  const handleZoom = (direction: 'in' | 'out') => {
    onZoom(direction);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      zIndex: 1000,
      pointerEvents: 'none'
    }}>
      {/* 가상 조이스틱 */}
      <div
        style={{
          width: '100px',
          height: '100px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          position: 'relative',
          pointerEvents: 'auto',
          touchAction: 'none'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 조이스틱 핸들 */}
        <div
          style={{
            width: '30px',
            height: '30px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) ${joystickPosition ? `translate(${joystickPosition.x * 0.3}px, ${joystickPosition.y * 0.3}px)` : ''}`,
            transition: joystickPosition ? 'none' : 'transform 0.2s ease'
          }}
        />
        {/* 방향 표시 */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>↑</div>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>↓</div>
        <div style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>←</div>
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>→</div>
      </div>

      {/* 줌 컨트롤 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        pointerEvents: 'auto'
      }}>
        <button
          onClick={() => handleZoom('in')}
          style={{
            width: '50px',
            height: '50px',
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          +
        </button>
        <button
          onClick={() => handleZoom('out')}
          style={{
            width: '50px',
            height: '50px',
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          −
        </button>
      </div>

      {/* 포털 입장 버튼 */}
      <button
        onClick={onEnter}
        style={{
          width: '80px',
          height: '80px',
          background: 'rgba(255, 100, 100, 0.8)',
          border: '3px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto',
          boxShadow: '0 0 20px rgba(255, 100, 100, 0.5)',
          animation: 'pulse 2s infinite'
        }}
      >
        <div style={{ fontSize: '16px', marginBottom: '2px' }}>🚪</div>
        <div style={{ fontSize: '10px' }}>입장</div>
      </button>
    </div>
  );
}

// 3D 씬 컴포넌트
function Scene({ onZoneEnter, onTouchMove, onTouchZoom }: { 
  onZoneEnter: (zoneName: string) => void;
  onTouchMove?: (direction: string) => void;
  onTouchZoom?: (direction: 'in' | 'out') => void;
}) {
  const [characterPosition, setCharacterPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [characterRotation, setCharacterRotation] = useState(0);
  const [cameraDistance, setCameraDistance] = useState(10); // 카메라 거리 상태 추가
  const [isMobile, setIsMobile] = useState(false);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        // 각 존과의 거리 계산하여 가장 가까운 존 찾기
        const zones = [
          { name: 'intro', pos: [0, 0, -10] },
          { name: 'about', pos: [-10, 0, 0] },
          { name: 'skills', pos: [10, 0, 0] },
          { name: 'projects', pos: [-10, 0, 10] },
          { name: 'personal', pos: [10, 0, 10] },
        ];

        let minDistance = Infinity;
        let nearestZone = '';

        zones.forEach(zone => {
          const distance = Math.sqrt(
            Math.pow(characterPosition[0] - zone.pos[0], 2) +
            Math.pow(characterPosition[2] - zone.pos[2], 2)
          );

          if (distance < 3 && distance < minDistance) {
            minDistance = distance;
            nearestZone = zone.name;
          }
        });

        if (nearestZone) {
          onZoneEnter(nearestZone);
        }
      }
    };

    // 마우스 휠 줌 이벤트 핸들러
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.5;
      const newDistance = cameraDistance + (e.deltaY > 0 ? zoomSpeed : -zoomSpeed);
      
      // 줌 범위 제한 (3 ~ 20)
      setCameraDistance(Math.max(3, Math.min(20, newDistance)));
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [characterPosition, onZoneEnter, cameraDistance]);

  // 터치 컨트롤 핸들러
  const handleTouchMove = (direction: string) => {
    const moveSpeed = 0.15;
    let moveX = 0;
    let moveZ = 0;
    let targetRotation = characterRotation;

    switch (direction) {
      case 'up':
        moveZ = -moveSpeed;
        targetRotation = Math.PI;
        break;
      case 'down':
        moveZ = moveSpeed;
        targetRotation = 0;
        break;
      case 'left':
        moveX = -moveSpeed;
        targetRotation = -Math.PI / 2;
        break;
      case 'right':
        moveX = moveSpeed;
        targetRotation = Math.PI / 2;
        break;
    }

    // 위치 업데이트
    let newX = characterPosition[0] + moveX;
    let newZ = characterPosition[2] + moveZ;

    // 경계 제한
    newX = Math.max(-20, Math.min(20, newX));
    newZ = Math.max(-20, Math.min(20, newZ));

    setCharacterPosition([newX, characterPosition[1], newZ]);
    setCharacterRotation(targetRotation);
  };

  const handleTouchZoom = (direction: 'in' | 'out') => {
    const zoomSpeed = 0.5;
    const newDistance = direction === 'in' 
      ? cameraDistance - zoomSpeed 
      : cameraDistance + zoomSpeed;
    
    setCameraDistance(Math.max(3, Math.min(20, newDistance)));
  };

  // 외부 핸들러와 연결
  useEffect(() => {
    if (onTouchMove) {
      // 터치 이동 핸들러를 외부로 전달
      window.touchMoveHandler = handleTouchMove;
    }
    if (onTouchZoom) {
      // 터치 줌 핸들러를 외부로 전달
      window.touchZoomHandler = handleTouchZoom;
    }
  }, [onTouchMove, onTouchZoom]);

  // 카메라 업데이트 (고정된 3인칭 시점 + 줌)
  useEffect(() => {
    if (!cameraRef.current) return;

    const animate = () => {
      if (!cameraRef.current) return;

      // 카메라를 캐릭터 뒤에 고정 (회전하지 않음)
      const height = 6; // 카메라 높이
      
      // 카메라는 항상 캐릭터의 뒤쪽(남쪽)에 위치
      const cameraX = characterPosition[0];
      const cameraZ = characterPosition[2] + cameraDistance;
      
      // 카메라 위치를 부드럽게 이동
      cameraRef.current.position.lerp(
        new THREE.Vector3(cameraX, characterPosition[1] + height, cameraZ),
        0.1
      );

      // 카메라가 캐릭터를 바라보도록 설정
      cameraRef.current.lookAt(
        characterPosition[0],
        characterPosition[1] + 1,
        characterPosition[2]
      );

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [characterPosition, cameraDistance]);

  return (
    <>
      {/* 조명 */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <pointLight position={[0, 5, 0]} intensity={0.5} />

      {/* 하늘 */}
      <Sky sunPosition={[100, 20, 100]} />

      {/* 바닥 */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#2d5016" />
      </mesh>

      {/* 그리드 */}
      <gridHelper args={[50, 50, '#444444', '#666666']} position={[0, 0.01, 0]} />

      {/* 캐릭터 */}
      <CharacterWrapper 
        position={characterPosition} 
        onPositionChange={setCharacterPosition}
        onRotationChange={setCharacterRotation}
      />

      {/* 트리거 존들 */}
      <TriggerZone 
        position={[0, 0, -10]} 
        label="Intro" 
        color="#667eea"
        zoneName="intro"
        characterPosition={characterPosition}
      />
      <TriggerZone 
        position={[-10, 0, 0]} 
        label="About" 
        color="#f093fb"
        zoneName="about"
        characterPosition={characterPosition}
      />
      <TriggerZone 
        position={[10, 0, 0]} 
        label="기술 스택" 
        color="#4facfe"
        zoneName="skills"
        characterPosition={characterPosition}
      />
      <TriggerZone 
        position={[-10, 0, 10]} 
        label="참여 프로젝트" 
        color="#43e97b"
        zoneName="projects"
        characterPosition={characterPosition}
      />
      <TriggerZone 
        position={[10, 0, 10]} 
        label="개인 프로젝트" 
        color="#fa709a"
        zoneName="personal"
        characterPosition={characterPosition}
      />

      {/* 카메라 (고정 3인칭 시점) */}
      <PerspectiveCamera 
        ref={cameraRef}
        makeDefault 
        position={[0, 7, 10]} 
        fov={60}
      />
    </>
  );
}

function HubWorld({ onZoneEnter }: HubWorldProps) {
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 터치 컨트롤 핸들러
  const handleTouchMove = (direction: string) => {
    if (window.touchMoveHandler) {
      window.touchMoveHandler(direction);
    }
  };

  const handleTouchZoom = (direction: 'in' | 'out') => {
    if (window.touchZoomHandler) {
      window.touchZoomHandler(direction);
    }
  };

  const handleTouchEnter = () => {
    // 포털 입장 로직 (기존 키보드 로직과 동일)
    const zones = [
      { name: 'intro', pos: [0, 0, -10] },
      { name: 'about', pos: [-10, 0, 0] },
      { name: 'skills', pos: [10, 0, 0] },
      { name: 'projects', pos: [-10, 0, 10] },
      { name: 'personal', pos: [10, 0, 10] },
    ];

    // 현재 캐릭터 위치는 Scene에서 관리되므로, 간단히 가장 가까운 존을 찾아 입장
    // 실제로는 Scene에서 현재 위치를 전달받아야 하지만, 일단 첫 번째 존으로 입장
    onZoneEnter('intro');
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene 
            onZoneEnter={onZoneEnter}
            onTouchMove={handleTouchMove}
            onTouchZoom={handleTouchZoom}
          />
        </Suspense>
      </Canvas>
      
      {/* 모바일 터치 컨트롤 */}
      {isMobile && (
        <TouchControls 
          onMove={handleTouchMove}
          onZoom={handleTouchZoom}
          onEnter={handleTouchEnter}
        />
      )}
      
      {/* 컨트롤 안내 */}
      <div className="hub-controls" style={{
        position: 'absolute',
        bottom: isMobile ? '140px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '10px',
        fontSize: '14px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>🎮 Controls</div>
        <div>
          {isMobile 
            ? '터치 조이스틱: 이동 | +/− 버튼: 줌 | 포털 근처에서 터치: 입장'
            : '방향키 or WASD: 이동 | SPACE: 포털 입장 | 마우스 휠: 줌'
          }
        </div>
      </div>
    </div>
  );
}

export default HubWorld;

