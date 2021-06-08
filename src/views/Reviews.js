import React, { Component } from 'react';
import api from '../api/tv-api';

class Reviews extends Component {
  state = {
    show: null,
  };
  componentDidMount() {
    api
      .fetchMovieReviews(this.props.match.params.movieId)
      .then(show => this.setState({ show: show.results }));
  }

  render() {
    const { show } = this.state;
    return (
      <ul>
        {show &&
          show.map(elem => (
            <li key={elem.id}>
              <h1>{elem.author}</h1>
              <p>{elem.content}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Reviews;
