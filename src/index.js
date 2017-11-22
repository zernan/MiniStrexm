import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import {PropTypes} from 'prop-types'
import './index.css';
import logo from './logo.svg';

import EditorWrapper from './components/EditorWrapper/EditorWrapper';

/*const { Component } = React
const { Provider, connect } = ReactRedux
const { createStore, applyMiddleware } = Redux
const { takeEvery, takeLatest, delay } = ReduxSaga
const { put, call } = ReduxSaga.effects
const createSagaMiddleware = ReduxSaga.default
const { PropTypes} = PropTypes*/

//backround image array
const backgroundImages = ['https://files.gamebanana.com/img/ss/skins/566eb67915eb3.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P8trD3eAUtwtaocu9kUs976HlEpRrDSRk_-ZULA-93o3Cdtr',
'https://cdn.vox-cdn.com/thumbor/2kMpjra_1_00sINmfZkwnua7j3Y=/0x0:1536x864/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49944189/csgo.0.0.jpg',
'https://i.ytimg.com/vi/6nhdR_Hda0g/maxresdefault.jpg',
'https://steamuserimages-a.akamaihd.net/ugc/882984447753219894/D947D4FA6CC0CA4D3DE8D67D8B40A3EFC462EE19/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637%3A358&composite-to=*,*%7C637%3A358&background-color=black',
'https://vignette.wikia.nocookie.net/cswikia/images/6/6f/Csgo-de-dust2.png/revision/latest?cb=20140820131233']

//Actions
const TOGGLE_VISIBILITY = 'e.TOGGLE_VISIBILITY'
const DISPLAY_VISIBILITY = 'e.DISPLAY_VISIBILITY'
const CHANGE_ALERT = 'e.CREATE_ALERT'
const DISPLAY_ALERT = 'e.DISPLAY_ALERT'
const CHANGE_BACKGROUND_SCENE = 'e.CHANGE_BACKGROUND_SCENE'
const DISPLAY_BACKGROUND_SCENE = 'e.DISPLAY_BACKGROUND_SCENE'

let counter=0;

// Action Creators
const actionToggle = (label) => ({
	type: TOGGLE_VISIBILITY, payload:{label}
});

const displayVisibility = (label) => ({
	type: DISPLAY_VISIBILITY, payload:{label}
})

const displayAlert = (alertType) => ({
	type: DISPLAY_ALERT, alertType
});

const createAlert = (seconds) => ({
	type: CHANGE_ALERT, seconds
});

const changeBackground = (seconds) => ({
	type:CHANGE_BACKGROUND_SCENE, seconds
});

const displayScene = (url) => ({
	type:DISPLAY_BACKGROUND_SCENE, url
});
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
		Background: backgroundImages[0], //initial background scene CSGO
		AlertTypes: ['Tip', 'Follower', 'Host', 'Subscribe', 'Cheer'], // kind of alert items
		NeedsToBeSaved:false // save button from top toolbar, will do multiple things when pressed
	};

// Reducer:
const toggler = (state=defaultStateList, action)=> {
  
  let label = action.payload === undefined ? null : action.payload.label;
  let newState = {...state};
  
  newState['NeedsToBeSaved'] = true; //any actions would enabled the save button
  
  switch(action.type){
    case DISPLAY_VISIBILITY:
    {
    	console.log('display visibility')
    	console.log(action)

      if(label != null){
  	
  		newState[label] = !state[label];
  		
  		/*if(newState['Alerts'] === false && newState['TopBar'] === false 
  			&& newState['BottomBar'] === false && newState['WebCam'] === false) {
	  			
	  			//newState['Background'] = backgroundImages[counter%6];
	  			
	  			console.log(counter);
	  		}*/
  		}

  	  counter++;
      return newState;
    }

    case DISPLAY_ALERT: {
    
      return  
      	newState;
    }
      
    case DISPLAY_BACKGROUND_SCENE: {
      const {url} = action;
      newState['Background'] = url;
      return newState;
	}

    default:
      return state;
	}
}
// If you don't return the new state then nothing gets sent.

// Create a saga
function* rootSaga() {
  // Catch all actions with type CREATE_BACKGROUND_SCENE
  // This would take every CREATE_BACKGROUND_SCENE action type
  
  yield takeEvery(TOGGLE_VISIBILITY, sagaDisplayVisibility)
  //yield takeEvery(CHANGE_BACKGROUND_SCENE, sagaChangeBackground)
  
  // Catch all actions with type CHANGE_ALERT
  // takeLatest will only take the last action type CHANGE_ALERT and
  // the others that were not completed before the latest
  // will be cancelled
  yield takeLatest(CHANGE_ALERT, sagaChangeAlert)
}

// Function to be called by saga taking action CHANGE_ALERT
// The data that was passed in the action creator will also be passed to saga
function* sagaChangeAlert(payload) {
  const { seconds } = payload
  
  // Wait after how many seconds
  yield delay(seconds * 1000)
  
  // Dispatch an action with type DISPLAY_ALERT
  // redux-saga "put" effect acts as a redux dispatch
  yield put({ type: DISPLAY_ALERT })
}

function* sagaChangeBackground(payload) {
  const { seconds } = payload
  console.log('change background')
  console.log(payload)
  // Wait after how many seconds
  yield delay(seconds * 1000)
  
  // Dispatch an action with type DISPLAY_BACKGROUND_SCENE
  // redux-saga "put" effect acts as a redux dispatch
  const url = yield call(getImageURL,seconds%6)
  console.log(url)
  yield put({ type: DISPLAY_BACKGROUND_SCENE, url})
}

function* sagaDisplayVisibility(payload) {
	
	console.log('sagaDisplayVisibility')
	console.log(payload)
	
	yield put({ type: DISPLAY_VISIBILITY, payload})
}

// Declare some function that would return the url of the background image
const getImageURL = (index) => {
	console.log('get image url');
	console.log(backgroundImages);
	console.log(index);
  return backgroundImages[index];
}

// Create a saga middleware
const sagaMiddleware = createSagaMiddleware()


//Store
const store = createStore(toggler, applyMiddleware(sagaMiddleware));
// The store is created with createStore and it only takes in one 
// reducer so you will have to use combine reducer
// if your reducer has more than one reducer.

// Run the saga
sagaMiddleware.run(rootSaga)

//Main App Container
class MiniStrexmApp extends Component {
  constructor(props){
  	super(props)
  	this.handleAsyncChangeBackground = this.handleAsyncChangeBackground.bind(this)
  }

  handleAsyncChangeBackground(seconds) {
    // Call the asyncIncrement action and pass the parameter seconds
    console.log('handle async');
    console.log(this.props.changeBackground);
    this.props.changeBackground(seconds);
  }
  
  render() {

  	const { stateList, onToggle, changeBackground} = this.props;
  	
  	return (
  	  <div className="MiniStrexmApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MiniStrexmApp</h1>
        </header>
         <EditorWrapper onToggle={onToggle} stateList={stateList} changeBackground={()=>this.handleAsyncChangeBackground(counter) }/>
      </div>
    );
  }
}


//MapDispatchToProps
const mapDispatchToProps = (dispatch)=> {
	return {
		onToggle: (label)=> dispatch(actionToggle(label)),
		changeBackground: (seconds) => dispatch(changeBackground(seconds))
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

ReactDOM.render( <Main />, document.getElementById('root'))

//registerServiceWorker();
