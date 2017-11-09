import React, { Component } from 'react';
import './ContentAlert.css';

class ContentAlert extends Component {
  constructor() {
  	super(),
  	this.state = {isHidden:false, alertType: ''}
  }
  
  render() {
    return (
      <div className="ContentAlert">
        	ALERT : {this.props.alert} !!!
      </div>
    );
  }
}

export default ContentAlert;