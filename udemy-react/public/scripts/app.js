'use strict';

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
var app = {
  title: 'Study Plan 2018',
  subtitle: 'programming',
  options: ['C++', 'three.js', 'tensorflow']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options && app.options.length > 0 ? React.createElement(
    'div',
    null,
    '"Here are your options" ',
    React.createElement(
      'ol',
      null,
      ' ',
      React.createElement(
        'li',
        null,
        app.options[0]
      ),
      React.createElement(
        'li',
        null,
        app.options[1]
      )
    ),
    ' '
  ) : "There's no options"
);
//object - properties
var user = {
  name: 'sosunnyproject',
  age: 24,
  location: "New York"

};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');
//render our application
ReactDOM.render(template, appRoot);
