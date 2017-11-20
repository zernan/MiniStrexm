import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { takeEvery, takeLatest, delay } from 'redux-saga'
import { put, call } from 'redux-saga'
import createSagaMiddleware from 'redux-saga'
import {PropTypes} from 'prop-types'
import './index.css';
import logo from './logo.svg';

import registerServiceWorker from './registerServiceWorker';
import EditorWrapper from './components/EditorWrapper/EditorWrapper';

/*const { Component } = React
const { Provider, connect } = ReactRedux
const { createStore, applyMiddleware } = Redux
const { takeEvery, takeLatest, delay } = ReduxSaga
const { put, call } = ReduxSaga.effects
const createSagaMiddleware = ReduxSaga.default
const { PropTypes} = PropTypes*/

//Actions
const TOGGLE_VISIBILITY = 'e.TOGGLE_VISIBILITY'
const CREATE_ALERT = 'e.CREATE_ALERT'
const REMOVE_ALERT = 'e.REMOVE_ALERT'
const RELOCATE_WEBCAM = 'e.RELOCATE_WEBCAM'
const CHANGE_BACKGROUND_SCENE = 'e.CHANGE_BACKGROUND_SCENE'

class MiniStrexmApp extends Component {
  
  render() {

  	const { stateList, onToggle} = this.props;
  	
  	return (
  	  <div className="MiniStrexmApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MiniStrexmApp</h1>
        </header>
         <EditorWrapper onToggle={onToggle} stateList={stateList}/>
      </div>
    );
  }
}

// Action Creators
const actionToggle = (label) => ({type: 'TOGGLE_VISIBILITY', payload:{label}});
const createAlert = () => ({type: CREATE_ALERT});
const removeAlert = () => ({type: REMOVE_ALERT});
const relocateWebcam = () => ({type: RELOCATE_WEBCAM});
const changeScene = (seconds) => ({type:CHANGE_BACKGROUND_SCENE, seconds});
// The type isn't necessarily a requirement but I wouldn't recommend actions without it
// In reducer parameters you receive something along the lines of

//Apply initial state
const defaultStateList = {
		Alerts:true, //checkboxes from Menu Pane
		TopBar:true,
		BottomBar:true,
		WebCam:true,
		AlertsSelected:false,    // selected elements from Content Pane 
		TopBarSelected:false,    // through mouse left click in preparation
		BottomBarSelected:false, // for drag drop functionality
		WebCamSelected:false,
		WebCamLocation: { top:0, left:0 }, //relocating webcam from topleft corner
		Background: 'https://files.gamebanana.com/img/ss/skins/566eb67915eb3.jpg', //initial background scene CSGO
		AlertsDisplayed:[], //current displayed alerts which will be automatically removed seconds after creating
		AlertTypes: ['Tip', 'Follower', 'Host', 'Subscribe', 'Cheer'], // kind of alert items from where we will create the alert display array
		NeedsToBeSaved:false // save button from top toolbar, will do multiple things when pressed
	};

// Reducer:
const toggler = (state=defaultStateList, action)=> {
  
  let label = action.payload == undefined ? null : action.payload.label;
  let newState = {...state};
  
  switch(action.type){
    case 'TOGGLE_VISIBILITY':
    {
      if(label != null)
  	{
  		newState[label] = !state[label];
  		newState['NeedsToBeSaved'] = true;
  	}
      return newState;
      break;
    }

    default:
      return state;
	}
}
// If you don't return the new state then nothing gets sent.

//Store
const store = createStore(toggler, defaultStateList, 
	window.devToolsExtension ? window.devToolsExtension() : undefined);
// The store is created with createStore and it only takes in one 
// reducer so you will have to use combine reducer
// if your reducer has more than one reducer.
// The second argument is the initial state, the third is a store enhancer.


//MapDispatchToProps
const mapDispatchToProps = (dispatch)=> {
	return {
		onToggle: (label)=> dispatch(actionToggle(label))
		//onClick: () => dispatch(selectionToggle)
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


//Connected component
const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(MiniStrexmApp)
// value from the connect(select) and dispatch by default from connect

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
	);

registerServiceWorker();
