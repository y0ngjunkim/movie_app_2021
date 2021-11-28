# 김용준 201840208
## [11월 24일]
> 학습 내용
* 영화 앱 깃허브에 배포하기
```js
1. package.json 파일 수정하기
2. package.json에 scripts 키값으로 명령어를 추가 한다.
3. 최종 코드 깃허브에 업로드 하기
4. gh-page 설치하기
5. 깃허브 저장소 다시 확인하기
6. 영화 앱 깃허브에 배포하기
7. Github Pager에 접속하여 영화 앱 확인하기
```
* React의 특징
```js
* 상호작용이 많은 UI개발에 적합하다.
* 컴포넌트 로직은 JavaScript로 작성한다.
* 캡슐화된 컴포넌트로 개발되어 재사용이 용이하다.
* DOM과는 별개로 상태를 관리할 수 있다.
* 기술 스택의 나머지 부분에는 관여하지 않는다.
* 기존 코드와 별개로 개발이 가능하다.
* React Native를 이용하면 모바일 앱도 만들 수 있다.
```
* creat-react-app으로, Remarkable 사용하기
```js
1. creat-react-app으로 markdown-editor 프로젝트를 생성한다.
2. 정상 동작을 확인하다.
3. App.js에 있는 필요없는 코드를 삭제한다.
4. App.js에 문서의 코드를 복사해 넣는다.
5. component의 이름을 App으로 수정한다.
6. rendering은 index.js에 위임한다.
7. Remarkable을 설치한다.
8. React와 Remarkable을 import한다.
9. 동작이 되는지 확인한다.
```
## [11월 17일]
> 학습 내용
```html
<a href="https://ko.reactjs.org/">참고자료</a>
```
* 애플리케이션
```js
// props와 state를 사용해서 간단한 Todo 애플리케이션을 만들 수 있습니다. 이 예제에서는 state를 사용해 사용자가 입력한 텍스트와 할 일 목록을 관리합니다. 이벤트 핸들러들이 인라인으로 각각 존재하는 것처럼 보이지만, 실제로는 이벤트 위임을 통해 하나로 구현됩니다.

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);
```
* 외부 플로그인을 사용하는 컴포넌트
```js
// React는 유연하며 다른 라이브러리나 프레임워크를 함께 활용할 수 있습니다. 이 예제에서는 외부 마크다운 라이브러리인 remarkable을 사용해 <textarea>의 값을 실시간으로 변환합니다.

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('markdown-example')
);
```
* markdown-editor 생성
```js
1. npx create-react-app markdown-editor
2. npm i remarkable --save
3. 필요없는 파일 삭제
```
## [11월 10일]
> 학습 내용
* 리다이렉트 기능 만들어보기
```js
1. history키 살펴 보기
2. Detail 컴포넌트 클래스형 컴포넌트로 변경
class Detail extends React.Component{
    componentDidMount(){
        const{ location, history } = this.props;
    }

    render(){
        return <span>hello</span>;
    }
}
3. push() 함수 사용하기
  if(location.state === undefined){
    history.push("/");
  }
4. 리다이렉트 기능 확인해 보기
5. 영화 제목 출력하기
  const { location } = this.props;
  return <span>{location.state.title}</span>;
6. /movie-detail로 바로 이동하기
7. location.state 확인하기
  if(location.state){
      return <span>{location.state.title}</span>;
  }else{
     return null;
  }
```
* 영화 앱 깃허브에 배포하기
```
1. package.json 파일 수정
  - http://본인계정.github.io/저장소 이름
2. scripts 키값으로 명령어를 추가
3. 최종 코드 깃허브에 업로드하기
  - git add .
  - git commit -m "완성된 코드"
  - git push origin master
4. gh-pages 설치하기
  - npm install gh-pages
5. 깃허브 저장소 확인하기
  - git remote -v
6. 영화 앱 깃허브에 배포하기
  - npm run depoly
7. Github Pages에 접속하여 영화 앱 확인하기
```
## [11월 03일]
> 학습 내용
* 영화 상세 정보 기능 만들어보기
```js
1. route props 살펴보기
function About(props) {
    console.log(props);
    ...
2. route props에 데이터 담아 보내기
<Link to={{pathname:'/about', state:{frameElement:true}}}>About</Link>
3. route props 다시 살펴보기
4. Navigation 컴포넌트 정리하기
<Link to="/about">About</Link>
5. Movie 컴포넌트에 Link 컴포넌트 추가하기
  <Link
    to={{
      pathname:'/movie-detail',
      state:{year,title,summary,poster,genres},
    }}
  >
6. Detail 컴포넌트 만들기
import React from "react";

function Detail(props){
    console.log(props);
    return <span>hello</span>;
}

export default Detail;
7. Route 컴포넌트 추가하기
  import Detail from "./routes/Details";  
  <Route path = "/movie-detail" component={Detail} />
8. 영화 카드를 눌러 /movie-detail로 이동한 다음 영화 데이터 확인하기
9. /movie-detail로 바로 이동하기
```

