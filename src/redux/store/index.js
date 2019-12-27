import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import combineReducers from '../reducers';
import apiMiddleware from '../api';

const baseMiddleware = [thunkMiddleware, apiMiddleware];

const store = createStore(combineReducers, applyMiddleware.apply(null, baseMiddleware));

export default store;
