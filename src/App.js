import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";

class App07 extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  getMovie = async () => {
    //movies.data.data.movies
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?_by=rating");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-class">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App07;