
## Babel 

1. (연습용) Use Babel online editor

- https://babeljs.io/repl/
- Presets 탭: react 체크하기! 
```javascript
//try this on babel-repl; es6, react
var template = <h1>Hello this is React</h1>
```

```javascript
//you will see this; es5
var template = React.createElement(
  "h1",
  null,
  "Hello this is React"
);
```


2. (코드, 터미널에서) yarn, npm, babel commands

```bash
$ yarn global add babel-cli@6.24.1
# if the command above doesn't work for you, try npm install command
# $ npm install -g babel-cli@6.24.1

$ yarn init
# this will change the description in your package.json 

$ yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
# this is not 'global' install
# this is installed as 'sub-dependencies' that live in node_modules

$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
# take jsx and es6 code to compile down
```

## JSX
- Javascript XML (extensible markup language)
> 1996년 제안된 언어로, 기존의 HTML과 달리 웹상에서 구조화된 문서를 전송가능하도록 설계되었다. 이게 무슨 뜻이냐면 예를 들어 HTML에서는 CPU 2.83GHz라는 데이터를 표기할 때 어디부터가 데이터 명이고 어디부터가 실제 데이터인지 표시할 수 있는 마땅한 방법이 없다. 
> 이런 문제를 해결하기 위해 XML을 이용하면 어디부터 어디까지가 데이터 이름이고 어디부터 어디까지가 실제 데이터이며 어디부터 어디까지가 데이터 단위인지도 표현이 가능하다. 즉, 데이터에 의미를 부여하는 메타데이터를 기술할 수 있다. XML은 바로 이러한 목적으로 탄생했다. 위의 예를 XML로 바꾸면 데이터 명은 <dataname>CPU</dataname>가 되고 데이터 값은 <datavalue>2.83</datavalue>이 된다.
>> wiki xml

- Syntax extension to Javascript (recommended by React)
  - JSX produces React 'elements'
  - React: "Rendering logis is related with other UI logic such as the changes of events, state, data"

## Class
1. ES6 brings the light to 'CLASS'
2. with REACT
  - src/app.js
    - class template extends React.Component
    - const appRoot = document.getElementById('app');
    - ReactDOM.render(template, appRoot);
  - index.html
    - <body><div id="app"></div></body>

### Component

- (optional) input: props
- output: React elements that appear on the screen

```javascript
class Welcome1 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Welcome1(above), Welcome(below) are basically same

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// we can use user-defined component, Welcome
// React passes JSX attributes to this component as a single object = props
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
> https://reactjs.org/docs/components-and-props.html

_CAN declare component as a function or a class_
_component CANNOT modify its own props_\
_then how to change something? use STATE_
_local state: a feature available only to classes_


