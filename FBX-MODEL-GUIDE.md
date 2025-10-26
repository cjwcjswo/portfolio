# FBX 3D 모델 캐릭터 사용 가이드

이 가이드는 포트폴리오의 애니메이션 섹션에 FBX 3D 모델을 추가하고 커스터마이징하는 방법을 설명합니다.

## 📦 FBX 파일 준비하기

### 1. FBX 파일 획득

FBX 모델을 얻을 수 있는 방법:

1. **무료 3D 모델 사이트**
   - [Mixamo](https://www.mixamo.com/) - 무료 캐릭터 + 애니메이션 (추천!)
   - [Sketchfab](https://sketchfab.com/) - 다양한 무료/유료 모델
   - [TurboSquid](https://www.turbosquid.com/) - 고품질 모델 (일부 무료)
   - [CGTrader](https://www.cgtrader.com/) - 3D 모델 마켓플레이스

2. **직접 제작**
   - Blender, Maya, 3ds Max 등의 3D 모델링 소프트웨어 사용
   - FBX 형식으로 Export

### 2. 추천: Mixamo 사용하기 (가장 쉬운 방법)

Mixamo는 무료로 캐릭터와 애니메이션을 제공하는 Adobe의 서비스입니다.

**단계:**
1. [Mixamo 웹사이트](https://www.mixamo.com/)에 접속
2. Adobe 계정으로 로그인 (무료 가입 가능)
3. "Characters" 탭에서 원하는 캐릭터 선택
4. "Animations" 탭에서 "Running" 또는 "Jogging" 검색
5. 애니메이션을 캐릭터에 적용
6. "Download" 버튼 클릭
   - Format: **FBX for Unity (.fbx)**
   - Skin: **With Skin**
   - 나머지 기본 설정 유지
7. 다운로드된 FBX 파일을 `character.fbx`로 이름 변경

## 🔧 프로젝트에 FBX 추가하기

### 1. FBX 파일 배치

다운로드한 FBX 파일을 프로젝트의 `public` 폴더에 복사합니다:

```bash
portfolio/
├── public/
│   └── character.fbx  ← 여기에 파일 복사
├── src/
└── ...
```

### 2. 파일 경로 설정

`src/components/PixelBackground.tsx` 파일 상단에서 FBX 파일 경로를 확인/수정합니다:

```typescript
// FBX 파일 경로를 여기서 설정하세요
// import.meta.env.BASE_URL을 사용하여 개발/배포 환경 모두에서 동작
const FBX_MODEL_PATH = `${import.meta.env.BASE_URL}character.fbx`;
```

**⚠️ 중요: BASE_URL 사용**
- `import.meta.env.BASE_URL`은 Vite의 base 경로를 자동으로 가져옵니다
- GitHub Pages 배포 시: `/portfolio/character.fbx`
- 로컬 개발 시: `/portfolio/character.fbx`
- 이렇게 하면 개발/배포 환경에서 모두 동작합니다!

**다른 파일명을 사용하는 경우:**
```typescript
const FBX_MODEL_PATH = `${import.meta.env.BASE_URL}my-custom-character.fbx`;
```

**BASE_URL 없이 절대 경로를 사용하면 안 됩니다:**
```typescript
// ❌ 잘못된 예 (GitHub Pages에서 작동하지 않음)
const FBX_MODEL_PATH = '/character.fbx';

// ✅ 올바른 예 (모든 환경에서 작동)
const FBX_MODEL_PATH = `${import.meta.env.BASE_URL}character.fbx`;
```

### 3. 개발 서버 재시작

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 FBX 모델이 로드되는지 확인합니다.

## 🎨 모델 커스터마이징

### 1. 모델 크기 조정

`src/components/PixelBackground.tsx`에서 스케일 값을 조정:

```typescript
const scale = 2.5 / maxDim; // 이 값을 변경 (기본: 2.5)
```

- **크게 하려면**: 값을 높입니다 (예: `3.5`, `4.0`)
- **작게 하려면**: 값을 낮춥니다 (예: `1.5`, `2.0`)

### 2. 모델 위치 조정

```typescript
fbx.position.y = 0;  // 높이 조정 (음수: 아래, 양수: 위)
fbx.position.x = 0;  // 좌우 위치
fbx.position.z = 0;  // 앞뒤 위치
```

### 3. 모델 회전

```typescript
fbx.rotation.y = Math.PI; // 180도 회전 (뒤돌아보게 하기)
```

### 4. 애니메이션 속도 조정

```typescript
const action = mixer.clipAction(fbx.animations[0]);
action.setEffectiveTimeScale(1.0); // 1.0 = 기본 속도, 2.0 = 2배 빠르게
action.play();
```

### 5. 특정 애니메이션 선택

FBX 파일에 여러 애니메이션이 있는 경우:

```typescript
// 콘솔에서 애니메이션 이름 확인
console.log(`총 ${fbx.animations.length}개의 애니메이션 발견`);
fbx.animations.forEach((clip, index) => {
  console.log(`애니메이션 ${index}: ${clip.name}`);
});

// 특정 애니메이션 재생
const runAnimation = fbx.animations.find(anim => anim.name === 'Running');
if (runAnimation) {
  const action = mixer.clipAction(runAnimation);
  action.play();
}
```

## 🎬 고급 설정

### 1. 여러 애니메이션 블렌딩

```typescript
// 걷기에서 달리기로 부드럽게 전환
const walkAction = mixer.clipAction(fbx.animations[0]);
const runAction = mixer.clipAction(fbx.animations[1]);

walkAction.play();
walkAction.crossFadeTo(runAction, 0.5); // 0.5초 동안 전환
```

### 2. 조명 조정

캐릭터가 너무 어둡거나 밝은 경우:

```typescript
// 주변광 밝기 조정
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // 0.6 → 0.8

// 방향광 밝기 조정
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // 0.8 → 1.0
```

### 3. 카메라 각도 조정

```typescript
camera.position.z = 5; // 앞뒤 거리
camera.position.y = 1; // 높이
camera.lookAt(0, 0, 0); // 바라보는 방향
```

## 🐛 문제 해결

### 1. 모델이 보이지 않아요

**확인 사항:**
- FBX 파일이 `public` 폴더에 있는지 확인
- 브라우저 개발자 도구(F12) → Console에서 에러 메시지 확인
- 파일 경로가 정확한지 확인 (`FBX_MODEL_PATH`)

**해결 방법:**
```typescript
// 경로 앞에 반드시 '/'를 붙이세요
const FBX_MODEL_PATH = '/character.fbx'; // ✅ 올바름
const FBX_MODEL_PATH = 'character.fbx';  // ❌ 잘못됨
```

### 2. 모델이 너무 크거나 작아요

스케일 값을 조정하세요:

```typescript
const scale = 2.5 / maxDim; // 이 값을 변경
```

또는 직접 스케일을 설정:

```typescript
fbx.scale.set(2, 2, 2); // x, y, z 크기
```

### 3. 애니메이션이 재생되지 않아요

**확인:**
1. Console에서 "애니메이션이 없는 모델입니다." 메시지 확인
2. FBX 파일을 다운로드할 때 애니메이션 포함 여부 확인

**Mixamo에서 다운로드 시:**
- "With Skin" 옵션 선택
- 캐릭터와 애니메이션을 함께 다운로드

### 4. 모델이 옆으로 누워있어요

회전을 조정하세요:

```typescript
fbx.rotation.x = -Math.PI / 2; // X축 기준 90도 회전
```

### 5. FBX 로드 실패 시 기본 캐릭터 표시

FBX 파일이 없거나 로드에 실패하면 자동으로 기본 로봇 캐릭터가 표시됩니다.
이는 정상 동작이며, FBX 파일을 추가하면 자동으로 교체됩니다.

## 📚 추천 리소스

### 무료 달리기 애니메이션 키워드 (Mixamo)
- "Running"
- "Running Strafe"
- "Jogging"
- "Sprint"
- "Fast Run"

### 추천 캐릭터 스타일
- **게임 개발자 포트폴리오에 어울리는 스타일:**
  - 로봇/메카 캐릭터
  - 판타지 전사/마법사
  - 현대적인 캐릭터
  - 픽셀 아트 스타일 (Low-poly)

## 💡 팁

1. **파일 크기 최적화**
   - FBX 파일은 크기가 클 수 있습니다 (5-20MB)
   - 웹용으로는 10MB 이하를 권장
   - Mixamo에서 다운로드 시 낮은 품질 옵션 선택 가능

2. **애니메이션 루프 설정**
   ```typescript
   action.setLoop(THREE.LoopRepeat, Infinity); // 무한 반복
   ```

3. **성능 고려사항**
   - 복잡한 모델일수록 성능에 영향
   - Low-poly 모델 권장 (삼각형 수: 5,000~15,000)
   - 텍스처 크기: 1024x1024 또는 2048x2048

4. **여러 FBX 파일 테스트**
   - 다양한 캐릭터를 시도해보세요
   - `FBX_MODEL_PATH`만 변경하면 쉽게 교체 가능

## 🎓 다음 단계

더 고급 기능을 원하시면:

1. **GLTF/GLB 포맷 사용**: FBX보다 웹 최적화됨
2. **OrbitControls 추가**: 마우스로 카메라 회전
3. **그림자 효과**: 더 사실적인 렌더링
4. **Post-processing**: 블룸, 톤맵핑 등 효과

---

문제가 있거나 추가 도움이 필요하면 GitHub Issues에 문의하세요!

