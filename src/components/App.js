import React, { Suspense, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
// import routes from '../routes';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';

class App extends Component {
  render() {
    return (
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="*" component={HomePage} />
          </Switch>

          {/* <Switch>
            {routes.mainRoutes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch> */}
        </Suspense>
      </Layout>
    );
  }
}
export default App;
