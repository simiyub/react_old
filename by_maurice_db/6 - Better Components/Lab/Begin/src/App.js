import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    editMode: false,
    movies: [],
    movie: null
  };

  toEditMode = e => {
    console.log("toEditMode", e.id);

    fetch(`/api/movies/${e.id}`)
      .then(rsp => rsp.json())
      .then(movie => this.setState({ editMode: true, movie }));
  };

  toListMode = () => {
    console.log("toListMode");
    this.setState({
      editMode: false,
      movie: null
    });
  };

  onChange = e => {
    // const { value } = e.target;
    // this.props.onChange({ value: value, prop: this.props.prop });
    var movie = this.state.movie;
    movie[e.prop] = e.value;
    this.setState({ movie: movie });
  };

  onChange = e => {
    var movie = this.state.movie;
    movie[e.prop] = e.value;
    this.setState({ movie });
  };

  save = e => {
    e.preventDefault();

    const { movie } = this.state;

    fetch("/api/movies/" + movie.id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(movie)
    }).then(() => this.toListMode());
  };

  componentDidMount() {
    fetch("/api/movies")
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    var component;

    if (this.state.editMode) {
      const { movie } = this.state;

      console.log(movie);

      component = (
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={movie.title}
              onChange={e =>
                this.onChange({ value: e.target.value, prop: "title" })}
            />
          </div>

          <div className="form-group">
            <label>{this.props.children}</label>
            <textarea
              className="form-control"
              value={movie.overview}
              onChange={e =>
                this.onChange({ value: e.target.value, prop: "overview" })}
              rows="5"
            />
          </div>

          <div className="form-group">
            <label>Release date</label>
            <input
              type="text"
              className="form-control"
              value={movie.release_date}
              onChange={e =>
                this.onChange({ value: e.target.value, prop: "release_date" })}
            />
          </div>

          <div className="form-group">
            <label>Popularity</label>
            <input
              type="text"
              className="form-control"
              value={movie.popularity}
              onChange={e =>
                this.onChange({ value: e.target.value, prop: "popularity" })}
            />
          </div>

          <div className="form-group">
            <label>Vote average</label>
            <input
              type="text"
              className="form-control"
              value={movie.vote_average}
              onChange={e =>
                this.onChange({ value: e.target.value, prop: "vote_average" })}
            />
          </div>

          <div className="btn-group">
            <button
              type="submit"
              onClick={this.save}
              className="btn btn-primary"
            >
              Save
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.toListMode()}
            >
              Cancel
            </button>
          </div>
        </form>
      );
    } else {
      const { movies } = this.state;
      const rows = movies.map(movie => (
        <tr key={movie.id}>
          <td>{movie.title}</td>
          <td style={{ width: 1 }}>
            <button
              onClick={() => this.toEditMode(movie)}
              className="btn btn-default btn-xs edit-button"
            >
              Edit
            </button>
          </td>
        </tr>
      ));

      component = (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }

    return (
      <div className="container">
        <h1>Better Components</h1>
        {component}
      </div>
    );
  }
}

export default App;
