import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    this.setState(deleteMovie(id));
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies on database</p>;

    return (
      <>
        <p>Showing {count} on database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <button
                  onClick={() => this.handleDelete(movie._id)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default movies;
