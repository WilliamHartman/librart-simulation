import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';
import secondReducer from './ducks/secondReducer';

// COMP 43G
const reducers = combineReducers({
    reducer, 
    secondReducer
  });

export default createStore( reducer, applyMiddleware( promiseMiddleware() ));