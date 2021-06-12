/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() =>
      import('./views/HomePage' /* webpackChunkName: "home-page" */),
    ),
  },
  {
    path: '/movies',
    label: 'Movies',
    exact: true,
    component: lazy(() =>
      import('./views/MoviesPage' /* webpackChunkName: "movies" */),
    ),
  },
  {
    path: `/movies/:movieId`,
    label: 'Home',
    exact: false,
    component: lazy(() =>
      import('./views/MovieDetailsPage' /* webpackChunkName: "movie-page" */),
    ),
  },
];
const detailsRoutes = [
  {
    path: '/movies/:movieId/cast',
    label: 'Cast',
    exact: true,
    component: lazy(() =>
      import('./views/Cast' /* webpackChunkName: "home-page" */),
    ),
  },
  {
    path: '/movies/:movieId/reviews',
    label: 'Reviews',
    exact: true,
    component: lazy(() =>
      import('./views/Reviews' /* webpackChunkName: "movies" */),
    ),
  },
];

export default {
  mainRoutes,
  detailsRoutes,
};
