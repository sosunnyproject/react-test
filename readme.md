2018.1.3
## Intro to React
- Just Javascript: No framework to learn - functions, objects, variables
- Compositional: Play with Components
- Unidirectional Dataflow: Data Updates UI (Data is on the state. UI displays the data. If the state changes, the UI changes)
- Big Community
- It's only a VIEW part - mix with other frameworks, languages!

2018.1.3
## What are we building
- Movie chart website model
- yts.ag/api : movie list json etc..

2017.1.3
## Intro to Create React App
### WebPack
modules with various dependencies --> WEBPACK (module bundler) --> static assets (simple .js .png .css ..)
automatically transform various dependencies into simple versions
Learn how to configure webpack - to work with django, ruby, and etc.

Facebook created Create React App : facebookincubator github
Create React App has webpack module inside.
we don't need to do any configuration for now.

we use 'yarn start' instead of npm start here...

## Component - Props
2017.1.3.
## Creating React Components with JSX
App.js - App component... : We use JSX to build react component, using Javascript
- rule1: className instead class.
- it's just html inside the JSX

index.html : we're creating from index.js which reads/imports App.js
index.js renders the elements from App.js into index.html document
we're only rendering one <App /> for now

React is a library to build new interfaces UI..
ReactDOM when you want to use React on website DocumentObjectModel
ReactNative when you want to use React on mobile app

all components should have render() function
what this component shows - render() makes that happen
when we execute yarn start : all the code in JSX : puts that <div>...</div> into html file.

import react, import component
create class that extends Component of ReactDOMand use that class object in main js or html files to render

2-4. Validating Props with PropTypes
you add key={index} in src/App.js App-render function.
Because of the error that says 'index.js:2177 Warning: Each child in an array or iterator should have a unique "key" prop.'


## Redux 

### mapStateToProps

Q&A:https://academy.nomadcoders.co/courses/235420/lectures/3671568

Question
> around 11:10 // After you create mapStateToProps, you explain that Timer can have props. And then, you write down :: const { } = this.props :: inside Timer (presenter.js). If you don't write that :: const { } = this.props :: line inside Timer render(), will you not be able to access the states for the conditional button setup (!isPlaying &&  ~~ ) ?

Answer
```js
// doing const { ] = this.props, is just allowing me to take them out of the props object,
// I can still use them. So instead of:
!this.props.isPlaying 
// I do:
const { isPlaying } = this.props;
!isPlaying.
// I do it to make the code more beautiful but it will still work.
```
_Timer/index.js_
https://github.com/nomadcoders/tomato-timer/blob/master/components/Timer/index.js
```
mapStateToProps, connect 
happens here
```

_Timer/presenter.js_
```js
class Timer extends Component {
  render() {
    const { isPlaying, elapsedTime, timerDuration } = this.props;
     return ( <div>something</div>);
     }
    }
```
