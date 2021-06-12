import React, { Suspense, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.mainRoutes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}
export default App;
