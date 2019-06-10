import React from "react";
import Movie from "../Movie/Movie";

class Card extends React.Component {
  sortFunction = () => {
      return this.props.data.sort((a, b) => a.Price - b.Price);
  };

  iterateOverMovies = () => {
    if (this.props.data) {
      let sortedPrice = this.sortFunction();
      return sortedPrice.map(movie => {
        return <Movie key={movie.ID} movieItem={movie} />;
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card">{this.iterateOverMovies()}</div>
      </div>
    );
  }
}
export default Card;
