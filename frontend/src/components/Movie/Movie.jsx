import React from "react";

class Movie extends React.Component {
 
  render() {
    console.log("thos", this.props);
    return (
      <div className="card">
        <div>Title: {this.props.movieItem.Title}</div>
        <div>Actors: {this.props.movieItem.Actors}</div>
        <div>Rating: {this.props.movieItem.Rating}</div>
        <div>Price: {this.props.movieItem.Price}</div>
        <div className="container">
          {/* <img
          ref={this.props.movieItem.Poster}//TODO
          alt={this.props.movieItem.Title}
          src={this.props.movieItem.Poster}
        /> */}
        </div>
        <div>Year made: {this.props.movieItem.Year}</div>
        <div>Type: {this.props.movieItem.Type}</div>
      </div>
    );
  }
}
export default Movie;
