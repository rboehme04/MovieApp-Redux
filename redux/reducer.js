import {combineReducers} from 'redux'

import {ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, MOVIE_REQUEST_SENT, MOVIE_REQUEST_FULFILLED, MOVIE_REQUEST_REJECTED} from './actions'

const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.payload]
    case REMOVE_FROM_WATCHLIST:
      return state.filter(movieItem => movieItem.title !== action.payload.title)
    default:
      return [...state];
  }
}

const detailMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_REQUEST_SENT:
      console.log("Movie request sent")
      return state
    case MOVIE_REQUEST_FULFILLED:
      console.log("Movie found")
      return action.payload
    case MOVIE_REQUEST_REJECTED:
        console.log("Movie not available")
        return action.payload
    default:
      return state;
  }
}

const reducer = combineReducers({
  watchlist: watchlistReducer,
  detailMovie: detailMovieReducer,
})

export default reducer

// import {combineReducers} from 'redux'

// import contacts from '../contacts'

// import {CHANGE_FIRST_CONTACT, UPDATE_USER, UPDATE_CONTACT, LOG_IN_FULFILLED, LOG_IN_REJECTED} from './actions'

// const merge = (prev, next) => Object.assign({}, prev, next)

// const contactReducer = (state = contacts, action) => {
//   if (action.type === UPDATE_CONTACT) return [...state, action.payload]
//   if (action.type === CHANGE_FIRST_CONTACT) {
//     const [firstContact, ...rest] = state
//     if (!firstContact) return state
//     const newContact = {...firstContact, name: 'Jordan Hayashi'}
//     return [newContact, ...rest]
//   }
//   return state
// }

// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_USER:
//       return merge(state, action.payload)
//     case UPDATE_CONTACT:
//       return merge(state, {prevContact: action.payload})
//     case LOG_IN_FULFILLED:
//       return merge(state, {token: action.payload})
//     case LOG_IN_REJECTED:
//       return merge(state, {loginErr: action.payload})
//     default:
//       return state
//   }
// }

// const reducer = combineReducers({
//   user: userReducer,
//   contacts: contactReducer,
// })

// export default reducer
