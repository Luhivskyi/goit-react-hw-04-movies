import React, { Component } from 'react';
import api from '../api/tv-api';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    shows: null,
  };
  componentDidMount() {
    api.fetchPopular().then(shows => this.setState({ shows: shows.results }));
  }

  render() {
    const { shows } = this.state;
    const defaultImgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
      <div className="HomeView">
        <h1 className="MoviesTitle">Популярные фильмы!</h1>
        <ul className="MovieList">
          {shows &&
            shows.map(show => {
              return (
                <li key={show.id} className="MovieItem">
                  <Link
                    to={{
                      pathname: `/movies/${show.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    <img src={defaultImgUrl + show.poster_path} />
                    {show.original_title}
                    {show.original_name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Home;
