import React from "react";
import Movie from "../Movie/Movie";

class Card extends React.Component {
  state = { movies: [], movieId: "" };

  iterateOverMovies = () => {
    console.log('props in iterateover>>>', this.props.data)
    if(this.props.data) {
      // return this.props.data.cinemaResult.map(movie => {
      //   if(movie && movie.Movies !== null) {
      //     console.log('movie>>>', movie)
      //     return (
      //       <Movie key={movie.Movies.body.ID} movieItem={movie.Movies.body}>
      //       </Movie>
      //     );
      //   }
      // });
    } 
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
