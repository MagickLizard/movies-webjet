import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <div> {this.props.movieItem.Title}</div>
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <div>Actors: {this.props.movieItem.Actors}</div>
            <div>Director: {this.props.movieItem.Director}</div>
            <div>Rating: {this.props.movieItem.Rating}</div>
            <div>Rated: {this.props.movieItem.Rated}</div>
            <div>Price: ${this.props.movieItem.Price}</div>
            <div>Year made: {this.props.movieItem.Year}</div>
            <div>Type: {this.props.movieItem.Type}</div>
            <div> Plot: {this.props.movieItem.Plot}</div>
            <br />
          </div>
        </div>
        <footer className="card-footer">
        
          <a href="" className="card-footer-item">
          {this.props.movieItem.Genre}
          </a>
        </footer>
      </div>
    );
  }
}
export default Movie;
