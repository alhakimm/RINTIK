import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';

import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';
import dataReducer from './reducers/dataReducer';

const initialState = {};

const middleware = [thunk];

// const reducers = combineReducers({
//     user: userReducer,
//     data: new dataReducer,
//     UI: uiReducer
// })

// const store = legacy_createStore(reducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// export default store;
