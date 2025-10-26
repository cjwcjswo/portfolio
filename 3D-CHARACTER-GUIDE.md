# 🎮 3D 캐릭터 커스터마이징 가이드

이제 포트폴리오에는 Three.js로 만든 3D 게임 캐릭터가 달리는 모습이 표시됩니다!

## ✨ 새로운 기능

- **3D 로봇 캐릭터**: Three.js로 만든 귀여운 3D 캐릭터
- **달리기 애니메이션**: 팔과 다리가 자연스럽게 움직임
- **배경 스크롤**: 나무들이 뒤로 지나가며 달리는 느낌 연출
- **캔버스 크기 자동 조정**: animation-section 크기에 맞게 정확히 표시

## 🎨 캐릭터 색상 변경

**파일**: `src/components/PixelBackground.tsx`

### 머리 색상
```typescript
// 51-52번째 줄
const headMaterial = new THREE.MeshPhongMaterial({ color: 0xffd93d });
// 색상 코드 변경: 0xffd93d (노란색) → 0x다른색상
```

### 몸통 색상
```typescript
// 69번째 줄
const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b6b });
// 색상 코드 변경: 0xff6b6b (빨간색) → 0x다른색상
```

### 팔 색상
```typescript
// 76번째 줄
const armMaterial = new THREE.MeshPhongMaterial({ color: 0xff8787 });
// 색상 코드 변경: 0xff8787 (연한 빨간색) → 0x다른색상
```

### 다리 색상
```typescript
// 88번째 줄
const legMaterial = new THREE.MeshPhongMaterial({ color: 0x4a5568 });
// 색상 코드 변경: 0x4a5568 (회색) → 0x다른색상
```

### 색상 코드 예시

| 색상 | 코드 |
|------|------|
| 빨강 | 0xff0000 |
| 파랑 | 0x0000ff |
| 초록 | 0x00ff00 |
| 노랑 | 0xffff00 |
| 보라 | 0x9370DB |
| 주황 | 0xff8800 |
| 분홍 | 0xff69b4 |
| 하늘색 | 0x87CEEB |

## 🏃 애니메이션 속도 조정

**파일**: `src/components/PixelBackground.tsx`

### 달리기 속도
```typescript
// 137번째 줄
time += 0.05;  // 숫자가 클수록 빠름 (0.03 ~ 0.1 권장)
```

### 팔 흔들림 강도
```typescript
// 141-142번째 줄
leftArm.rotation.x = Math.sin(time * 2) * 0.5;  // 0.5 → 0.3 (약하게) 또는 0.7 (강하게)
rightArm.rotation.x = -Math.sin(time * 2) * 0.5;
```

### 다리 움직임 강도
```typescript
// 145-146번째 줄
leftLeg.rotation.x = Math.sin(time * 2) * 0.3;  // 0.3 → 0.2 (약하게) 또는 0.5 (강하게)
rightLeg.rotation.x = -Math.sin(time * 2) * 0.3;
```

### 배경 스크롤 속도
```typescript
// 153번째 줄
tree.position.x += 0.02;  // 숫자가 클수록 빠름 (0.01 ~ 0.05 권장)
```

## 📐 캐릭터 크기 조정

### 전체 캐릭터 크기
캐릭터를 더 크게 또는 작게 만들려면:

```typescript
// 98번째 줄 (scene.add(character); 바로 앞에 추가)
character.scale.set(1.5, 1.5, 1.5);  // 1.5배 크기
// 또는
character.scale.set(0.8, 0.8, 0.8);  // 0.8배 크기
```

### 개별 부위 크기

```typescript
// 머리 크기 (51번째 줄)
const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
// 0.6 → 0.8 (더 크게) 또는 0.4 (더 작게)

// 몸통 크기 (68번째 줄)
const bodyGeometry = new THREE.BoxGeometry(0.8, 1, 0.5);
// (너비, 높이, 깊이) 값 조정
```

## 🌳 배경 요소 조정

### 나무 개수
```typescript
// 110번째 줄
for (let i = 0; i < 5; i++) {  // 5 → 3 (적게) 또는 8 (많이)
```

### 나무 크기
```typescript
// 114번째 줄 (나무 줄기)
const trunkGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1, 8);
// (위쪽 반지름, 아래쪽 반지름, 높이, 면 개수)

// 121번째 줄 (나뭇잎)
const leavesGeometry = new THREE.SphereGeometry(0.5, 8, 8);
// (반지름, 가로 면, 세로 면) - 0.5 → 0.7 (더 크게)
```

### 바닥 색상
```typescript
// 102번째 줄
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x6B8E23 });
// 0x6B8E23 (녹색) → 다른 색상
```

## 🎥 카메라 설정

### 카메라 각도
```typescript
// 23-24번째 줄
camera.position.z = 5;  // 카메라 거리 (3 ~ 7 권장)
camera.position.y = 1;  // 카메라 높이 (0 ~ 2 권장)
```

### 시야각
```typescript
// 17번째 줄
const camera = new THREE.PerspectiveCamera(
  75,  // FOV (시야각): 60 ~ 90 권장
  // ...
);
```

## 💡 조명 조정

### 전체 밝기
```typescript
// 40번째 줄
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
// 0.6 → 0.4 (어둡게) 또는 0.8 (밝게)
```

### 방향성 조명 밝기
```typescript
// 43번째 줄
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// 0.8 → 0.5 (약하게) 또는 1.0 (강하게)
```

### 조명 위치
```typescript
// 44번째 줄
directionalLight.position.set(5, 10, 5);
// (x, y, z) 좌표 조정
```

## 🎨 배경 하늘 색상

```typescript
// 14번째 줄
scene.background = new THREE.Color(0x87CEEB);  // 하늘색
// 다른 색상으로 변경:
// 0x87CEEB (하늘색) - 기본값
// 0xffa500 (주황색 석양)
// 0x191970 (미드나잇블루 밤하늘)
// 0xff69b4 (핑크색)
```

## 🔧 고급 설정

### 캐릭터에 그림자 추가

```typescript
// renderer 설정 부분에 추가 (27번째 줄 다음)
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// directionalLight 설정 부분에 추가 (44번째 줄 다음)
directionalLight.castShadow = true;

// 각 메쉬에 그림자 설정 추가
body.castShadow = true;
body.receiveShadow = true;
// (모든 부위에 반복)

// 바닥에 그림자 받기 설정 (106번째 줄 다음)
ground.receiveShadow = true;
```

### 더 부드러운 애니메이션

```typescript
// 애니메이션에 easing 추가
const easeInOutSine = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2;

// 사용 예시
leftArm.rotation.x = easeInOutSine(Math.sin(time * 2)) * 0.5;
```

## 📱 성능 최적화

파일 크기가 크다는 경고가 나타날 수 있습니다 (Three.js 라이브러리 때문). 이는 정상이며, 실제 성능에는 큰 영향이 없습니다.

더 빠른 로딩을 원한다면:
1. 나무 개수 줄이기 (5 → 3)
2. 폴리곤 수 줄이기 (geometry의 세그먼트 수 줄이기)

## 🎯 빠른 테스트

```bash
npm run dev
```

http://localhost:5173/portfolio/ 에서 왼쪽 1/3 영역에 3D 캐릭터가 달리는 모습 확인!

---

더 멋진 캐릭터를 만들고 싶다면 이 가이드를 참고하여 마음껏 커스터마이징하세요! 🚀

