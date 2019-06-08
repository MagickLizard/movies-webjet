import React from "react";
import "./App.css";
import getMovies from "./api/getMovies";
import Card from "./components/Card/Card";

class App extends React.Component {
  state = { listOfMovies: [], movies: [], movie: "" };

  componentDidMount() {
    getMovies.get("movies", {}).then(response => {
      console.log("response in frontend>", response.data);
      let movieId = this.getMovieId(response.data);
      console.log('movieId>>>', movieId)
      
    });
  }
  makeMovieRequest = (movieId, path) => {
    if(movieId) {
    getMovies.get("movie/", {
      params: {
        movieId: movieId,
        location: path
      }
    }).then(response => {
      //SECOND REQUEST
      console.log("response in frontend second request1>", response);
      console.log("response in frontend second request>", response.data);
      this.setState({ movies: response.data });
    });
  }
  };
  getMovieId = allmoviesArray => {
    console.log("allmoviesArray>>>", allmoviesArray);
    if(allmoviesArray) {
    for (let i of allmoviesArray) {
      if (i.cinemaWorld) {
        for (let cinema of i.cinemaWorld) {
          console.log("i in cinema frontend>>>", cinema.ID);
          // return cinema.ID
        }
      }
      if (i.filmWorld) {
        for (let film of i.filmWorld) {
          // console.log("i in film frontend>>>", film.ID);
          let filmResponse = this.makeMovieRequest(film.ID, 'filmworld');
          console.log('filmResponse>>>', filmResponse)
          
        }
      }
    }
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
