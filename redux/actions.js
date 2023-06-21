import { fetchMovieDetail } from "../api";

// action types
// export const UPDATE_USER = 'UPDATE_USER'
// export const UPDATE_CONTACT = 'UPDATE_CONTACT'
// export const LOG_IN_SENT = 'LOG_IN_SENT'
// export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
// export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
// export const CHANGE_FIRST_CONTACT = 'CHANGE_FIRST_CONTACT'

export const UPDATE_WATCHLIST = "UPDATE_WATCHLIST";

export const MOVIE_REQUEST_SENT = "MOVIE_REQUEST_SENT";
export const MOVIE_REQUEST_FULFILLED = "MOVIE_REQUEST_FULFILLED";
export const MOVIE_REQUEST_REJECTED = "MOVIE_REQUEST_REJECTED";


// action creators
export const updateWatchlist = update => ({
  type: UPDATE_WATCHLIST,
  payload: update,
});

// async action creator
export const onSelectMovie = movie => async dispatch => {
  dispatch({ type: MOVIE_REQUEST_SENT });
  try {
    const detailMovie = await fetchMovieDetail(movie.title);
    dispatch({ type: MOVIE_REQUEST_FULFILLED, payload: detailMovie });
  } catch (err) {
    dispatch({ type: MOVIE_REQUEST_REJECTED, payload: err.message });
  }
};


// export const updateUser = update => ({
//   type: UPDATE_USER,
//   payload: update,
// })

// export const addContact = newContact => ({
//   type: UPDATE_CONTACT,
//   payload: newContact,
// })

// export const changeFirstContact = () => ({type: CHANGE_FIRST_CONTACT})

// // async action creator
// export const logInUser = (username, password) => async dispatch => {
//   dispatch({type: LOG_IN_SENT})
//   try {
//     const token = await login(username, password)
//     dispatch({type: LOG_IN_FULFILLED, payload: token})
//   } catch (err) {
//     dispatch({type: LOG_IN_REJECTED, payload: err.message})
//   }
// }
