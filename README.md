# 🏢 My-Company 
![스크린샷 2023-09-20 210745](https://github.com/hyeonbinnn/my-company/assets/117449788/96fb4f07-edae-4fe9-b518-d314be4db88c)

<br>
<br>
<br>

## 목차
- [프로젝트 정보](#프로젝트-정보)
- [폴더 구조](#폴더-구조)
- [사용 기술](#사용-기술)
- [프로젝트 관리](#프로젝트-관리)
- [구현 페이지](#구현-페이지)
- [트러블 슈팅](#트러블-슈팅)

<br>
<br>
<br>

## 프로젝트 정보
### 🏢 My-Company : 회사 홈페이지 만들기
마이 컴퍼니는 회사 소개, 제공하는 서비스, 뉴스 구독, 소통을 위한 게시판, 댓글, 연락망을 통해 사용자와 하나로 연결되는 웹사이트입니다. <br>

- **구현 기간 :**  2023.12.05 ~ 2023.12.28
- **배포 사이트 :**  <strong>[배포 URL 바로가기](https://my-companyyy.netlify.app)</strong>
- **개인 회고 블로그 :**  <strong>[블로그 바로가기](https://velog.io/@hyeonbinnn/React-TypeScript-%EB%A7%88%EC%9D%B4-%EC%BB%B4%ED%8D%BC%EB%8B%88-%ED%9A%8C%EA%B3%A0%EB%A1%9D-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81)</strong>
<br>

### 🏢 My-Company 소개
- 🌍 회사가 추구하는 가치와 방향성을 담아냈습니다. <br>
- 📩 이메일을 통해 구독 서비스를 제공합니다. <br>
- 💻 회사 브랜드와, CEO, 제공하는 서비스를 보여줍니다.<br>
- 🪧 게시판을 통해 게시글과 댓글을 작성하며 소통할 수 있습니다. <br>
- 🗺️ 지도기능과 위치 서비스를 통해 연락망을 구축합니다. <br>


<br>
<br>
<br>

## 폴더 구조
```
🏢 MY-COMPANY
├─ 📦 public
│  ├─ ⭐ company.ico
│  └─ 📃 index.html
├─ 📦 src
│  ├─ 📂 api
│  ├─ 📂 assets
│  ├─ 📂 components
│  │  ├─ 📂 Bar
│  │  ├─ 📂 Button
│  │  ├─ 📂 Comment
│  │  ├─ 📂 Error
│  │  ├─ 📂 Header
│  │  ├─ 📂 Layout
│  │  ├─ 📂 Loading
│  │  ├─ 📂 Modal
│  │  ├─ 📂 Post
│  │  └─ 📂 Table
│  ├─ 📂 data
│  ├─ 📂 hooks
│  ├─ 📂 pages
│  │  ├─ 📂 AboutPage
│  │  ├─ 📂 ContactPage
│  │  ├─ 📂 ErrorPage
│  │  ├─ 📂 HomePage
│  │  ├─ 📂 NoticePage
│  │  └─ 📂 ServicePage
│  ├─ 📂 recoil
│  ├─ 📂 routes
│  ├─ 📂 styles
│  ├─ 📂 types
│  ├─ 📂 utils
|  ├─ 📜 App.tsx
|  ├─ 📜 axios.ts
|  └─ 📜 index.tsx
```

<br>
<br>
<br>

## 사용 기술
#### [ FrontEnd ]
<div>
<img src="https://img.shields.io/badge/typescript-3178C6?style=square&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React Query-FF4154?style=square&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=square&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/Recoil-3578E5?style=square&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">
</div>

<br>

#### [ BackEnd ]
**FAKE API 사용**

<br>

#### [ Version ]
```
"@types/react": "^18.2.79",
"@types/react-dom": "^18.2.25",
"axios": "^1.6.7",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-hook-form": "^7.50.1",
"react-kakao-maps-sdk": "^1.1.15",
"react-query": "^3.39.3",
"react-router-dom": "^6.14.2",
"react-scripts": "5.0.1",
"recoil": "^0.7.7",
"styled-components": "^6.1.8",
"styled-normalize": "^8.0.7",
"typescript": "^4.9.5",
"web-vitals": "^2.1.4"
```

<br>
<br>
<br>

## 프로젝트 관리
- 개인 프로젝트에도 이슈를 사용하여 개발할 기능 등 프로젝트의 전반적인 진행 상황을 파악해 우선순위를 정하거나 작업을 분배했습니다.
- 작업 내용, 결정 사항 내용 등이 이슈에 기록되어 있어 나중에 참고할 수 있고, 프로젝트의 문서화와 작은 지식이라도 공유가 가능합니다. <br><br> ![제목 없음](https://github.com/hyeonbinnn/my-company/assets/117449788/45fa8f7c-678f-4b41-b598-393140a72cd9)

<br>
<br>
<br>

## 구현 페이지
### 📱 Mobile ver.

|   메인 홈 & 이메일 구독   |   회사 소개    |  서비스  |  공지 게시판 & 업로드  |
| :---------: | :---------: | :---------: | :---------: |
| ![home](https://github.com/hyeonbinnn/my-company/assets/117449788/ead60c7c-3e1a-48bb-b312-89421c6e8b4b) | ![about](https://github.com/hyeonbinnn/my-company/assets/117449788/d5115ce4-4412-4936-a21f-98276833ca4f) | ![서비스](https://github.com/hyeonbinnn/my-company/assets/117449788/88b02716-d41e-4fe8-80c8-f813b910d233) | ![게시글 업로드](https://github.com/hyeonbinnn/my-company/assets/117449788/c9dff288-2645-40cf-8874-5de60f945756) |
<br>

|   게시글 상세   |  게시글 댓글    |  게시글 삭제  |  지도 연락망 |
| :---------: | :---------: | :---------: | :---------: |
| ![게시글 상세](https://github.com/hyeonbinnn/my-company/assets/117449788/65cdd151-f5a1-46ad-932f-42b806eaf60a) | ![게시글 댓글](https://github.com/hyeonbinnn/my-company/assets/117449788/6358ee7b-763d-470a-a899-9d823a4de5e8) | ![게시글 삭제](https://github.com/hyeonbinnn/my-company/assets/117449788/13929d3b-7e13-4583-a533-305acc92720b) | ![contact](https://github.com/hyeonbinnn/my-company/assets/117449788/3465701c-128f-4c26-95e9-fdcf7531a1b6) |

<br>
<br>

### 💻 PC ver.
|   메인 홈   |   소개    |
| :---------: | :---------: |
| ![홈 메인](https://github.com/hyeonbinnn/my-company/assets/117449788/fcdf7101-b032-47df-825f-455d50a0e1cc) | ![소개](https://github.com/hyeonbinnn/my-company/assets/117449788/42d8600b-7f62-4889-a59c-5e8e9035d79a) |
<br>

|    서비스   | 지도 & 연락망 |
| :---------: | :---------: |
| ![서비스](https://github.com/hyeonbinnn/my-company/assets/117449788/a4484c4c-d1f4-4cd8-96a4-08a623882979) | ![지도 연락망](https://github.com/hyeonbinnn/my-company/assets/117449788/154f5818-503c-4bf8-b623-aed9fe8dd036) |
<br>

|   게시글 업로드   |   게시글 삭제 & 댓글    |
| :---------: | :---------: |
| ![게시글 업로드](https://github.com/hyeonbinnn/my-company/assets/117449788/85dba3c6-e650-48f5-9b6d-cd69060ead43) | ![게시글 삭제](https://github.com/hyeonbinnn/my-company/assets/117449788/edb2eb18-5d78-4dae-b90c-23d3c321d81e) |

<br>
<br>
<br>

## 트러블 슈팅
### ✔️ 코드 스플리팅으로 번들 크기 감소
1. 일단 코드 스플리팅을 하기 전에 WHY? 왜 필요할까? 라는 생각을 먼저했습니다. 리액트와 같이 SPA로 개발된 프로젝트를 빌드하면 자바스크립트 파일로 번들링되는데, 하나의 파일로 번들링된 결과물인 배포 사이트에 들어가면 처음 진입 시 모든 페이지에 대한 정보를 불러오게 되고, 이는 초기 로딩을 느리게 만들어 사용자 경험에 좋지 않습니다.

2. 이같이 초기 로딩이 느려지는 것이 CSR의 문제점 중 하나며, 이를 해결하기 위해 SSR 같은 방법도 있습니다. 하지만 성능 향상과 SEO만을 위해 SSR을 사용하기 보다는 리액트에서도 다양한 성능 향상 방법을 통해 문제점을 개선해보고자 리팩토링에서 코드 스플리팅을 하게 되었습니다.

3. 우선, 코드 분할을 사용하면 초기 번들만 로드하고 필요에 따라 추가 번들을 로드하기 때문에 초기 로딩 시간이 단축됩니다. 또한 코드를 작은 청크로 분할해 전체 번들 크기를 줄일 수 있습니다. 이는 다운로드 시간을 단축할 수 있고, 대역폭 소비를 줄일 수 있습니다. 그 다음, 사용되는 컴포넌트만 로드되기에 브라우저가 효과적으로 캐싱할 수 있습니다.

4. 라우트 기반 코드 스플리팅을 통해 `React.lazy` 함수는 동적으로 컴포넌트를 로드하고, `Suspense`는 로드되는 동안 보여줄 풀백 UI를 정의합니다. `Suspense` 컴포넌트를 사용하는 이유는 코드 분할을 하면 초기 로딩 시간은 단축되지만, 사용자가 다른 페이지로 이동할 때 로딩 지연이 발생할 수 있기에 이 같은 로딩 지표를 사용합니다.
<br>

```js
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loading from '../components/Loading/Loading';

const Home = lazy(() => import('../pages/HomePage/Home'));
const About = lazy(() => import('../pages/AboutPage/About'));
const Service = lazy(() => import('../pages/ServicePage/Service'));
const Contact = lazy(() => import('../pages/ContactPage/Contact'));
const Notice = lazy(() => import('../pages/NoticePage/Notice'));
const UploadPost = lazy(() => import('../pages/NoticePage/UploadPost'));
const Error404 = lazy(() => import('../pages/ErrorPage/Error404'));
const PostDetail = lazy(() => import('../pages/NoticePage/PostDetail'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/upload" element={<UploadPost />} />
          <Route path="/notice/:id" element={<PostDetail />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/error" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
```
<br>

5. 코드 스플리팅을 통해 성능이 향상되었는지 확인하기 위해서는 WebPack 번들 분석 도구나, Netlify 배포 로그로 확인할 수 있습니다. <br><br> 전후 이미지를 보면 애플리케이션의 자바스크립트 파일이 여러 개의 청크로 분리되어, 각 청크는 애플리케이션의 특정 부분에 대응하고, 독립적으로 로드될 수 있으며 **메인 번들 크기가 35% 감소**한 것을 알 수 있습니다. 또한 개발자 도구 네트워크 탭의 리소스도 감소해 로딩 속도 향상에 기여하였습니다. <br><br> ![2](https://github.com/hyeonbinnn/my-company/assets/117449788/e9afc080-22ec-4baa-b27b-602332bdc04f) <br><br> ![a](https://github.com/hyeonbinnn/my-company/assets/117449788/73639f28-dcc8-468c-8f19-879bb33415e5)

<br>
<br>

### ✔️ 리액트 쿼리 도입으로 성능 향상
1. 원래는 **Axios**만을 사용해 데이터를 처리했기에 상태 관리 작업을 리코일을 통해 처리했고, 데이터를 가져오는 과정, 로딩 상태와 에러를 처리하는 과정을 모두 별도로 구현했지만, **React-Query**를 도입해 함께 사용하면서 `useQuery`와 `useMutation` 훅을 사용해서 데이터를 가져오고 수정할 수 있으며, 관리하는 과정이 간단해졌습니다.

2. **Axios**를 사용하면 데이터를 캐싱하고, 재사용하는 기능을 별도로 구현해야 하며, 새로운 요청을 보낼 때마다 데이터를 다시 가져와야 하므로 성능 면에서 좋지 않을 수 있지만, **React-Query**를 함께 사용하면 자체적으로 데이터를 캐싱하고 관리해 필요할 때마다 캐시된 데이터를 사용하기에 성능을 향상시키고 서버에 불필요한 요청을 줄여줍니다. 또한 데이터가 자동으로 갱신되기 때문에 최신 데이터를 유지할 수 있습니다.

3. 아래 변경된 api 파일을 살펴보면, 이전에는 각각의 API 호출마다 비동기 함수를 export하여 호출하는 방식이었지만, 리액트 쿼리를 사용하면서 함수 내에 직접적으로 API 호출이 이루어지지 않고 쿼리 훅에 연결됩니다. <br><br> 이로써 API 호출과 관련된 로직을 캡슐화하고 추상화할 수 있고, 이는 컴포넌트 내부에서 데이터 로직을 감춤으로써 코드의 가독성을 향상시키고 유지보수를 쉽게 만듭니다. 또한 데이터 로딩 상태, 데이터 캐싱, 에러 처리 등을 쉽게 관리할 수 있습니다. <br><br> ![305714106-e2fe0ab6-3d2e-4235-badf-7171dfb3a812](https://github.com/hyeonbinnn/my-company/assets/117449788/4636ee68-c9b7-4117-aaee-bac700bc9523)

<br>

4. 아래 변경된 CommentList 컴포넌트를 보면, `useGetComment` 훅을 사용하여 해당 포스트의 댓글 데이터를 비동기적으로 가져옵니다. 이 훅은 리액트 쿼리를 사용해 데이터를 관리하며, 데이터 로딩 상태 및 에러 상태를 자동으로 처리합니다. <br><br> ![305714644-c63626a0-98a6-4515-8478-32e613aa45f7](https://github.com/hyeonbinnn/my-company/assets/117449788/7411dc0d-13da-495d-8a9b-8667570847e0)


<br>
<br>

### ✔️ 재사용되는 작은 기능 유틸리티 함수 사용
1. `navigateTo` 유틸리티 함수를 만들어 라우터의 경로를 변경합니다. 첫번째 매개변수 `navigate`(경로 이동 함수)와 두번째 매개변수 `path`(이동하는 경로)를 통해 `navigate(path)`를 호출하여 해당 경로로 이동합니다.
<br>

```jsx
  // navigateTo 유틸리티 함수 정의
  export const navigateTo = (navigate, path) => {
    navigate(path);
  };
  
  ↓↓↓
  
  // 모달에서 함수 사용
  import React from 'react';
  import BaseModal from './BaseModal';
  import { useNavigate } from 'react-router-dom';
  import { navigateTo, scrollToTop } from './../../utils/utils';
  
  const UploadModal = ({ onClose }) => {
    const navigate = useNavigate();
  
    const handleCloseAndNavigate = () => {
      onClose();
      navigateTo(navigate, '/notice');
      scrollToTop();
    };
  
    return (
      <BaseModal
        onClose={handleCloseAndNavigate}
        title="Success! ☺️"
        message="Your post has been uploaded."
      />
    );
  };
  
  export default UploadModal;
```
<br>
<br>

2. `scrollToTop` 유틸리티 함수를 통해 웹 페이지의 스크롤 위치를 페이지의 맨 위로 이동시킵니다. `window.scrollTo(0, 0)`를 호출하여 브라우저 창의 스크롤 위치를 가로축(x)과 세로축(y)에서 각각 0으로 설정하여 페이지의 맨 위로 스크롤합니다. <br><br> `scrollToTop` 함수를 사용하는 이유는 웹 페이지에서 새로운 내용을 탐색하거나 새로운 페이지로 이동할 때 기본적으로 브라우저는 이전 페이지의 스크롤 위치를 유지하기 때문입니다. 따라서 꼭 필요한 페이지 전환시에 사용자 경험을 향상시키며, 웹 사이트를 편안하게 사용할 수 있도록 합니다.
<br>

```jsx
  // scrollToTop 유틸리티 함수 정의
  export const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  ↓↓↓
  
  // 모달에서 함수 사용 (위 코드와 동일)
  import React from 'react';
  import BaseModal from './BaseModal';
  import { useNavigate } from 'react-router-dom';
  import { navigateTo, scrollToTop } from './../../utils/utils';
  
  const UploadModal = ({ onClose }) => {
    const navigate = useNavigate();
  
    const handleCloseAndNavigate = () => {
      onClose();
      navigateTo(navigate, '/notice');
      scrollToTop();
    };
  
    return (
      <BaseModal
        onClose={handleCloseAndNavigate}
        title="Success! ☺️"
        message="Your post has been uploaded."
      />
    );
  };
  
  export default UploadModal;
```

<br>
<br>

### ✔️ 유사한 기능을 가진 컴포넌트를 분리해 공통 컴포넌트 추출
1. 레이아웃, 로딩, 에러, 모달 등 여러 컴포넌트에서 공통적으로 사용되는 부분을 추출해 합성 컴포넌트를 만들어 재사용함으로써 애플리케이션의 확장성과 개발 생산성을 향상시킵니다.

2. 합성 컴포넌트를 통해 코드 중복을 줄이고, 유지보수성을 높이며 새로운 컴포넌트를 만들 때 기존의 컴포넌트를 조합해 빠르게 개발할 수 있습니다.
<br>

```jsx
  // 메인 레이아웃 합성 컴포넌트
  const MainLayout = ({ icon, iconTxt, title, desc }) => {
    return (
      <Main>
        <Article>
          <H2>
            <img src={icon} alt={iconTxt} />
            <strong>{title}</strong>
            <span>{desc}</span>
          </H2>
        </Article>
      </Main>
    );
  };
  
  ↓↓↓
  
  // 다른 컴포넌트에서 재사용
  <MainLayout icon={notice} iconTxt="공지 아이콘" title="Notice" desc="공지 게시판" />
```
```jsx
  // 모달 합성 컴포넌트
  const BaseModal = ({ onClose, title, message }) => {
    return (
      <S.ModalBg>
        <S.Modal>
          <CloseButton onClose={onClose} />
          <S.ContentBox>
            <h2>{title}</h2>
            <p>{message}</p>
          </S.ContentBox>
        </S.Modal>
      </S.ModalBg>
    );
  };
  
  ↓↓↓
  
  // 다른 컴포넌트에서 기능을 추가해 재사용
  const UploadModal = ({ onClose }) => {
    const navigate = useNavigate();
  
    const handleCloseAndNavigate = () => {
      onClose();
      navigateTo(navigate, '/notice');
      scrollToTop();
    };
  
    return (
      <BaseModal
        onClose={handleCloseAndNavigate}
        title="Success! ☺️"
        message="Your post has been uploaded."
      />
    );
  };
```

<br>
<br>

### ✔️ 동일한 상태 공유로 인한 렌더링 오류 발생
#### 문제
`useModal` 커스텀 훅을 이용해 관련 컴포넌트에 import해서 변경하니, 모달을 렌더링하는 몇 개의 컴포넌트에서 문제가 발생했습니다.
<br>

예를 들면 PostDetail 컴포넌트의 삭제 버튼은 DeleteModal 렌더링되어야 하고, CommentForm 컴포넌트는 등록 버튼 CommentModal이 렌더링되어야 하는데, 전부 DeleteModal이 나타나고 있습니다. 또한 이로 인해 스타일까지 중복되면서 에러가 발생했습니다.
<br>
<br>

#### 왜? Why?
PostDetail 컴포넌트에서 CommentForm 컴포넌트가 렌더링되는 상황인데, CommentForm 컴포넌트에서 사용된 모달 상태와 PostDetail 컴포넌트에서 사용된 모달 상태가 동일한 상태를 공유하고 있기 때문입니다.
<br>

따라서 CommentForm 컴포넌트는 CommentModal을 트리거하기 위해 사용되어야 하지만, 현재는 DeleteModal을 트리고 하고 있습니다.
<br>

그렇기에 문제의 원인은 모달이 열리고 닫히는 역할을 하는 `useModal` 훅에서 발생하고 있습니다.
<br>
<br>

#### 문제 코드
```jsx
// useModal.jsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from './../recoil/atoms';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
```

<br>

#### 해결 방안
현재 `useModal` 훅은 `useRecoilState(isModalOpenState)` 리코일을 통해 전역으로 상태를 관리하고 있기 때문에, 모든 컴포넌트에서 이 상태를 공유하고 있습니다. 따라서 PostDetail과 CommentForm 컴포넌트에서는 동일한 모달 상태를 사용하고 있습니다.
<br>

이것이 CommentModal이 열리지 않는 이유이기에 `useModal` 커스텀 훅을 `useState` 훅을 사용해 로컬 상태를 관리하도록 변경한다면, 전역으로 상태가 공유되는 문제가 해결될 것입니다. 그럼 각 컴포넌트에서는 자체적으로 모달 상태를 관리할 수 있게 됩니다.
<br>
<br>

#### 해결 코드
```jsx
// useModal.jsx
import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
```













