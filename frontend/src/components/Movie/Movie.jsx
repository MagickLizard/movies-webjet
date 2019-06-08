import React from "react";

class Movie extends React.Component {
  render() {
    console.log("thos", this.props);
    return (
      <div className="card">
        <div>Title: {this.props.data.Title}</div>
        <div>Actors: {this.props.data.Actors}</div>
        <div>Rating: {this.props.data.Rating}</div>
        <div>Price: {this.props.data.Price}</div>
        <div className="container">
          {/* <img
          ref={this.props.movieItem.Poster}//TODO
          alt={this.props.movieItem.Title}
          src={this.props.movieItem.Poster}
        /> */}
        </div>
        <div>Year made: {this.props.data.Year}</div>
        <div>Type: {this.props.data.Type}</div>
      </div>
    );
  }
}
export default Movie;
