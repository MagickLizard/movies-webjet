import React from "react";
import Movie from "../Movie/Movie";

class Card extends React.Component {
  state = { movies: [], movieId: "" };
  sortFunction = () => {
    if (this.props.data) {
      return this.props.data.sort((a, b) => a.Price - b.Price);
    }
  };

  iterateOverMovies = () => {
    if (this.props.data) {
      let sortedPrice = this.sortFunction();
      console.log(">sortedPrice>>", sortedPrice);
      return sortedPrice.map(movie => {
        if (movie !== null) {
          console.log("movie>>>", movie);
          if (movie) {
            return <Movie key={movie.ID} movieItem={movie} />;
          }
        }
      });
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
