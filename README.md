# 최진우 - 게임 서버 개발자 포트폴리오

8년 차 게임 서버 프로그래머의 인터랙티브 포트폴리오 웹사이트입니다.

## ✨ 주요 개선사항

### 1. 🎨 블랙 & 화이트 디자인
- **세련된 모노톤**: 블랙 & 화이트 색상 테마로 전문적이고 깔끔한 디자인
- **고대비**: 검은색 배경 + 흰색 콘텐츠로 가독성 극대화
- **미니멀리즘**: 불필요한 색상을 제거하고 콘텐츠에 집중

### 2. 🎮 3D 캐릭터 & 픽셀 아트 배경 (하이브리드 JRPG)
- **FBX 3D 모델 지원**: Mixamo 등에서 다운로드한 전문 캐릭터 사용 가능
- **픽셀 아트 세계**: 클래식 JRPG 스타일의 풀밭, 나무, 집, 구름
- **둥둥 떠다니는 구름**: 실제 게임처럼 구름이 상하로 움직임
- **360도 자유 회전**: 마우스 드래그로 캐릭터와 배경을 함께 회전
- **하이브리드 조합**: 3D 캐릭터 + 2D 픽셀 배경의 독특한 조합

### 3. 📸 증명사진 공간
- **Overview 슬라이드**: 증명사진을 넣을 수 있는 전용 공간 제공
- **간편한 추가**: `public/profile.jpg` 파일만 추가하면 자동 표시
- **플레이스홀더**: 이미지가 없어도 깔끔한 UI 유지

### 4. 🎬 유튜브 동영상 배경
- DancevilSlide와 ZenoniaSlide에 유튜브 동영상 배경 지원
- 프로젝트 관련 영상을 직접 배경으로 표시
- 간단한 VIDEO ID 설정으로 즉시 적용

### 5. 📏 폰트 크기 최적화
- 모든 텍스트 크기를 최적화하여 한 화면에 표시
- 읽기 쉬운 줄 간격과 여백
- 반응형 디자인으로 모든 화면 크기 지원

## 🎮 특징

- **블랙 & 화이트 디자인**: 세련되고 전문적인 모노톤 컬러 테마
- **하이브리드 3D/2D**: 3D FBX 캐릭터 + 2D 픽셀 아트 배경의 독특한 조합
- **JRPG 스타일 배경**: 픽셀 아트 풀밭, 나무, 집, 둥둥 떠다니는 구름
- **360도 자유 회전**: 마우스 드래그로 캐릭터와 배경을 자유롭게 회전
- **증명사진 공간**: Overview 슬라이드에 전문적인 증명사진 표시
- **슬라이드 형식**: 스크롤 없이 좌우 화살표로 포트폴리오 탐색
- **분할 레이아웃**: 왼쪽 1/3 애니메이션 + 오른쪽 2/3 콘텐츠
- **유튜브 배경**: 특정 슬라이드에 유튜브 동영상 배경 추가
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **인터랙티브 UI**: 부드러운 전환 효과와 직관적인 네비게이션

## 🛠️ 기술 스택

- React 18
- TypeScript
- Vite
- Three.js (3D 그래픽)
- CSS3 (애니메이션)
- YouTube Embed API

## 🚀 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📦 배포

이 프로젝트는 GitHub Pages에 자동으로 배포됩니다.

1. GitHub 저장소 생성
2. Settings > Pages에서 GitHub Actions를 source로 선택
3. master 브랜치에 push하면 자동 배포

## 📝 포트폴리오 내용

1. **소개** - 기본 정보 및 전문 분야
2. **개요** - 경력 요약 및 전문성
3. **주요 역량** - 기술 스택 및 전문 분야
4. **댄스빌** - UGC 소셜 게임 프로젝트
5. **제노니아** - MMORPG 프로젝트
6. **개인 프로젝트** - 인코픽 (AI 기반 코인 추천 서비스)
7. **연락처** - GitHub, Blog 링크

## 🎯 조작 방법

### 포트폴리오 슬라이드 이동
- **키보드**: ← → 화살표 키 또는 ↑ ↓ 화살표 키
- **마우스**: 화면 좌우의 화살표 버튼 클릭
- **네비게이션**: 우측 도트 메뉴 클릭

### 3D 캐릭터 인터랙션 (왼쪽 애니메이션 영역)
- **마우스 드래그**: 좌우로 드래그하여 캐릭터를 360도 자유롭게 회전
- **왼쪽 드래그**: 캐릭터가 왼쪽으로 회전 (배경도 함께 회전)
- **오른쪽 드래그**: 캐릭터가 오른쪽으로 회전 (배경도 함께 회전)
- 2D 픽셀 아트 배경(풀밭, 길)이 캐릭터와 함께 회전하여 JRPG 느낌을 제공합니다

