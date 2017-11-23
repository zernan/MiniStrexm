import React, { Component } from 'react';
import './TopToolbar.css';

class TopToolbar extends Component {
  constructor()
  {
	super()
	this.handleChangeBackground = this.handleChangeBackground.bind(this)
  }

  handleChangeBackground (e) {
  	console.log('handle changeBackground')
    const {changeBackground} = this.props;

    changeBackground();
  }
  
  render() {
  	
  	let needsToBeSaved = this.props.needsToBeSaved;

  	if(needsToBeSaved)
  	{
	    return (
	      <div className="TopToolbar">
	        	<span>
	        	<input type='button' value='SAVE'></input>
	        	{/*<input type='button' value='CHANGE BACKGROUND' onClick={this.handleChangeBackground}></input>*/}
	        	</span>
	      </div>
	    );
	}
	else
	{
		return (
	      <div className="TopToolbar">
	        	<span>
	        	<input type='button' value='SAVE' disabled></input>
	        	{/*<input type='button' value='CHANGE BACKGROUND' onClick={this.handleChangeBackground}></input>*/}
	        	</span>
	      </div>
	    );
	}
  }
}

export default TopToolbar;