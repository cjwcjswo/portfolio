# 포트폴리오 사용 가이드

이 문서는 포트폴리오를 커스터마이징하고 관리하는 방법을 설명합니다.

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/
│   │   ├── slides/           # 각 슬라이드 컴포넌트
│   │   │   ├── IntroSlide.tsx        # 소개 슬라이드
│   │   │   ├── OverviewSlide.tsx     # 개요 슬라이드
│   │   │   ├── SkillsSlide.tsx       # 주요 역량 슬라이드
│   │   │   ├── DancevilSlide.tsx     # 댄스빌 프로젝트
│   │   │   ├── ZenoniaSlide.tsx      # 제노니아 프로젝트
│   │   │   ├── PersonalProjectSlide.tsx  # 개인 프로젝트
│   │   │   └── ContactSlide.tsx      # 연락처 슬라이드
│   │   ├── PixelBackground.tsx   # 픽셀 애니메이션 배경
│   │   └── PixelBackground.css
│   ├── App.tsx               # 메인 앱 컴포넌트
│   ├── App.css              # 전역 스타일
│   ├── main.tsx             # 앱 진입점
│   └── index.css            # 기본 스타일
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 배포 설정
├── index.html               # HTML 템플릿
├── vite.config.ts          # Vite 설정
├── tsconfig.json           # TypeScript 설정
└── package.json            # 프로젝트 의존성

```

## ✏️ 내용 수정하기

### 1. 기본 정보 변경

#### 이름 및 소속 변경
**파일:** `src/components/slides/IntroSlide.tsx`, `OverviewSlide.tsx`, `ContactSlide.tsx`

```typescript
// IntroSlide.tsx
<h2 style={{ fontSize: '2.5rem', border: 'none', color: '#667eea' }}>
  최진우  // <- 여기를 수정
</h2>
<p style={{ fontSize: '1.3rem', color: '#718096', marginTop: '10px' }}>
  Com2us | 책임 | 8년 차  // <- 여기를 수정
</p>
```

#### 연락처 변경
**파일:** `src/components/slides/OverviewSlide.tsx`, `ContactSlide.tsx`

```typescript
<a href="https://github.com/사용자명" ...>  // <- GitHub 링크 수정
<a href="https://블로그주소" ...>          // <- 블로그 링크 수정
```

### 2. 스킬 수정

**파일:** `src/components/slides/SkillsSlide.tsx`

```typescript
const skills = [
  {
    title: 'Backend Development',
    items: 'PHP, Golang(Go), C++, Python, Node.js',  // <- 기술 목록 수정
    icon: '💻'  // <- 아이콘 변경 가능
  },
  // ... 나머지 스킬들
];
```

새로운 스킬 카테고리 추가:
```typescript
{
  title: '새로운 카테고리',
  items: '관련 기술들',
  icon: '🎯'
},
```

### 3. 프로젝트 경험 수정

#### 댄스빌 프로젝트 수정
**파일:** `src/components/slides/DancevilSlide.tsx`

```typescript
<h2>🎵 댄스빌 (Dancevil)</h2>  // <- 프로젝트 이름 수정

<p style={{ margin: 0, fontSize: '1.05rem' }}>
  프로젝트 설명 수정...  // <- 설명 수정
</p>

// 기술 스택 수정
<span className="tech-badge">PHP</span>
<span className="tech-badge">Golang</span>
// ... 필요한 기술 추가/삭제
```

#### 제노니아 프로젝트 수정
**파일:** `src/components/slides/ZenoniaSlide.tsx`

동일한 방식으로 수정

### 4. 개인 프로젝트 수정

**파일:** `src/components/slides/PersonalProjectSlide.tsx`

```typescript
<h3>🪙 인코픽 (Incopick)</h3>  // <- 프로젝트 이름
<p>AI 기반 코인 추천 서비스</p>  // <- 설명

<a href="https://incopick.com" ...>  // <- URL 변경
```

## 🎨 디자인 커스터마이징

### 색상 테마 변경

**파일:** `src/App.css`

```css
/* 주요 색상 */
.slide-content h2 {
  border-bottom: 3px solid #667eea;  /* <- 메인 색상 */
}

