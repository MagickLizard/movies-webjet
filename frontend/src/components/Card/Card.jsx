import React from "react";
import Movie from "../Movie/Movie";

class Card extends React.Component {
  state = { movies: [] };
  // iterateOverMovies = moviesList => {
  //   return this.props.data.Movies.map(movie => {
  //     return (<div key={movie.id} movieItem={movie} />);
  //   });
  // };
  render() {
    return (
      <div className="container">
        <div className="card" />
        {this.props.data.map(movie => {
          console.log("movie", movie);
          return <Movie key={movie.ID} movieItem={movie} />;
        })}
      </div>
    );
  }
}
export default Card;
