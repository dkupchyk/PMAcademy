import {combineReducers, compose} from 'redux';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

import photosReducer from './ducks/photoDuck';
import albumReducer from './ducks/albumDuck';

const mainReducer = combineReducers({
    photosReducer,
    albumReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
