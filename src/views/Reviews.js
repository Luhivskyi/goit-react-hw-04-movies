import React, { Component } from 'react';
import api from '../api/tv-api';

class Reviews extends Component {
  state = {
    reviews: null,
  };

  componentDidMount() {
    api
      .fetchMovieReviews(this.props.match.params.movieId)
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews &&
          reviews.map(elem => (
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
