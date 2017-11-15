import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import './index.css';
import MiniStrexmApp from './components/MiniStrexmApp/MiniStrexmApp';

import registerServiceWorker from './registerServiceWorker';

// Actions:
const actionToggle = {type: 'toggleVisibility'};
// The type isn't necessarily a requirement but I wouldn't recommend actions without it
// In reducer parameters you receive something along the lines of

// Reducer:
const toggler = (state, action)=> {
	
  switch(action.type){
    case 'toggleVisibility':
      return {
      	state[label]: !state[label], 
      	state['NeedsToBeSaved']: true]
      };
    default:
      return state;
	}
}

// If you don't return the new state then nothing gets sent.


//Store
const store= createStore(toggler, {
		Alerts: true, 
  		TopBar: true, 
  		BottomBar: true,   		
      	WebCam:true,
  		NeedsToBeSaved: false}, 
	window.devToolsExtension ? window.devToolsExtension() : undefined);
// The store is created with createStore and it only takes in one 
// reducer so you will have to use combine reducer
// if your reducer has more than one reducer.
// The second argument is the initial state, the third is a store enhancer.


//MapDispatchToProps
const mapDispatchToProps = (dispatch)=> {
	return {
		onToggle: ()=> dispatch(actionToggle)
	}
}
//The only way to change the state inside it is to dispatch an action on it.

//MapStateToProps
const mapStateToProps = (state)=> {
	return {
		value:state
	}
}

// The above function maps the state to props.  So the reducer returns 
// the new state, but the idea is to not have components carry any state.  
// This means you take the new state provided by the reducer("provided" 
// through "connect") and return it as props. Notice the returned object 
// value?  That becomes similar to this.props.counter 
// providing the new state as it's value.


//Connected component
const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(MiniStrexmApp)
// counter value from the connect(select) and dispatch by default from connect

ReactDOM.render(
	<Provider store={store}>
		<App>
			<MiniStrexmApp onToggle={this.onToggle}/>
		</App>,
		document.getElementById('root')
	</Provider>
	);

registerServiceWorker();
