# 🎬 유튜브 배경 설정 가이드

DancevilSlide와 ZenoniaSlide에 유튜브 동영상 배경을 설정하는 방법입니다.

## 📹 유튜브 동영상 ID 찾기

### 1단계: 유튜브 동영상 URL 확인

유튜브 동영상 URL은 다음과 같은 형식입니다:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                 ^^^^^^^^^^^^
                                 이 부분이 VIDEO ID
```

### 2단계: VIDEO ID 복사

URL에서 `v=` 다음에 오는 문자열이 VIDEO ID입니다.

**예시:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- VIDEO ID: `dQw4w9WgXcQ`

- URL: `https://www.youtube.com/watch?v=jNQXAC9IVRw`
- VIDEO ID: `jNQXAC9IVRw`

## ⚙️ 설정 방법

### DancevilSlide 배경 변경

**파일:** `src/components/slides/DancevilSlide.tsx`

```typescript
const DancevilSlide = () => {
  // 유튜브 동영상 ID 설정
  const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ'; // <- 여기를 변경하세요!
  
  return (
    // ...
  );
};
```

### ZenoniaSlide 배경 변경

**파일:** `src/components/slides/ZenoniaSlide.tsx`

```typescript
const ZenoniaSlide = () => {
  // 유튜브 동영상 ID 설정
  const YOUTUBE_VIDEO_ID = 'jNQXAC9IVRw'; // <- 여기를 변경하세요!
  
  return (
    // ...
  );
};
```

## 🎨 배경 투명도 조정

유튜브 배경의 투명도를 조정하려면:

**파일:** `src/App.css`

```css
.youtube-background iframe {
  /* ... */
  opacity: 0.3;  /* 0.1 (매우 연함) ~ 0.5 (진함) */
}
```

- `0.1` - 거의 안 보임 (배경 힌트만)
- `0.3` - 기본값 (적당히 보임)
- `0.5` - 진하게 보임 (주의: 텍스트 가독성 저하 가능)

## 💡 추천 동영상 타입

### 좋은 배경 동영상:
- ✅ 게임 플레이 영상
- ✅ 프로젝트 소개 영상
- ✅ 부드러운 움직임의 영상
- ✅ 배경음악이 있는 영상 (자동 음소거됨)

### 피해야 할 동영상:
- ❌ 너무 빠른 장면 전환
- ❌ 텍스트가 많은 영상
- ❌ 너무 밝거나 어두운 영상
- ❌ 저작권이 있는 영상

## 🔧 고급 설정

### 동영상 시작 시간 설정

특정 시간부터 재생하고 싶다면:

**파일:** `src/components/YouTubeBackground.tsx`

```typescript
<iframe
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=30`}
  //                                                                                                                                                  ^^^^^^^^
  //                                                                                                                                                  30초부터 시작
  // ...
/>
```

### 다른 슬라이드에도 유튜브 배경 추가

다른 슬라이드에도 배경을 추가하고 싶다면:

1. 해당 슬라이드 파일을 엽니다 (예: `IntroSlide.tsx`)

2. 맨 위에 import 추가:
```typescript
import YouTubeBackground from '../YouTubeBackground';
```

3. 컴포넌트 내용을 감싸기:
```typescript
const IntroSlide = () => {
  const YOUTUBE_VIDEO_ID = 'YOUR_VIDEO_ID';
  
  return (
    <>
      <YouTubeBackground videoId={YOUTUBE_VIDEO_ID} />
      <div className="slide-content" style={{ position: 'relative', zIndex: 10 }}>
        {/* 기존 내용 */}
      </div>
    </>
  );
};
```

## ⚠️ 주의사항

1. **자동재생 정책**: 일부 브라우저는 음소거된 동영상만 자동재생을 허용합니다.
   - 이 설정은 자동으로 음소거(`mute=1`)로 설정되어 있습니다.

2. **임베드 제한**: 일부 유튜브 동영상은 임베드가 비활성화되어 있을 수 있습니다.
   - 이런 경우 다른 동영상을 선택해야 합니다.

3. **성능**: 여러 슬라이드에 동영상 배경을 추가하면 성능이 저하될 수 있습니다.
   - 필요한 슬라이드에만 적용하는 것을 권장합니다.

4. **저작권**: 사용하는 동영상의 저작권을 확인하세요.
   - 자신이 만든 영상을 사용하는 것이 가장 안전합니다.

## 🎯 테스트

설정 후 확인:

```bash
npm run dev
```

브라우저에서 http://localhost:5173/portfolio/ 로 이동하여:
1. DancevilSlide (4번째 슬라이드)로 이동
2. ZenoniaSlide (5번째 슬라이드)로 이동
3. 배경에 유튜브 동영상이 재생되는지 확인

## 🐛 문제 해결

### 동영상이 보이지 않아요
1. VIDEO ID가 정확한지 확인
2. 브라우저 콘솔에서 오류 메시지 확인
3. 해당 유튜브 동영상이 임베드를 허용하는지 확인

### 동영상이 너무 흐릿해요
`src/App.css`에서 opacity 값을 높이세요 (0.3 → 0.4)

### 동영상이 너무 선명해서 텍스트가 안 보여요
`src/App.css`에서 opacity 값을 낮추세요 (0.3 → 0.2)

### 모바일에서 재생이 안 돼요
iOS Safari는 자동재생에 제한이 있습니다. `playsinline=1` 파라미터가 추가되어 있으나, 일부 기기에서는 작동하지 않을 수 있습니다.

---

궁금한 점이 있으시면 이슈를 등록해주세요!

