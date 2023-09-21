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
- [트러블 슈팅](#트러블-슈팅)

<br>
<br>
<br>

## 프로젝트 정보

> ### 🏛️ My-Company : 회사 홈페이지 만들기
> **구현 기간 :**  `2023.08.20 ~ 2023.08.31` <br>
>
> **배포 사이트 :**  <strong>[`배포 URL 바로가기`](https://my-companyyy.netlify.app)</strong>

<br>
<br>
<br>

## 폴더 구조
```
🏛️ MY-COMPANY
├─ 📦 public
│  ├─ ⭐ company.ico
│  └─ 📃 index.html
├─ 📦 src
│  ├─ 📂 assets
│  ├─ 📂 components
│  │  ├─ 📂 common
│  │  │  ├─ 📂 Bar
│  │  │  ├─ 📂 Button
│  │  │  ├─ 📂 Layout
│  │  │  └─ 📂 Table
│  │  ├─ 📂 Header
│  │  ├─ 📂 Modal
│  │  └─ 📂 Post
│  ├─ 📂 pages
│  │  ├─ 📂 AboutPage
│  │  ├─ 📂 ContactPage
│  │  ├─ 📂 ErrorPage
│  │  ├─ 📂 HomePage
│  │  ├─ 📂 NoticePage
│  │  └─ 📂 ServicePage
│  ├─ 📂 routes
│  ├─ 📂 styles
|  ├─ 📜 App.js
|  └─ 📜 index.js
```

<br>
<br>
<br>

## 사용 기술

<div>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled components&logoColor=white">
</div>

<br>
<br>
<br>

## 구현 페이지

### 📱 Mobile ver.

|   메인 홈 페이지   |   소개 페이지    |  서비스 페이지  | 공지 게시판 | 지도 및 연락망 |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| ![home](https://github.com/hyeonbinnn/my-company/assets/117449788/ead60c7c-3e1a-48bb-b312-89421c6e8b4b) | ![about](https://github.com/hyeonbinnn/my-company/assets/117449788/d5115ce4-4412-4936-a21f-98276833ca4f) | ![service](https://github.com/hyeonbinnn/my-company/assets/117449788/d32bf6a9-ffd8-4793-97dd-f501a796ae34) | ![notice](https://github.com/hyeonbinnn/my-company/assets/117449788/7c970fbc-830b-4975-b05b-7fa739949bea) | ![contact](https://github.com/hyeonbinnn/my-company/assets/117449788/3465701c-128f-4c26-95e9-fdcf7531a1b6) |

<br>
<br>

### 💻 PC ver.

|   메인, 소개   |   서비스, 게시판, 지도    |
| :---------: | :---------: |
| ![pc](https://github.com/hyeonbinnn/my-company/assets/117449788/2f69bf18-42fa-45e0-a6a1-9e229aeb0b7d) | ![pc2](https://github.com/hyeonbinnn/my-company/assets/117449788/4bfdc7ee-eceb-4d27-92e3-5f1ad63ca41d) |


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
1. `useEffect`는 비동기로 동작하기 때문에 초기 렌더링 이후에 실행된다. 그래서 초기 렌더링 시, `boardData`에 데이터가 비어 있으니까 0으로? 표시되지 않는다. 즉, `useEffect`를 통해 데이터를 불러오는 비동기 작업이 발생하는 시점과 렌더링 시점에 따른 차이 때문이라고 생각한다. <br>
2. 조회수도 로컬스토리지에 저장해야 새로고침해도 초기화가 안되는 거 아닐까...? 


<br>

#### 문제 코드
```jsx
const BoardList = () => {
  const modalRef = useRef();
  const [boardData, setBoardData] = useState(() => {
    const num = localStorage.getItem('num') || 0;
    const initialData = [];

    for (let i = 1; i <= num; i++) {
      const boardItem = JSON.parse(localStorage.getItem(`board_${i}`));
      initialData.push(boardItem);
    }

    return initialData;
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const increaseViews = (num) => {
    const updatedData = boardData.map((item) => {
      if (item.num === num) {
        const updatedViews = (item.views || 0) + 1;
        return { ...item, views: updatedViews };
      }
      return item;
    });
    setBoardData(updatedData);
  };

  return (
    <>
      <TableWrap headersName={['Num', 'Name', 'Title', 'Date', 'Views']}>
        {boardData.map((item) => (
          <TableRow key={item.num}>
            <TableColumn>{item.num}</TableColumn>
            <TableColumn>{item.name}</TableColumn>
            <TableColumn>
              <span
                onClick={() => {
                  openModal();
                  increaseViews(item.num);
                }}
              >
                {item.title}
              </span>
            </TableColumn>
            <TableColumn>{item.date}</TableColumn>
            <TableColumn>{item.views}</TableColumn>
          </TableRow>
        ))}
      </TableWrap>
      <Button>
        <Link to="/board">
          <strong>게시글</strong> <img src={add} alt="게시글 추가 버튼 이미지" />
        </Link>
      </Button>
      {showModal && (
        <ModalBg onClick={handleModalClick}>
          <ModalContent ref={modalRef}>
            <BoardModal />
          </ModalContent>
        </ModalBg>
      )}
    </>
  );
};

export default BoardList;
```


























