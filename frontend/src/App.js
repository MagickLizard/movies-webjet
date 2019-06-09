import React from "react";
import "./App.css";
import getMovies from "./api/getMovies";
import Movie from "./components/Movie/Movie";
import Card from "./components/Card/Card";
class App extends React.Component {
  state = { listOfMovies: [], movies: [], movie: "" };

  componentDidMount() {
    getMovies.get("movies", {}).then(response => {
      console.log("response in frontend>", response.data);
      let movieId = this.getMovieId(response.data);
      console.log("movieId>>>", movieId);
    });
  }
  makeMovieRequest = (movieId, path) => {

    if (movieId) {
      getMovies
        .get("movie/", {
          params: {
            movieId: movieId,
            location: path
          }
        })
        .then(response => {
          //SECOND REQUEST
          console.log("response in frontend second request1>", response.data);
          this.setState({ movies: response.data });
        });
    }
  };
  getMovieId = allmoviesArray => {
    console.log("allmoviesArray>>>", allmoviesArray);
    if (allmoviesArray) {
      this.makeMovieRequest(allmoviesArray, "cinemaworld");
      }
  };

  render() {
    return (
      <div>
        <header className="header" />
        <section className="section">
          <div className="container">
            <br />
            <br />
            <Card className="container" data={this.state.movies} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
