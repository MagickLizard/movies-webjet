import React from "react";
import "./App.css";
import getMovies from "./api/getMovies";
import Card from "./components/Card/Card";

class App extends React.Component {
  state = { listOfMovies: [], movies: [], movie: "" };

  componentDidMount() {
    getMovies.get("movies", {}).then(response => {
      console.log("response in frontend>", response);
      this.setState({ listOfMovies: response.data.body.Movies }); //TODO: ERROR HAPPENS HERE BECAUSE OF MOVIES WHEN BACKEND ERRORS
      // let test = this.getMoveIds();
      // console.log("tests in frontent>>>", test);
    });
    this.getMoveIds();
    // .then(response => {
    //   console.log("response in frontend>", response);
    //   this.setState({ listOfMovies: response.data.body.Movies }); //TODO: ERROR HAPPENS HERE BECAUSE OF MOVIES WHEN BACKEND ERRORS
    //   let test = this.getMoveIds();
    //   console.log("tests in frontent>>>", test);
    // });
  }
  getMoveIds = () => {
    getMovies.get("movie/", {}).then(response => {
      //SECOND REQUEST
      console.log("response in frontend second request>", response);
      this.setState({ movies: response });
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
            <Card className="container" data={this.state.listOfMovies} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
