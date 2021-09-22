# 김용준 201840208
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