import React, { Component } from 'react';
import api from '../api/tv-api';
import getQueryParams from '../utils/getQueryParams';
import Searchbox from '../components/Searchbox';
import { Link } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    shows: null,
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      api
        .fetchShowWithQuery(query)
        .then(shows => this.setState({ shows: shows.results }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      api
        .fetchShowWithQuery(nextQuery)
        .then(shows => this.setState({ shows: shows.results }));
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };
  render() {
    const { shows } = this.state;
    const defaultImgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
      <div>
        <Searchbox onSubmit={this.handleChangeQuery} />
        <ul className="MovieList">
          {shows &&
            shows.map(show => (
              <li key={show.id} className="MovieItem">
                <Link
                  to={{
                    pathname: `/movies/${show.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img src={defaultImgUrl + show.poster_path} alt="" />
                  {show.original_title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
