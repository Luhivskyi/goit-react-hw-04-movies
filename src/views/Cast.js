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
        {cast && cast.cast.map(elem => <li key={elem.id}>{elem.name}</li>)}
      </ul>
    );
  }
}

export default Cast;
