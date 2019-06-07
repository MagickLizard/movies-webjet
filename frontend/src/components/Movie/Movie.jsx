import React from "react";

class Movie extends React.Component {
  render() {
    console.log("thos", this.props);
    return (
      <div className="card">
        <div>{this.props.movieItem.cinemaWorld.body.Movies}</div>
        <div>{this.props.movieItem.ID}</div>
        <div className="container">
          {/* <img
          ref={this.props.movieItem.Poster}//TODO
          alt={this.props.movieItem.Title}
          src={this.props.movieItem.Poster}
        /> */}
        </div>
        <div>Year made: {this.props.movieItem.Year}</div>
        <div>type: {this.props.movieItem.Type}</div>
      </div>
    );
  }
}
export default Movie;
