import { takeEvery, takeLatest, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
//import store from './store'

import { combineReducers } from 'redux'
import modules from './modules'
import {TOGGLE_VISIBILITY, CHANGE_BACKGROUND_SCENE, AUTO_SAVE} from './modules/actions'

let counter = 0;

const {
  toggler,
  background
} = modules

export const rootReducer = combineReducers({
  toggler,
  background
})

// Create a saga
export function* rootSaga() {
    [yield takeLatest(TOGGLE_VISIBILITY, sagaVerifyCheckboxes),
    yield takeLatest(CHANGE_BACKGROUND_SCENE, sagaAutoSave)]
}

function* sagaAutoSave() {
  console.log('sagaAutoSave')
  const currentState = yield select( state => state );
  if( counter>0 && (counter%2)==0) {
    yield put({ type: AUTO_SAVE })
  }
}

function* sagaVerifyCheckboxes() {
  console.log('sagaVerifyCheckboxes')
  const currentState = yield select( state => state);
  console.log(currentState)
  if(currentState.toggler['Alerts'] == false && currentState.toggler['TopBar'] == false 
        && currentState.toggler['BottomBar'] == false && currentState.toggler['WebCam'] == false) {
          counter++
          console.log('counter: ' + counter)
          console.log('new State unchecked all');
          
          //store.dispatch({ type: CHANGE_BACKGROUND_SCENE })
          
          yield put({ type: CHANGE_BACKGROUND_SCENE, index:counter })
  }
}

// Create a saga middleware
export const sagaMiddleware = createSagaMiddleware()

//Store
//export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// The store is created with createStore and it only takes in one 
// reducer so you will have to use combine reducer
// if your reducer has more than one reducer.

// Run the saga
//sagaMiddleware.run(rootSaga)

// root reducer:
//export default rootReducer