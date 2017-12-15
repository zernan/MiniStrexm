import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import {PropTypes} from 'prop-types'
import Draggable from 'react-draggable'

import './index.css';
import logo from './logo.svg';
import EditorWrapper from './components/EditorWrapper/EditorWrapper';

import * as Actions from './redux/modules/actions'
import { actionToggle, displayVisibility, displayAlert, createAlert, changeBackground, autoSave } from './redux/modules/actionCreators'
import { toggler, sagaMiddleware } from './redux/reducer'
import store from './redux/store'
import {sagaMiddleWare, rootSaga} from './redux/reducer'
import MiniStrexmApp from './components/MiniStrexmApp/MiniStrexmApp'

//MapDispatchToProps
const mapDispatchToProps = (dispatch)=> {
	return {
		onToggle: (label)=> dispatch(actionToggle(label)),
		changeBackground: (index) => dispatch(changeBackground(index))
	}
} 
//The only way to change the state inside it is to dispatch an action on it.

//MapStateToProps
const mapStateToProps = (state)=> {
	return{
		stateList:state
	}
}
// The above function maps the state to props.  So the reducer returns 
// the new state, but the idea is to not have components carry any state.  
// This means you take the new state provided by the reducer("provided" 
// through "connect") and return it as props. Notice the returned object 
// value?  That becomes similar to this.props.state 
// providing the new state as it's value.

//container connected to redux
const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(MiniStrexmApp)
// value from the connect(select) and dispatch by default from connect

// Container that provides App to be connected to the redux
const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

// Run the saga
sagaMiddleware.run(rootSaga)

ReactDOM.render( <Main />, document.getElementById('root'))
