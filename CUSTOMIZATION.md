# 포트폴리오 커스터마이징 가이드

## 🎨 1. 투명도 및 배경 조정

### 메인 컨텐츠 투명도
**파일:** `src/App.css`

```css
.slide-content {
  background: rgba(255, 255, 255, 0.75);  /* 0.75 = 75% 불투명도 */
  backdrop-filter: blur(8px);              /* 배경 블러 효과 */
}
```

- 투명도 조정: `0.75` 값을 `0.5` ~ `0.9` 사이로 변경
  - `0.5`: 더 투명 (배경 애니메이션이 더 잘 보임)
  - `0.9`: 더 불투명 (텍스트가 더 선명함)

### 배경 애니메이션 투명도
**파일:** `src/components/PixelBackground.css`

```css
.pixel-background {
  opacity: 0.4;  /* 0.0 (완전 투명) ~ 1.0 (완전 불투명) */
}
```

## 📏 2. 폰트 크기 조정

### 전역 폰트 크기
**파일:** `src/App.css`

```css
/* 제목 크기 */
.slide-content h1 {
  font-size: 2.5rem;  /* 조정 가능: 2rem ~ 3rem */
}

.slide-content h2 {
  font-size: 1.6rem;  /* 조정 가능: 1.4rem ~ 2rem */
}

.slide-content h3 {
  font-size: 1.2rem;  /* 조정 가능: 1rem ~ 1.5rem */
}

/* 본문 크기 */
.slide-content p {
  font-size: 0.95rem;  /* 조정 가능: 0.85rem ~ 1.1rem */
  line-height: 1.6;     /* 줄 간격: 1.5 ~ 1.8 */
}

.slide-content li {
  font-size: 0.9rem;   /* 조정 가능: 0.8rem ~ 1rem */
  line-height: 1.6;
}
```

### 슬라이드별 폰트 조정
각 슬라이드 파일에서 개별적으로 조정 가능:

**파일:** `src/components/slides/IntroSlide.tsx` (예시)

```typescript
<h1 style={{ fontSize: '2.8rem' }}>  {/* 여기서 개별 조정 */}
  게임 서버 프로그래머
</h1>
```

## 🎮 3. 캐릭터 이미지 커스터마이징

### 이미지 사용 방법

1. **이미지 파일 준비**
   - `public/` 폴더에 이미지 저장 (예: `public/character.png`)
   - 권장 크기: 80x80px ~ 200x200px
   - 권장 형식: PNG (투명 배경)

2. **코드 수정**
   **파일:** `src/components/PixelBackground.tsx`
   
   ```typescript
   // 이 줄을 찾아서 수정
   const CHARACTER_IMAGE_PATH = '/character.png';  // null에서 경로로 변경
   ```

3. **이미지 크기 조정**
   ```typescript
   // drawCharacter 함수 내부
   const imgWidth = 80;   // 원하는 너비
   const imgHeight = 80;  // 원하는 높이
   ```

### 기본 픽셀 캐릭터로 되돌리기
```typescript
const CHARACTER_IMAGE_PATH = null;  // 다시 null로 설정
```

## 🎨 4. 색상 테마 변경

### 메인 색상
**파일:** `src/App.css`

```css
/* 주요 색상 변수 */
/* 기본 색상: #667eea (보라색) -> 원하는 색상으로 전체 검색 후 변경 */

/* 그라데이션 색상 */
background: linear-gradient(135deg, 
  rgba(102, 126, 234, 0.9) 0%,   /* 첫 번째 색상 */
  rgba(118, 75, 162, 0.9) 100%   /* 두 번째 색상 */
);

/* 뱃지 색상 */
.tech-badge {
  background: rgba(102, 126, 234, 0.8);
}
```

### 색상 조합 예시

**블루 테마:**
```css
rgba(59, 130, 246, 0.9)   /* 파란색 */
rgba(37, 99, 235, 0.9)    /* 진한 파란색 */
```

**그린 테마:**
```css
rgba(16, 185, 129, 0.9)   /* 녹색 */
rgba(5, 150, 105, 0.9)    /* 진한 녹색 */
```

**핑크 테마:**
```css
rgba(236, 72, 153, 0.9)   /* 핑크 */
rgba(219, 39, 119, 0.9)   /* 진한 핑크 */
```

## 📦 5. 패딩 및 여백 조정

### 슬라이드 내부 여백
**파일:** `src/App.css`

```css
.slide-content {
  padding: 40px;          /* 내부 여백: 30px ~ 60px */
  max-height: 90vh;       /* 최대 높이: 80vh ~ 95vh */
}

/* 모바일 */
@media (max-width: 768px) {
  .slide-content {
    padding: 25px;        /* 모바일 여백: 20px ~ 30px */
  }
}
```

### 요소 간 간격
```css
.highlight-item {
  padding: 15px;          /* 카드 내부 여백 */
  margin-bottom: 10px;    /* 카드 간 간격 */
}

.skills-grid {
  gap: 15px;              /* 스킬 카드 간격 */
}
```

## 🖼️ 6. 배경 애니메이션 설정

### 스크롤 속도
**파일:** `src/components/PixelBackground.tsx`

```typescript
// animate 함수 내부
bgOffset += 2;  // 숫자가 클수록 빠름 (1 ~ 5 권장)
```

### 구름 설정
```typescript
const clouds = Array.from({ length: 5 }, () => ({  // 구름 개수 (3 ~ 8)
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height * 0.4,
  speed: 0.2 + Math.random() * 0.3,  // 속도 (0.1 ~ 0.5)
}));
```

### 캐릭터 애니메이션 속도
```typescript
// animate 함수 내부
if (frameCounter % 10 === 0) {  // 숫자가 작을수록 빠름 (5 ~ 15)
  characterFrame = (characterFrame + 1) % 2;
}
```

## 🎯 7. 빠른 설정 조합

### 배경이 잘 보이는 설정
```css
/* src/App.css */
.slide-content {
  background: rgba(255, 255, 255, 0.65);  /* 더 투명하게 */
}

/* src/components/PixelBackground.css */
.pixel-background {
  opacity: 0.6;  /* 배경 애니메이션 더 진하게 */
}
```

### 텍스트가 선명한 설정
```css
/* src/App.css */
.slide-content {
  background: rgba(255, 255, 255, 0.85);  /* 더 불투명하게 */
}

/* src/components/PixelBackground.css */
.pixel-background {
  opacity: 0.3;  /* 배경 애니메이션 더 연하게 */
}
```

### 컴팩트한 폰트 설정
```css
/* src/App.css */
.slide-content h2 {
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.slide-content p {
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 8px;
}
```

## 💡 개발 팁

### 변경사항 즉시 확인
```bash
npm run dev
```
개발 서버를 실행하면 파일을 저장할 때마다 자동으로 새로고침됩니다.

### 빌드 전 확인
```bash
npm run build
npm run preview
```

### 브라우저 개발자 도구 활용
- F12 키로 개발자 도구 열기
- Elements 탭에서 실시간으로 CSS 수정 테스트
- 마음에 드는 값을 찾으면 코드에 적용

---

더 자세한 내용은 `USAGE.md`를 참고하세요!

