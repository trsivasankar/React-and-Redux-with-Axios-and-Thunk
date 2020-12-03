import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise';
import reducers from '../reducers';




const store = createStore(reducers, applyMiddleware(thunk));

export default store;