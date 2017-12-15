import { createStore, applyMiddleware } from 'redux';
import {rootReducer, sagaMiddleware} from './reducer'

//Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// The store is created with createStore and it only takes in one 
// reducer so you will have to use combine reducer
// if your reducer has more than one reducer.

export default store;