# 🏢 My-Company 
![스크린샷 2023-09-20 210745](https://github.com/hyeonbinnn/my-company/assets/117449788/96fb4f07-edae-4fe9-b518-d314be4db88c)

<br>
<br>
<br>

## 목차
- [프로젝트 정보](#프로젝트-정보)
- [폴더 구조](#폴더-구조)
- [사용 기술](#사용-기술)
- [구현 페이지](#구현-페이지)
- [핵심 기술](#핵심-기술)
- [트러블 슈팅](#트러블-슈팅)

<br>
<br>
<br>

## 프로젝트 정보
### 🏢 My-Company : 회사 홈페이지 만들기
마이 컴퍼니는 회사 소개, 제공하는 서비스, 뉴스 구독, 소통을 위한 게시판, 댓글, 연락망을 통해 사용자와 하나로 연결되는 웹사이트입니다. <br>

- **구현 기간 :**  `2023.12.02 ~ 2023.12.28`
- **배포 사이트 :**  <strong>[`배포 URL 바로가기`](https://my-companyyy.netlify.app)</strong>
<br>
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
│  ├─ 📂 utils
|  ├─ 📜 App.js
|  ├─ 📜 axios.js
|  └─ 📜 index.js
```

<br>
<br>
<br>

## 사용 기술
### [ FrontEnd ]
<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React Query-FF4154?style=square&logo=react query&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=square&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/Recoil-3578E5?style=square&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=square&logo=styled components&logoColor=white">
</div>

<br>

#### [ BackEnd ]
**FAKE API 사용**

<br>

#### [ Version ]
```
"axios": "^1.6.7",
"eslint-plugin-jsx-a11y": "^6.7.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-hook-form": "^7.50.1",
"react-kakao-maps-sdk": "^1.1.15",
"react-query": "^3.39.3",
"react-router-dom": "^6.14.2",
"react-scripts": "5.0.1",
"recoil": "^0.7.7",
"styled-components": "^5.3.11",
"styled-normalize": "^8.0.7",
```

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

## 핵심 기술





<br>
<br>
<br>

## 트러블 슈팅
### ✔️ 게시글 클릭 시 조회수(Views) 관련 오류
#### 문제점
1. 초기 화면에 조회수(views) 부분이 0으로 나타나지 않는다.<br>
2. 조회수가 올라가도 새로고침하면 다시 초기화된다.

<br>

#### 왜? Why?
1. 조회수가 없을 때 0 대신 아무것도 표시되지 않는 이유는 **React**에서 0은 `falsy` 값으로 간주되니까... 값이 없을 경우 0으로 나타나게 조건으로 처리해야하지 않을까? <br>
2. 아래 문제 코드에서는 조회수를 브라우저의 메모리에서만 관리하고 있으니까... 초기화되지 않으려면, 조회수도 값을 로컬스토리지에 저장해야 새로고침해야하지 않을까?

<br>

#### 문제 코드
```jsx
```
<br>
<br>

#### 해결 방안
1. `item.views`가 정의되어 있으면 그 조회수 값을 반환하고, 그렇지 않으면 0을 반환하면 된다.
2. `localStorage.setItem`을 사용해 저장하고, 게시글을 클릭할 때 조회수를 증가시키면서 함께 로컬 스토리지에 업데이트하면 된다.

<br>

#### 해결 코드
```jsx

```













