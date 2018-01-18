// =============================================================================
// Import modules
// =============================================================================
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

// =============================================================================
// Import reducers
// =============================================================================
import rootReducer from '/reducer';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
