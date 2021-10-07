# 김용준 201840208
## [10월 06일]
> 학습 내용
* constructor()함수  
```js
  constructor(props){
    super(props)
    console.log('hello');
    }

    console.log('render');
```
* componentDidMount()함수
```js
  (생략...)
  componentDidMount(){
    console.log('component rendered');
  }

  render(){
    console.log("I'm rendering"); 
  }
  (생략...)
```
* componentDidUpdate()함수
```js
  (생략...)
  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('I just updated');
  }
  (생략...)
```

#### 영화 앱 만들기 워밍업
* App 컴포넌트 비우기
* 영화 데이터 로밍 상태 표시
```js
  // 로딩 중 표현
  state = {
    isLoading: true,
  };  
  render(){
      const { isLoading } = this.state;
      return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
    }
  }
```
* 로딩 현상 구현
```js
  componentDidMount(){ // 첫 번째 인자로 setTimeout(...)을 전달
    setTimeout(() => { 
      this.setState({ isLoading: false }); // state를 바꾸려면 setState() 함수 사용
    }, 6000); // 두 번째 인자로 6000밀리초 전달
  }  
```
* 영화 데이터 저장

### 6. 영화 앱 만들기
#### 영화 API 사용하기
* axios 설치
```
> npm install axios
```
```
2. YTS 영화 데이터 API 살펴보기
3. 영화 목록 데이터 확인해보기
4. JSON Viewer 확장 도구 설치하기
5. JSON 형식 데이터 출력
6. 노마드 코더 영화 API를 사용
7. yts-proxy.now.sh/list_movies.json 입력
8. 영화 정보 더 자세히 살펴보기
9. 영화 정보를 더 자세히 보기 위해 조건 추가
10. movie_id가 10인 영화 살펴보기
11. 노마드 코더 영화 API를 영화 앱에서 호출
12. axios의 동작 확인해 보기
13. getMovies() 함수를 기다린 다음, axios.get() 함수가 반환한 데이터 잡기
14. getMovies()에 async 붙이고, axios.get()에 await 붙이기
```
#### 영화 데이터 화면에 그리기
```
1. console.log()함수로 영화 데이터 출력해 보기
2. 영화 데이터 자세히 살펴보기
3. movies 배열 펼쳐보기
4. 객체에 있는 movies 키에 접근하기
5. 객체에 있는 movies 키에 조금 더 똑똑하게 접근하기
6. movies state에 영화 데이터 저장
7. 코드 축약
8. isLoading state true에서 false로 업데이트하기
```
#### Movie 컴포넌트 만들기
```
1. Movie 컴포넌트 만들기
2. 영화 데이터 다시 살펴보기
3. Movie.propTypes 작성하기
4. year,title,summary,poster를 각각 Movie.propTypes에 추가
5. yts-proxy.now.sh/list_movies.json에 접속한 다음 키와 키값을 자세히 살펴본다.
6. yts.It.api#list_movies에 접속한 다음 Encoding Paramerters에 목 sort_by라는 Parameter를 본다.
7. Parameter와 Parameter에 넘겨줄 값을 = 으로 이어서 작성하면 되는 거를 확인
8. .json주소에 접속해 평점을 확인
9. axios.get()에 json주소 값을 입력
```
## [09월 29일]
> 학습내용
* map()함수로 만든 컴포먼트에 key props 추가
```js
const foodLike = [
  {
    id:1, // 리액트 원소가 리스트에 포함되면서 유일성이 없어짐
    name: "chikin",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",
  },
  {
    id:2,
    name: "ham",
    image: "https://imagesm.cj.net/images/brand/spam/img_cont1.png",
  },
];
```
* Food 컴포넌트에 key props를 추가
```js
function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} /> // key props는 리액트 내부에서 사용되는 특수한 props라서 Food 컴포넌트에 직접 전달되지 않음
      ))}
    </div>
  );
}
```
* prop-types 설치하고 설정
```
> npm install prop-types  
```
```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "prop-types": "^15.7.2", // 추가
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  }
```
* prop-types 적용
```js
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: ProTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
```
### 5.state와 클래스형 컴포넌트
* React.component 클래스 상속 받기
```js
class App extends React.Component {
  
}
```
* state에 count값 추가하고 사용하기
```js
class App extends React.Component {
  state = {
    count: 0,
  };
  render(){
    return <h1>The number is: {this.state.count}</h1>;
  }
}
```
* 버튼 눌러서 count state값 변경해보기
```js
    return( 
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button>Add</button> 
        <button>Minus</button>
      </div>
    );
```
* add()함수와 minus() 함수 작성

## [09월 15일]
> 학습내용
#### props
```
불리언 값(ture,false), 숫자, 배열과 같은 다양한 형태의 데이터를 담을 수 있다.

주의할 점: 'prop에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호({})로 값을 감싸야 한다'    
```
### 4. 슈퍼 똑똑하게 컴포넌트 만들기
#### map()
```
배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함
f12를 통해 개발자 도구를 통해 console탭으로 이동하여 사용가능
```

## [09월 08일]
> 학습내용
### 2.리액트로 클론 코딩 시작하기
#### 슈퍼 빠른 create-react-app
1. create-react-app으로 리액트 앱 만들기
    ```
    npx create-react-app movie_app_2021
    ```
2. 프로젝트 폴더 선택하기
3. README.md 파일 수정하기
4. package.json 수정
5. 리액트 앱 실행하기
    ```
    npm start -> y
    ```
6. 리액트 앱 종료하기
    ```
    ctrl + c 하면 된다.
    ```
#### 리액트 앱 살펴보고 수정하기
1. src 폴더 정리
    ```
    index.js, app.js 제외한 나머지 파일 제거
    ```
2. index.js 수정
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App /> ,document.getElementById('root'));
    ```
3. app.js 수정
    ```js
    function App() {
    return <div className="App" />;
    }

    export default App;
    ```
4. 실행
    ```
    npm start
    ```
#### 리액트 동작 원리 알아보기
1. index.html 수정
    ```html
    <div id="potato"></div>
    ```
2. index.js 수정하여 오류 해결
    ```js
    ReactDOM.render(<App /> ,document.getElementById('potato'));
    ```
3. 다시 원래대로 돌려넣기
### 3. 리액트 기초 개념 알아보기
#### JSX
- JSX는 HTML과 자바스크립트 조합