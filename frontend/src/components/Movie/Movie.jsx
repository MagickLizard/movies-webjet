import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div className="card">
      <div>{this.props.movieItem.Title}</div>
        <div>{this.props.movieItem.key}</div>
        <div className="container">
        <img
          ref={this.props.movieItem.Poster}//TODO
          alt={this.props.movieItem.Title}
          src={this.props.movieItem.Poster}
        />
        </div>
        <div>Year made: {this.props.movieItem.Year}</div>
        <div>type: {this.props.movieItem.Type}</div>
      </div>
    );
  }
}
export default Movie;
