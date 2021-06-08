import React, { Suspense, Component, lazy } from 'react';
import api from '../api/tv-api';
import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

class ShowDetails extends Component {
  state = {
    show: null,
  };
  componentDidMount() {
    const { location, match } = this.props;

    const pathnameArray = location.pathname.split('/');
    const lastElem = pathnameArray[pathnameArray.length - 1];

    console.log(lastElem);
    console.log(match.params.movieId);

    (parseInt(lastElem) == match.params.movieId ||
      lastElem === 'cast' ||
      lastElem === 'reviews') &&
      api
        .fetchShowDetails(match.params.movieId)
        .then(show => this.setState({ show }));
  }
  render() {
    const { show } = this.state;
    const defaultImgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
      <div>
        {show && (
          <div>
            <img src={defaultImgUrl + show.poster_path} width="250" />
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
                  state: { from: this.props.location },
                }}
              >
                <p>cast</p>
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={{
                  pathname: `/movies/${show.id}/reviews`,
                  state: { from: this.props.location },
                }}
              >
                <p>reviews</p>
              </NavLink>
            </nav>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                {routes.detailsRoutes.map(route => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}

export default ShowDetails;
