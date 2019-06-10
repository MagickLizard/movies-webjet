import React from "react";
import "./App.css";
import getMovies from "./api/getMovies";
import Card from "./components/Card/Card";
class App extends React.Component {
  state = { listOfMovies: [], movies: [], movie: "", loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    getMovies.get("movies", {}).then(response => {
      this.getMovieById(response.data, "cinemaworld");
    });
  }
  
  getMovieById = (movies, path) => {
      getMovies
        .get("movie/", {
          params: {
            movieId: movies,
            location: path
          }
        })
        .then(response => {
          this.setState({ movies: response.data, loading: false });
        })
        .catch(err => {
          this.setState({loading: false})
        })
  };

  render() {
    return (
      <div>
        <header className="header" />
        <section className="section">
          <div className={`control ${this.state.loading ? "is-large is-loading" : ""}`}>
            <br />
            <br />
            <Card data={this.state.movies}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
