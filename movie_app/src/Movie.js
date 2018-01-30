import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes ={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h2>{this.props.title}</h2>
      </div>
    )
  };
}

class MoviePoster extends Component{
  static propTypes = {
    poster: PropTypes.string.isRequired
  }
  
  render(){
    console.log("Movieposter prop: " + this.props.poster);
    return(
      <div>
        <img src={this.props.poster} width={150} height={250} mode="fit" alt="narcos"/>
      </div>
    )
  }

}

export default Movie;