## 🎨 커스터마이징

### 증명사진 추가하기

**1단계: 이미지 준비**
- 증명사진 파일을 준비 (권장: 3:4 비율, 예: 360x480px)
- 파일명을 `profile.jpg` (또는 `profile.png`)로 변경

**2단계: 파일 배치**
```
portfolio/
├── public/
│   └── profile.jpg  ← 여기에 파일 복사
├── src/
└── ...
```

**3단계: 코드 수정**

`src/components/slides/OverviewSlide.tsx` 파일에서 주석을 해제:

```typescript
// 이 주석을 해제하세요:
<img 
  src="/profile.jpg" 
  alt="증명사진"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
  }}
/>

// 그리고 플레이스홀더를 주석 처리하세요:
{/* <div style={{ lineHeight: '1.5' }}>
  📷<br/>
  증명사진<br/>
  ...
</div> */}
```

### FBX 3D 모델 사용하기 (권장)

프로페셔널한 3D 캐릭터를 사용하고 싶다면 FBX 파일을 추가하세요!

#### 빠른 시작 (Mixamo 사용)
1. [Mixamo](https://www.mixamo.com/)에서 캐릭터 선택
2. "Running" 애니메이션 적용
3. FBX 형식으로 다운로드 (With Skin)
4. `public/character.fbx`에 파일 복사
5. 개발 서버 재시작 → 완료! 🎉

**⚠️ 중요: 파일 경로 설정**

FBX 파일 경로는 반드시 `import.meta.env.BASE_URL`을 사용해야 합니다:

```typescript
// ✅ 올바른 방법 (개발/배포 환경 모두 동작)
const FBX_MODEL_PATH = `${import.meta.env.BASE_URL}character.fbx`;

// ❌ 잘못된 방법 (GitHub Pages에서 작동하지 않음)
const FBX_MODEL_PATH = '/character.fbx';
```

**자세한 가이드**: [`FBX-MODEL-GUIDE.md`](./FBX-MODEL-GUIDE.md) 참고

### 기본 3D 캐릭터 색상 변경

FBX 파일이 없을 때 표시되는 기본 로봇 캐릭터의 색상을 변경할 수 있습니다.

**파일**: `src/components/PixelBackground.tsx`

```typescript
// 머리 색상 (112번째 줄 근처)
const headMaterial = new THREE.MeshPhongMaterial({ color: 0xffd93d });

// 몸통 색상
const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b6b });

// 팔 색상
const armMaterial = new THREE.MeshPhongMaterial({ color: 0xff8787 });

// 다리 색상
const legMaterial = new THREE.MeshPhongMaterial({ color: 0x4a5568 });
```

**자세한 가이드**: [`3D-CHARACTER-GUIDE.md`](./3D-CHARACTER-GUIDE.md) 참고

### 투명도 및 색상 조정

- 메인 컨텐츠 투명도: `src/App.css` → `.slide-content` → `rgba(255, 255, 255, 0.75)`
- 배경 투명도: `src/components/PixelBackground.css` → `opacity: 0.4`
- 색상 테마: `src/App.css`에서 `#667eea` 검색 후 변경

**자세한 가이드**: [`CUSTOMIZATION.md`](./CUSTOMIZATION.md) 참고

## 🎬 유튜브 배경 설정

DancevilSlide와 ZenoniaSlide에 유튜브 동영상 배경 추가하기:

### 1단계: VIDEO ID 찾기
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                ^^^^^^^^^^^^
                                VIDEO ID
```

### 2단계: 코드 수정
**파일:** `src/components/slides/DancevilSlide.tsx` 또는 `ZenoniaSlide.tsx`

```typescript
const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ'; // <- 여기에 VIDEO ID 입력
```

**자세한 가이드**: [`YOUTUBE-SETUP.md`](./YOUTUBE-SETUP.md) 참고

## 📚 문서

- **[FBX-MODEL-GUIDE.md](./FBX-MODEL-GUIDE.md)** - ⭐ FBX 3D 모델 사용 완벽 가이드 (Mixamo, 커스터마이징)
- **[3D-CHARACTER-GUIDE.md](./3D-CHARACTER-GUIDE.md)** - 3D 캐릭터 색상, 크기, 애니메이션 커스터마이징
- **[YOUTUBE-SETUP.md](./YOUTUBE-SETUP.md)** - 유튜브 배경 설정 완벽 가이드
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - 투명도, 폰트, 색상 커스터마이징 가이드
- **[USAGE.md](./USAGE.md)** - 프로젝트 구조 및 내용 수정 가이드
- **[DEPLOY.md](./DEPLOY.md)** - GitHub Pages 배포 가이드

## 📄 라이선스

Copyright © 2024 최진우 (Choi Jin-woo). All rights reserved.

