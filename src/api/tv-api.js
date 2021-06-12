/* eslint-disable import/no-anonymous-default-export */
const baseURL = 'https://api.themoviedb.org';
const API_KEY = '2e401267ec3824f6ba8ddc3e14ddc4e0';

const fetchShowDetails = showId => {
  return fetch(`${baseURL}/3/movie/${showId}?&api_key=${API_KEY}`).then(res =>
    res.json(),
  );
};

const fetchShowWithQuery = searchQuery => {
  return fetch(
    `${baseURL}/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`,
  ).then(res => res.json());
};

const fetchPopular = () => {
  return fetch(
    `${baseURL}/3/trending/all/day?api_key=2e401267ec3824f6ba8ddc3e14ddc4e0`,
  ).then(res => res.json());
};
const fetchMovieCast = showId => {
  return fetch(`${baseURL}/3/movie/${showId}/credits?&api_key=${API_KEY}`).then(
    res => res.json(),
  );
};
const fetchMovieReviews = showId => {
  return fetch(`${baseURL}/3/movie/${showId}/reviews?&api_key=${API_KEY}`).then(
    res => res.json(),
  );
};

export default {
  fetchShowDetails,
  fetchShowWithQuery,
  fetchPopular,
  fetchMovieCast,
  fetchMovieReviews,
};
