import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
/**
const movieTitles = [
  "Friends", "Easy", "Stranger Things", "Black Mirror"
]
const moviePosters = [
  "url", "url", "url", "url"
]

these above
to
const movies [] one object
below

const movies = [
  {
    title: "Friends",
    poster:"http://sites.psu.edu/pdb5083/wp-content/uploads/sites/2415/2013/01/friends-bath.jpg"
  },
  {
    title: "Easy",
    poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MTAyNzUyNF5BMl5BanBnXkFtZTgwNDk4NzgwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Stranger Things",
    poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f1c7f40664543.5787e03bf042c.jpg"
  },
  {
    title: "Black Mirror",
    poster: "https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/black-mirror-season-4-how-many-episodes-netflix-release-date-1044919.jpg"
  },
]
*/

class App extends Component {
//lifecycle events (e.g. componentWillMount) or set any state you should use class.
// const App = props => { return <Movie /> }; is possible if you want stateless, functional components

  //whenever state changes, render function re-runs

//state 는 const, let, var 로 타입을 정할 수 없음. 리액트 내장이라 그런가봄..
//타입 정하면 에러남 const state = { } causes error
state = {
    greeting: 'Hello!',
    movies: [
      {
        title: "Friends",
        poster:"http://sites.psu.edu/pdb5083/wp-content/uploads/sites/2415/2013/01/friends-bath.jpg"
      },
      {
        title: "Easy",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MTAyNzUyNF5BMl5BanBnXkFtZTgwNDk4NzgwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        title: "Stranger Things",
        poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f1c7f40664543.5787e03bf042c.jpg"
      },
      {
        title: "Black Mirror",
        poster: "https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/black-mirror-season-4-how-many-episodes-netflix-release-date-1044919.jpg"
      },
    ]
  }

  componentDidMount(){
    //setTimeout(function, 1000)
    //setTimeout(what-you-want-to-do, 1000-after-this-much-time)
    //ES5 function writing
    // setTimeout(function(){
    //   console.log('hello')
    // }, 1000)

    setTimeout(() => console.log('hello'), 1000)

    setTimeout( () =>
    {
      this.setState(
        {
          movies: [
          ...this.state.movies,
          {
            title: "Chef's Table",
            poster:"https://upload.wikimedia.org/wikipedia/en/1/11/Chef%27s_Table.jpg"
          }
        ]
      })
    }, 1000);
  }

  //let's define a new function that keeps the state's movie object inside new variable.
  _renderMovies = () => {
    const movies = this.state.movies.map(  (movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    //const movies = array of <Movie /> <Movie /> ...
    return movies
  }

  render() {
    return (
      // all your components under this div
      <div className="App">
        {this.state.movies ? this._renderMovies(): 'Loading' }
      </div>
    );
  }
}
// {this.state.movies.map((movie, index) => {
//   return <Movie title={movie.title} poster={movie.poster} key={index} />
// })}

//{moovies.map~~} is basically same to the below
//<Movie title={movies[0].title} post={movies[0].poster} index=0 />
//<Movie title={movies[1].title} post={movies[1].poster} index=1 />
//<Movie title={movies[2].title} post={movies[2].poster} index=2 />
//<Movie title={movies[3].title} post={movies[3].poster} index=3 />
export default App;
