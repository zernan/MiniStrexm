import React, { Component } from 'react';
import './ContentAlert.css';

class ContentAlert extends Component {
  constructor() {
  	super(),
  	this.state = {isHidden:false, alertType: ''}
  }
  
  render() {
    if(this.props.visible == true)
    {
    return (
      <div className="ContentAlert">
        	ALERT : {this.props.alert[0]} !!!
      </div>
    );
    }
    else
    {
      return null;
    }
  }
}

export default ContentAlert;