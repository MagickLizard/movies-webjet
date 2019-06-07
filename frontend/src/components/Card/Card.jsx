import React from "react";
import Movie from "../Movie/Movie";

class Card extends React.Component {
  state = { movies: [], movieId: "" };

  iterateOverMovies = () => {
    console.log('props in iterateover>>>', this.props.data)
    
    return this.props.data.map(movie => {
      console.log('movie>>>', movie)
      
      return (
        <Movie key={movie.ID} movieItem={movie}>
        </Movie>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card" />
        {this.iterateOverMovies()}
      </div>
    );
  }
}
export default Card;
