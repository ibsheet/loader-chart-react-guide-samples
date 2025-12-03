# loader-chart-react-guide-samples  👋

## Guide sample using loader and ibchart and react

## 구조

1. `main.jsx`는 `index.html`에 `App.jsx`를 렌더링 시키는 역할.
2. `App.jsx`는 메인 페이지입니다.
3. `Layout.jsx`에는 페이지의 레이아웃 컴포넌트가 있습니다.
4. `react-router-dom`을 통해 라우팅을 구현하여, 각 샘플 페이지를 URL을 통해 렌더링합니다.
5. `Home.jsx`는 메인 페이지에서 보여지는 컴포넌트를 가지고 있습니다.
6. `<IBChart />` 컴포넌트는 `Content` 컴포넌트에서 사용합니다.
7. `Redux Toolkit`을 사용하여 전역 객체를 상태 관리 합니다. (`store/chartSlice.js`에서 slice 정의)
8. `ChartCreate.jsx`에서 차트 생성 공통 모듈이 있습니다.
9. `ErrorBoundary.jsx`에서 전역 에러 처리를 합니다.
10. `hooks/useScrollToTop.js`에서 스크롤 관련 커스텀 훅을 제공합니다.

### 메인 화면 흐름

순서: `App.jsx => Layout.jsx => Section.jsx => Navigation.jsx => Home.jsx => Content.jsx`

### 사용기술

- `@ibsheet/loader: 1.3.3`
- `React 19, Redux Toolkit, MUI (Material-UI), Bootstrap, SweetAlert2, React-Icons`
- `Vite` (빌드 도구)

### 설치방법

1. `clone`을 받는다.
2. `yarn`을 설치해줍니다. `npm install --global yarn`
3. `yarn`을 하여 패키지 모듈을 설치해줍니다.
4. `public/lib`에 `ibsheet` 라이브러리가 들어있는 `assets` 폴더를 넣어줍니다. (`src/config/config.jsx`에서 파일위치는 변경할 수 있음.)
5. `yarn dev` // 개발 서버 실행
6. `yarn build` // 프로덕션 빌드 생성
7. `yarn preview` // 빌드된 결과물 미리보기
