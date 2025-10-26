# GitHub Pages 배포 가이드

이 문서는 포트폴리오를 GitHub Pages에 배포하는 방법을 안내합니다.

## 🚀 자동 배포 (GitHub Actions)

이 프로젝트는 GitHub Actions를 통한 자동 배포가 설정되어 있습니다.

### 설정 방법

1. **GitHub 저장소 생성**
   ```bash
   # GitHub에서 새 저장소 생성 (예: portfolio)
   # 저장소를 public으로 설정 (GitHub Pages 무료 사용)
   ```

2. **Git 초기화 및 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 포트폴리오 웹사이트"
   git branch -M master
   git remote add origin https://github.com/사용자명/portfolio.git
   git push -u origin master
   ```

3. **GitHub Pages 설정**
   - GitHub 저장소의 **Settings** 탭으로 이동
   - 좌측 메뉴에서 **Pages** 클릭
   - **Source**를 **GitHub Actions**로 선택
   - 자동으로 `.github/workflows/deploy.yml` 파일이 감지됩니다

4. **배포 확인**
   - master 브랜치에 푸시하면 자동으로 배포가 시작됩니다
   - Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
   - 배포가 완료되면 `https://사용자명.github.io/portfolio/` 에서 확인 가능합니다

### vite.config.ts의 base 경로 수정

만약 저장소 이름이 `portfolio`가 아니라면, `vite.config.ts` 파일을 수정해야 합니다:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/저장소이름/',  // 저장소 이름에 맞게 수정
})
```

예를 들어, 저장소 이름이 `my-resume`라면:
```typescript
base: '/my-resume/',
```

### GitHub Pages 사용자/조직 사이트로 배포하기

만약 `사용자명.github.io` 형식으로 배포하고 싶다면:

1. 저장소 이름을 `사용자명.github.io`로 생성
2. `vite.config.ts`의 base를 다음과 같이 수정:
   ```typescript
   base: '/',
   ```

## 🛠️ 로컬 테스트

배포 전에 로컬에서 빌드 결과를 확인할 수 있습니다:

```bash
# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📝 배포 문제 해결

### 1. Actions 권한 오류
- Settings > Actions > General로 이동
- Workflow permissions를 "Read and write permissions"로 설정

### 2. Pages가 활성화되지 않음
- Settings > Pages에서 Source를 GitHub Actions로 변경
- 저장소를 public으로 설정 (private 저장소는 유료 플랜 필요)

### 3. 404 에러
- `vite.config.ts`의 base 경로가 저장소 이름과 일치하는지 확인
- GitHub Pages 설정에서 올바른 브랜치가 선택되었는지 확인

### 4. CSS/JS 파일 로드 실패
- 브라우저 개발자 도구(F12)의 Network 탭에서 파일 경로 확인
- base 경로 설정이 올바른지 재확인

## 🎯 배포 후 확인사항

- [ ] 모든 슬라이드가 정상 동작하는지 확인
- [ ] 화살표 네비게이션이 작동하는지 확인
- [ ] 픽셀 애니메이션 배경이 표시되는지 확인
- [ ] 외부 링크(GitHub, Blog)가 정상 작동하는지 확인
- [ ] 모바일에서도 정상 표시되는지 확인

## 📱 모바일 최적화

이 포트폴리오는 반응형으로 제작되었으며, 다음 환경에서 테스트되었습니다:
- 데스크톱 (1920x1080 이상)
- 태블릿 (768px ~ 1024px)
- 모바일 (320px ~ 767px)

## 🔄 업데이트 방법

포트폴리오 내용을 업데이트하려면:

1. 해당 슬라이드 컴포넌트 파일 수정 (`src/components/slides/`)
2. 변경사항 커밋 및 푸시
   ```bash
   git add .
   git commit -m "포트폴리오 내용 업데이트"
   git push
   ```
3. GitHub Actions가 자동으로 배포를 진행합니다

---

문제가 발생하면 [GitHub Issues](https://github.com/사용자명/portfolio/issues)에 문의해주세요!

