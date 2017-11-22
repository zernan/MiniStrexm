import React, { Component } from 'react';
import './ContentTopbar.css';
import ContentTopbarFollower from './ContentTopbarFollower/ContentTopbarFollower';
import ContentTopbarUsername from './ContentTopbarUsername/ContentTopbarUsername';
import ContentTopbarTip from './ContentTopbarTip/ContentTopbarTip';

class ContentTopbar extends Component {
  
  render() {
    if(this.props.visible === true)
    {
    return (
      <div className="ContentTopbar">
        	<ContentTopbarFollower />
        	<ContentTopbarUsername />
        	<ContentTopbarTip />
      </div>
    );
    }
    else {return null;}
  }
}

export default ContentTopbar;