import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import statsReducer from './stats/statsReducer';

const combineMiddleware = [logger, thunk];

const reducer = combineReducers({ stats: statsReducer });

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
