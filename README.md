# 김용준 201840208
## [09월 29일]
> 학습내용
* map()함수로 만든 컴포먼트에 key props 추가하기
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
* add()함수와 minus() 함수 작성, onClick 속성 추가
```js
  add = () => {
    console.log('add');
  };                      // 함수 동작만 작성
  minus = () => {
    console.log('minus');
  };
  //onClick 속성 추가
  <button onClick={this.add}>Add</button>
  <button onClick={this.minus}>Minus</button>
```
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