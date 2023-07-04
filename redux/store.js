// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import {persistStore, persistReducer} from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import reducer from './reducer'

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = createStore(persistedReducer, applyMiddleware(thunk))
// export const persistor = persistStore(store)

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension'; // Füge diese Importanweisung hinzu

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk]; // Füge alle weiteren Middleware hinzu, die du verwenden möchtest

// Füge die Redux DevTools-Erweiterung hinzu
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };