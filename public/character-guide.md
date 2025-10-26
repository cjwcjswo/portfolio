# 캐릭터 이미지 커스터마이징 가이드

## 📝 이미지 추가 방법

1. **이미지 파일 준비**
   - 권장 크기: 80x80 픽셀 ~ 200x200 픽셀
   - 권장 형식: PNG (투명 배경 지원)
   - 파일명 예시: `character.png`, `my-avatar.png` 등

2. **이미지 파일 위치**
   - `public/` 폴더에 이미지 파일을 저장합니다
   - 예: `public/character.png`

3. **코드 수정**
   - `src/components/PixelBackground.tsx` 파일을 엽니다
   - 다음 줄을 찾습니다:
   ```typescript
   const CHARACTER_IMAGE_PATH = null; // 여기에 이미지 경로를 입력하세요
   ```
   
   - 이미지 경로로 변경합니다:
   ```typescript
   const CHARACTER_IMAGE_PATH = '/character.png'; // 또는 '/your-image.png'
   ```

## 🎨 이미지 크기 조정

이미지 크기를 조정하려면 `PixelBackground.tsx`에서 다음 값을 변경하세요:

```typescript
// 캐릭터 그리기 함수 내부
const imgWidth = 80;  // 이미지 너비 (원하는 크기로 조정)
const imgHeight = 80; // 이미지 높이 (원하는 크기로 조정)
```

## 💡 팁

1. **투명 배경 이미지 추천**
   - PNG 형식으로 배경이 투명한 이미지를 사용하면 더 자연스럽습니다

2. **애니메이션 효과**
   - 이미지 캐릭터도 달리기 효과(위아래 바운스)가 자동으로 적용됩니다

3. **기본 픽셀 캐릭터로 되돌리기**
   - `CHARACTER_IMAGE_PATH`를 다시 `null`로 설정하면 됩니다:
   ```typescript
   const CHARACTER_IMAGE_PATH = null;
   ```

## 📂 예시 구조

```
public/
  ├── character.png      <- 여기에 이미지 추가
  ├── avatar.png
  └── hero.png

src/
  └── components/
      └── PixelBackground.tsx  <- 여기서 경로 설정
```

## 🖼️ 권장 이미지 스타일

- 게임 캐릭터 스프라이트
- 아바타 이미지
- 로고 또는 마스코트
- 픽셀 아트 캐릭터

## ⚠️ 주의사항

- 이미지 파일이 너무 크면 로딩 시간이 길어질 수 있습니다 (1MB 이하 권장)
- 저작권이 있는 이미지는 사용에 주의하세요
- 이미지 경로가 잘못되면 콘솔에 오류 메시지가 표시되고 기본 픽셀 캐릭터가 표시됩니다

