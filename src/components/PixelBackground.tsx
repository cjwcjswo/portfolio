import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import './PixelBackground.css';

// FBX 파일 경로를 여기서 설정하세요
// 주의: 파일명이 정확히 일치해야 합니다 (대소문자 구분)
// import.meta.env.BASE_URL을 사용하여 개발/배포 환경 모두에서 동작하도록 설정
const FBX_MODEL_PATH = `${import.meta.env.BASE_URL}character.fbx`; // public 폴더에 character.fbx 파일을 넣어주세요

const PixelBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene 설정
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // 하늘색

    // Camera 설정
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 1;

    // Renderer 설정
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', resize);

    // Lighting 설정
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // FBX 모델 및 애니메이션 믹서
    let character: THREE.Group | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let leftArm: THREE.Mesh | null = null;
    let rightArm: THREE.Mesh | null = null;
    let leftLeg: THREE.Mesh | null = null;
    let rightLeg: THREE.Mesh | null = null;
    let useFallbackCharacter = false;

    // FBX 모델 로드 시도
    const loader = new FBXLoader();
    loader.load(
      FBX_MODEL_PATH,
      (fbx) => {
        console.log('FBX 모델 로드 성공!');
        character = fbx;
        
        // 모델 크기 및 위치 조정
        const box = new THREE.Box3().setFromObject(fbx);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.5 / maxDim; // 적절한 크기로 조정
        fbx.scale.setScalar(scale);
        
        // 모델을 바닥에 위치시키기 (땅 위를 걷는 느낌)
        fbx.position.y = -0.8;
        
        // 캐릭터가 정면(카메라)을 보도록 회전
        fbx.rotation.y = 0;
        
        scene.add(fbx);

        // 애니메이션이 있는 경우 재생
        if (fbx.animations && fbx.animations.length > 0) {
          mixer = new THREE.AnimationMixer(fbx);
          
          // 첫 번째 애니메이션 재생 (달리기 애니메이션이 있다면)
          const action = mixer.clipAction(fbx.animations[0]);
          action.play();
          
          console.log(`총 ${fbx.animations.length}개의 애니메이션 발견`);
          fbx.animations.forEach((clip, index) => {
            console.log(`애니메이션 ${index}: ${clip.name}`);
          });
        } else {
          console.log('애니메이션이 없는 모델입니다.');
        }
      },
      (progress) => {
        console.log(`로딩 중: ${(progress.loaded / progress.total * 100).toFixed(2)}%`);
      },
      (error) => {
        console.error('FBX 로드 실패, 기본 캐릭터를 사용합니다:', error);
        useFallbackCharacter = true;
        createFallbackCharacter();
      }
    );

    // Fallback 캐릭터 생성 함수
    function createFallbackCharacter() {
      character = new THREE.Group();
      // 캐릭터를 땅 위에 배치
      character.position.y = -0.8;

      // 머리
      const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
      const headMaterial = new THREE.MeshPhongMaterial({ color: 0xffd93d });
      const head = new THREE.Mesh(headGeometry, headMaterial);
      head.position.y = 1.3;
      character.add(head);

      // 눈
      const eyeGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.1);
      const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      leftEye.position.set(-0.15, 1.35, 0.3);
      character.add(leftEye);
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      rightEye.position.set(0.15, 1.35, 0.3);
      character.add(rightEye);

      // 몸통
      const bodyGeometry = new THREE.BoxGeometry(0.8, 1, 0.5);
      const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b6b });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = 0.5;
      character.add(body);

      // 팔 (왼쪽)
      const armGeometry = new THREE.BoxGeometry(0.2, 0.8, 0.2);
      const armMaterial = new THREE.MeshPhongMaterial({ color: 0xff8787 });
      leftArm = new THREE.Mesh(armGeometry, armMaterial);
      leftArm.position.set(-0.5, 0.5, 0);
      character.add(leftArm);

      // 팔 (오른쪽)
      rightArm = new THREE.Mesh(armGeometry, armMaterial);
      rightArm.position.set(0.5, 0.5, 0);
      character.add(rightArm);

      // 다리 (왼쪽)
      const legGeometry = new THREE.BoxGeometry(0.25, 0.8, 0.25);
      const legMaterial = new THREE.MeshPhongMaterial({ color: 0x4a5568 });
      leftLeg = new THREE.Mesh(legGeometry, legMaterial);
      leftLeg.position.set(-0.25, -0.4, 0);
      character.add(leftLeg);

      // 다리 (오른쪽)
      rightLeg = new THREE.Mesh(legGeometry, legMaterial);
      rightLeg.position.set(0.25, -0.4, 0);
      character.add(rightLeg);

      scene.add(character);
    }

    // 2D JRPG 스타일 배경 생성
    // Canvas로 타일 패턴 텍스처 생성
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // 풀밭 타일 그리기 (픽셀 아트 스타일)
    const tileSize = 32;
    for (let y = 0; y < canvas.height; y += tileSize) {
      for (let x = 0; x < canvas.width; x += tileSize) {
        // 기본 풀밭 색상
        const greenShade = Math.random() > 0.5 ? '#5b9c3e' : '#4a8535';
        ctx.fillStyle = greenShade;
        ctx.fillRect(x, y, tileSize, tileSize);
        
        // 픽셀 디테일 (풀 표현)
        ctx.fillStyle = '#3a6b2a';
        for (let i = 0; i < 5; i++) {
          const px = x + Math.floor(Math.random() * tileSize);
          const py = y + Math.floor(Math.random() * tileSize);
          ctx.fillRect(px, py, 2, 2);
        }
        
        // 밝은 풀 포인트
        ctx.fillStyle = '#6fad4f';
        for (let i = 0; i < 3; i++) {
          const px = x + Math.floor(Math.random() * tileSize);
          const py = y + Math.floor(Math.random() * tileSize);
          ctx.fillRect(px, py, 2, 2);
        }
        
        // 가끔 꽃 추가
        if (Math.random() > 0.85) {
          ctx.fillStyle = ['#ff6b9d', '#ffeb3b', '#ffffff'][Math.floor(Math.random() * 3)];
          const px = x + Math.floor(Math.random() * tileSize);
          const py = y + Math.floor(Math.random() * tileSize);
          ctx.fillRect(px, py, 3, 3);
        }
        
        // 타일 경계선 (픽셀 그리드 느낌)
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.strokeRect(x, y, tileSize, tileSize);
      }
    }
    
    // 길 추가 (십자 형태)
    ctx.fillStyle = '#8b7355';
    // 가로 길
    ctx.fillRect(0, canvas.height / 2 - 24, canvas.width, 48);
    // 세로 길
    ctx.fillRect(canvas.width / 2 - 24, 0, 48, canvas.height);
    
    // 길 디테일 (돌멩이)
    ctx.fillStyle = '#6b5845';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      // 가로 길 영역
      if (y > canvas.height / 2 - 24 && y < canvas.height / 2 + 24) {
        ctx.fillRect(x, y, 3, 3);
      }
      // 세로 길 영역
      if (x > canvas.width / 2 - 24 && x < canvas.width / 2 + 24) {
        ctx.fillRect(x, y, 3, 3);
      }
    }
    
    // 텍스처로 변환
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    texture.magFilter = THREE.NearestFilter; // 픽셀 아트 느낌 유지
    texture.minFilter = THREE.NearestFilter;
    
    // 바닥 평면에 텍스처 적용
    const groundGeometry = new THREE.PlaneGeometry(30, 30);
    const groundMaterial = new THREE.MeshBasicMaterial({ 
      map: texture,
      side: THREE.DoubleSide
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.8;
    scene.add(ground);

    // 픽셀 아트 스타일 나무 생성
    const trees: THREE.Group[] = [];
    for (let i = 0; i < 5; i++) {
      const tree = new THREE.Group();
      
      // 나무 줄기 (픽셀 박스)
      const trunkGeometry = new THREE.BoxGeometry(0.15, 0.6, 0.15);
      const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = 0.3;
      tree.add(trunk);
      
      // 나뭇잎 (픽셀 박스 3개로 구성)
      const leavesColors = [0x2d8b3a, 0x3a9d4a, 0x2d8b3a];
      for (let j = 0; j < 3; j++) {
        const leavesGeometry = new THREE.BoxGeometry(0.5, 0.3, 0.5);
        const leavesMaterial = new THREE.MeshBasicMaterial({ color: leavesColors[j] });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 0.7 + j * 0.2;
        tree.add(leaves);
      }
      
      // 원형 배치
      const angle = (i / 5) * Math.PI * 2;
      const radius = 6 + Math.random() * 2;
      tree.position.set(
        Math.cos(angle) * radius,
        -0.8,
        Math.sin(angle) * radius
      );
      
      scene.add(tree);
      trees.push(tree);
    }

    // 픽셀 아트 스타일 집 생성
    const houses: THREE.Group[] = [];
    for (let i = 0; i < 3; i++) {
      const house = new THREE.Group();
      
      // 집 본체
      const bodyGeometry = new THREE.BoxGeometry(1, 0.8, 1);
      const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xd4a574 });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = 0.4;
      house.add(body);
      
      // 지붕
      const roofGeometry = new THREE.ConeGeometry(0.8, 0.5, 4);
      const roofMaterial = new THREE.MeshBasicMaterial({ color: 0xa0522d });
      const roof = new THREE.Mesh(roofGeometry, roofMaterial);
      roof.position.y = 1.05;
      roof.rotation.y = Math.PI / 4;
      house.add(roof);
      
      // 문 (어두운 사각형)
      const doorGeometry = new THREE.BoxGeometry(0.3, 0.5, 0.05);
      const doorMaterial = new THREE.MeshBasicMaterial({ color: 0x654321 });
      const door = new THREE.Mesh(doorGeometry, doorMaterial);
      door.position.set(0, 0.25, 0.51);
      house.add(door);
      
      // 창문 2개
      const windowGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.05);
      const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb });
      
      const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
      window1.position.set(-0.3, 0.5, 0.51);
      house.add(window1);
      
      const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
      window2.position.set(0.3, 0.5, 0.51);
      house.add(window2);
      
      // 원형 배치 (나무 사이)
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 6;
      const radius = 8;
      house.position.set(
        Math.cos(angle) * radius,
        -0.8,
        Math.sin(angle) * radius
      );
      house.lookAt(0, house.position.y, 0);
      
      scene.add(house);
      houses.push(house);
    }

    // 픽셀 아트 스타일 구름 생성 (떠다니는)
    const clouds: THREE.Group[] = [];
    for (let i = 0; i < 6; i++) {
      const cloud = new THREE.Group();
      
      // 구름은 여러 박스로 구성 (픽셀 느낌)
      const cloudParts = [
        { x: 0, y: 0, z: 0, w: 0.8, h: 0.3, d: 0.3 },
        { x: -0.4, y: 0, z: 0, w: 0.5, h: 0.3, d: 0.3 },
        { x: 0.4, y: 0, z: 0, w: 0.5, h: 0.3, d: 0.3 },
        { x: 0, y: 0.15, z: 0, w: 0.5, h: 0.3, d: 0.3 },
      ];
      
      cloudParts.forEach(part => {
        const partGeometry = new THREE.BoxGeometry(part.w, part.h, part.d);
        const partMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xffffff,
          transparent: true,
          opacity: 0.9
        });
        const partMesh = new THREE.Mesh(partGeometry, partMaterial);
        partMesh.position.set(part.x, part.y, part.z);
        cloud.add(partMesh);
      });
      
      // 원형 배치 + 높이
      const angle = (i / 6) * Math.PI * 2;
      const radius = 10 + Math.random() * 3;
      cloud.position.set(
        Math.cos(angle) * radius,
        3 + Math.random() * 2,
        Math.sin(angle) * radius
      );
      
      // 각 구름마다 다른 속도로 움직이도록 속성 추가
      (cloud as any).floatSpeed = 0.001 + Math.random() * 0.002;
      (cloud as any).floatOffset = Math.random() * Math.PI * 2;
      
      scene.add(cloud);
      clouds.push(cloud);
    }

    // 애니메이션 변수
    let time = 0;
    const clock = new THREE.Clock();

    // 애니메이션 루프
    const animate = () => {
      const delta = clock.getDelta();
      time += 0.05;

      // FBX 애니메이션 업데이트
      if (mixer) {
        mixer.update(delta);
      }

      // Fallback 캐릭터의 경우 수동 애니메이션
      if (useFallbackCharacter && character && leftArm && rightArm && leftLeg && rightLeg) {
        // 팔 흔들기
        leftArm.rotation.x = Math.sin(time * 2) * 0.5;
        rightArm.rotation.x = -Math.sin(time * 2) * 0.5;

        // 다리 움직임
        leftLeg.rotation.x = Math.sin(time * 2) * 0.3;
        rightLeg.rotation.x = -Math.sin(time * 2) * 0.3;

        // 몸통 약간 위아래 움직임 (기본 Y 위치인 -0.8 기준)
        character.position.y = -0.8 + Math.abs(Math.sin(time * 2)) * 0.1;
      }
      
      // 구름은 둥둥 떠다님
      clouds.forEach((cloud) => {
        // 상하 움직임
        const floatSpeed = (cloud as any).floatSpeed;
        const floatOffset = (cloud as any).floatOffset;
        const baseY = 3 + (clouds.indexOf(cloud) % 3);
        cloud.position.y = baseY + Math.sin(time * floatSpeed + floatOffset) * 0.5;
      });

      // 카메라 약간 흔들림 (달리는 효과)
      camera.position.y = 1 + Math.sin(time * 2) * 0.05;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="pixel-background" />;
};

export default PixelBackground;

