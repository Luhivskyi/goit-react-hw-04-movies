import React, { Component } from 'react';
import api from '../api/tv-api';

class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    api
      .fetchMovieCast(this.props.match.params.movieId)
      .then(show => this.setState({ cast: show }));
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast &&
          cast.cast.map(elem => {
            const poster = `https://image.tmdb.org/t/p/w300/${elem.profile_path}`;
            return (
              <li key={elem.id}>
                <p>{elem.name}</p>
                <img src={poster} alt="poster" />
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Cast;