## [10월 27일]
> 학습 내용
### 7. 영화 앱 다듬기
* 영화 앱 전체 모습 수정하기
```js
1. App.css 내용 모두 지우기
2. 노마드 코더 영화 API에서 장르 키 살펴보기
3. Movie 컴포넌트에 genres props 넘겨주기
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
4. App 컴포넌트 수정하기
    genres={movie.genres}
5. class 속성 이름 className으로 바꿔주기
6. 영화 장르 출력하기
    <ul className="movie-genres">
      {genres.map(genre => {
      return <li>{genre}</li>;
      })}
    </ul>
7. li엘리먼트에 key props 추가하기
      {genres.map((genre, index) => {
        return (
          <li key={index} className="movie__genre">
            {genre}
          </li>
        );
      })}
```
* 영화 앱 멋지게 스타일링하기
```js
1. App.css 파일 수정하기
2. Movie.css 파일 수정하기
3. 시놉시스 180자 제한하기
    {summary.slice(0,180)}
4. 영화 앱 제목 살펴보기
5. 영화 앱 제목 바꾸기
    <title>Movie App</title>
```
### 8. 영화 앱에 여러 기능 추가하기
* react-router-dom 설치하고 프로젝트 폴더 정리
```js
1. react-router-dom 설치
> npm install react-router-dom
2. components 폴더에 Movie 컴포넌트 옮기기
3. routes 폴더에 라우터가 보여줄 화면 만들기
4. Home.js 수정하기
5. Home.css 만들기
6. App.js 수정하기
import React from "axios";
import Home from "./routes/Home'";
import "./App.css";

function App(){
  return <Home />;
}

export default App;
```
* 라우터 만들기
```js
1. HashRouter와 Route 컴포넌트 사용하기
import { HashRouter, Route } from 'react-router-dom';

function App(){
  return (
    <HashRouter>
      <Route />
    </HashRouter>
  );
}
2. Route 컴포넌트에 path, component props 추가하기
import About from './routes/About';
<Route path="/about" component={About} />
3. About.js 수정하기
import React from "react";

function About(){
    return <span>About this page: I built it because I Love movies.</span>
}
export default About;
4. 라우터 테스트해보기
5. Home 컴포넌트를 위한 Route 컴포넌트 추가하기
import Home from './routes/Home';
<Route path="/" component={Home} />
6. 라우터 테스트하고 문제 찾아보기
7. 라우터 자세히 살펴보기
  <Route path="/home">
    <h1>Home</h1>
  </Route>
  <Route path="/home/introduction">
    <h1>Introduction</h1>
  </Route>
  <Route path="/about">
    <h1>About</h1>
  </Route>
8. 라우터 다시 테스트해 보기
9. App.js 다시 원래대로 돌리기
  <Route path = "/" component={Home} />
  <Route path = "/about" component={About} />
10. Route 컴포넌트에 exact props 추가해보기
  exact={true}
11. About.css 작성하기
```
* 네비게이션 만들어 보기
```js
1. Navigation 컴포넌트 만들기
import React from "react";

function Navigation(){
    return (
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    );
}

export default Navigation;
2. Navigation 컴포넌트 App 컴포넌트에 포함시키기
import Navigation from "./components/Navigation";

<Navigation />
3. Home 링크 눌러 보기
4. a 엘리먼트 Link 컴포넌트로 바꾸기
import {Link} from 'react-router-dom'

  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
5. Navigation 컴포넌트 위치 다시 확인하기
6. Navigation 컴포넌트 스타일링하기
```
## [10월 13일]
> 학습 내용
* Movie 컴포넌트 만들기
```js
10. Movie 컴포넌트에 props 추가하고 출력해 보기
function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}
11. App 컴포넌트에서 Movie 컴포넌트 그리기
12. map() 함수에 컴포넌트를 반환하는 함수 전달하기
(생략...)
movie.map((movie)=> {
  console.log(movie);
  return;
})
13. Movie 컴포넌트 반환하도록 movies.map() 수정하기
  import Movie from "./Movie";
```
```js
14. Movie 컴포넌트에 props 전달하기
  id={movie.id}
  year={movie.year}
  title={movie.title}
  summary={movie.summary}
  poster={movie.medium_cover_image}
15. [Console]탭에서 영화 데이터 확인해 보기
16. key props 추가하기
  key={movie.id}
```
* 영화 앱 스타일링하기 - 기초
```js
1. App 컴포넌트에 HTML 추가하기
  <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-class">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            { (생략...)
```
```js
2. Movie 컴포넌트에 HTML 추가하기
  <div className="movie-data">
    <h3 className="movie-title">{title}</h3>
    <h5 className="movie-year">{year}</h5>
    <p className="movie-summary">{summary}</p>
  </div>
3. 영화 포스터 이미지 추가하기
  <div className="movie">
    <img src={poster} alt={title} title={title} />
  </div>  
4. Movie 컴포넌트 정리하기
  id: PropTypes.number.isRequired, <<- 삭제
5. style 속성으로 title 스타일링하기
  style=backgroundColor: 'red'
6. CSS 파일 생성하기
7. App, Movie 컴포넌트에 CSS 파일 임포트하기
  import "./App.css";
8. App.css 파일 작성하기
  body{
    background-color:#2f2f2f
  }
```

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