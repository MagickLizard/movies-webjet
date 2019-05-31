import React from "react";
import "./App.css";
import getMovies from "./api/getMovies";

class App extends React.Component {
  state = { listOfMovies: [], movies: [] };
  getMoviesFromApi = async () => {
    getMovies.get("", {}).then(response => {
      console.log("response ", response);
      this.setState({ listOfMovies: response });
    });
  };
  render() {
    return (
      <div>
        <header className="header" />
        <section className="section">
          <div className="container">
            <a
              className="button is-large is-primary"
              onClick={this.getMoviesFromApi}
            >
              Get Movies!
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
