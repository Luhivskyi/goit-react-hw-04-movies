import React, { Suspense, Component } from 'react';
import api from '../api/tv-api';
import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Cast from '../views/Cast';
import Reviews from '../views/Reviews';

class MovieDetailsPage extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    api.fetchShowDetails(movieId).then(data => this.setState({ show: data }));
  }

  handleButtonGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || 'Home');
  };

  render() {
    const { show } = this.state;
    const defaultImgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
      <>
        <button
          type="button"
          className="btn-primary"
          onClick={this.handleButtonGoBack}
        >
          Go back
        </button>

        <div>
          {show && (
            <div>
              <img src={defaultImgUrl + show.poster_path} width="250" alt="" />
              <h1>
                {show.original_title}
                {show.original_name}
              </h1>
              <nav className="nav nav-pills">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={{
                    pathname: `/movies/${show.id}/cast`,
                    state: { from: this.props.location.state.from },
                  }}
                >
                  <p>cast</p>
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={{
                    pathname: `/movies/${show.id}/reviews`,
                    state: { from: this.props.location.state.from },
                  }}
                >
                  <p>reviews</p>
                </NavLink>
              </nav>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                  <Route path="/movies/:movieId/cast" component={Cast} />
                  <Route path="/movies/:movieId/reviews" component={Reviews} />
                </Switch>
              </Suspense>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
