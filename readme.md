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
