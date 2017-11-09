import React, { Component } from 'react';
import './ContentTopbar.css';
import ContentTopbarFollower from './ContentTopbarFollower/ContentTopbarFollower';
import ContentTopbarUsername from './ContentTopbarUsername/ContentTopbarUsername';
import ContentTopbarTip from './ContentTopbarTip/ContentTopbarTip';

class ContentTopbar extends Component {
  constructor() {
  	super(),
  	this.state = {isHidden:false}
  }
  
  render() {
    return (
      <div className="ContentTopbar">
        	<ContentTopbarFollower />
        	<ContentTopbarUsername />
        	<ContentTopbarTip />
      </div>
    );
  }
}

export default ContentTopbar;