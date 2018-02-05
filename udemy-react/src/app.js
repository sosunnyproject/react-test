//src :: where all react code will be written
// src/app.js will run and get compiled into --> scripts/app.js --> index.html will use scripts/app.js
//where we will access all of the features of REACT , REACT-dom

//we won't manually change the scripts/app.js. that will do by itself as it compiles the src/app.js code

console.log("app.js and es6 is running");

//JSX == javascript xml
//which is, javascript syntax extension
//is provided by react - brand new way to
//define our templates and inject those data into those templates
//Makes easier to work with templates than before

//es5, compiled real version
/**
var template = React.createElement(
  "h1",
  { id: "home" },
  "This is JSX from app.js"
);
*/
//es6 react syntax here
const app = {
  title: 'Study Plan 2018',
  subtitle: 'programming',
  options: ['C++', 'three.js', 'tensorflow']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) ?
        <div>"Here are your options" <ol> <li>{app.options[0]}</li>
        <li>{app.options[1]}</li></ol> </div>:
        "There's no options"}
  </div>
);
//object - properties
const user = {
  name: 'sosunnyproject',
  age: 24,
  location: "New York"

};

const getLocation = (location) => {
  if (location){
    return <p>Location: {location}</p>;
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);


const appRoot = document.getElementById('app');
//render our application
ReactDOM.render(template, appRoot);
