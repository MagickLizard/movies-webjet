import React from "react";
import "./App.css";
import getMovies from "./api/getMovies";
import Card from "./components/Card/Card";

class App extends React.Component {
  state = { listOfMovies: [], movies: [], movie: "" };

  componentDidMount() {
    getMovies.get("movies", {}).then(response => {
      console.log("response in frontend>", response.data);
      this.getMoveIds();
    });

  }
  getMoveIds = () => {
    getMovies.get("movie/", {}).then(response => {
      //SECOND REQUEST
      console.log("response in frontend second request1>", response);
      console.log("response in frontend second request>", response.data);
      this.setState({ movies: response.data });
    });
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
