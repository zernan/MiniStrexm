import React, { Component } from 'react';
import './TopToolbar.css';

class TopToolbar extends Component {
  constructor()
  {
	super()
  }
  
  render() {
  	
  	let needsToBeSaved = this.props.needsToBeSaved;

  	if(needsToBeSaved)
  	{
	    return (
	      <div className="TopToolbar">
	        	<span>
	        	<input type='button' value='SAVE'></input>
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
	        	</span>
	      </div>
	    );
	}
  }
}

export default TopToolbar;