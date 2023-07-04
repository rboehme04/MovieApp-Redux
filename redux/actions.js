import { fetchMovieDetail } from "../api";

export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

export const MOVIE_REQUEST_SENT = "MOVIE_REQUEST_SENT";
export const MOVIE_REQUEST_FULFILLED = "MOVIE_REQUEST_FULFILLED";
export const MOVIE_REQUEST_REJECTED = "MOVIE_REQUEST_REJECTED";


// action creators
export const addToWatchlist = movie => ({
  type: ADD_TO_WATCHLIST,
  payload: movie,
});

export const removeFromWatchlist = movie => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: movie,
});

export const onSelectMovieWatchlist = movie => ({
  type: MOVIE_REQUEST_FULFILLED,
  payload: movie,
});


// async action creator
export const onSelectMovieSearch = movie => async dispatch => {
  dispatch({ type: MOVIE_REQUEST_SENT });
  try {
    const detailMovie = await fetchMovieDetail(movie.title, movie.id);
    if (detailMovie != null) {
      dispatch({ type: MOVIE_REQUEST_FULFILLED, payload: detailMovie });
    } else {
      dispatch({ type: MOVIE_REQUEST_REJECTED, payload: "Not in database" });
    }
  } catch (err) {
    console.log("err.message: ", err.message)
    dispatch({ type: MOVIE_REQUEST_REJECTED, payload: err.message });
  }
};