.skill-category {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* <- 그라데이션 */
}

.tech-badge {
  background: #667eea;  /* <- 뱃지 색상 */
}
```

### 폰트 변경

**파일:** `src/App.css`

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  /* <- 폰트 변경 */
}
```

## 🎮 픽셀 애니메이션 커스터마이징

**파일:** `src/components/PixelBackground.tsx`

### 배경 투명도 조정
**파일:** `src/components/PixelBackground.css`

```css
.pixel-background {
  opacity: 0.4;  /* <- 0.0 (투명) ~ 1.0 (불투명) */
}
```

### 캐릭터 크기 조정
```typescript
// drawCharacter 함수 내부
const size = 4;  // <- 픽셀 크기 (기본: 4)
```

### 배경 스크롤 속도 조정
```typescript
// animate 함수 내부
bgOffset += 2;  // <- 숫자가 클수록 빠름 (기본: 2)
```

### 구름 개수 및 속도
```typescript
const clouds = Array.from({ length: 5 }, () => ({  // <- 구름 개수 (기본: 5)
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height * 0.4,
  speed: 0.2 + Math.random() * 0.3,  // <- 속도 범위 조정
}));
```

## 📱 슬라이드 추가/제거

### 슬라이드 추가하기

1. **새 슬라이드 컴포넌트 생성**
   
   `src/components/slides/NewSlide.tsx` 파일 생성:
   ```typescript
   const NewSlide = () => {
     return (
       <div className="slide-content">
         <h2>새 슬라이드 제목</h2>
         <p>내용...</p>
       </div>
     );
   };

   export default NewSlide;
   ```

2. **App.tsx에 슬라이드 등록**
   
   **파일:** `src/App.tsx`
   ```typescript
   import NewSlide from './components/slides/NewSlide';

   function App() {
     const [currentSlide, setCurrentSlide] = useState(0);
     const totalSlides = 8;  // <- 슬라이드 개수 증가

     const slides = [
       <IntroSlide key={0} />,
       <OverviewSlide key={1} />,
       // ... 기존 슬라이드들
       <NewSlide key={7} />,  // <- 새 슬라이드 추가
     ];
   ```

### 슬라이드 제거하기

1. **App.tsx에서 슬라이드 제거**
   ```typescript
   const totalSlides = 6;  // <- 개수 감소
   
   const slides = [
     // 제거할 슬라이드를 배열에서 삭제
   ];
   ```

2. **(선택사항) 컴포넌트 파일 삭제**
   - 해당 슬라이드 파일을 `src/components/slides/`에서 삭제

## 🔍 디버깅

### 개발 서버 실행
```bash
npm run dev
```
http://localhost:5173 에서 확인

### 빌드 테스트
```bash
npm run build
npm run preview
```

### 브라우저 개발자 도구
- F12 키를 눌러 개발자 도구 열기
- Console 탭: JavaScript 오류 확인
- Network 탭: 리소스 로드 문제 확인
- Elements 탭: HTML/CSS 구조 확인

## 💡 팁

1. **이미지 추가**: `public/` 폴더에 이미지를 넣고 `/이미지명.jpg`로 참조
2. **아이콘 변경**: 이모지를 사용하여 쉽게 아이콘 변경 가능
3. **애니메이션 추가**: CSS transitions와 transforms를 활용
4. **반응형 테스트**: 브라우저에서 F12 > 디바이스 툴바 토글 (Ctrl+Shift+M)

## 🆘 문제 해결

### 빌드 오류
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### TypeScript 오류
- `tsconfig.json`에서 strict 모드 조정
- any 타입 사용 (비추천)

### 스타일이 적용되지 않음
- 브라우저 캐시 삭제 (Ctrl+F5)
- CSS 파일 import 확인

---

더 자세한 내용은 [React 공식 문서](https://react.dev/)와 [Vite 공식 문서](https://vitejs.dev/)를 참고하세요!

