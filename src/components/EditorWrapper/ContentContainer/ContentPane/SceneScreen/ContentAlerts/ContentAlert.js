import React, { Component } from 'react';
import './ContentAlert.css';

class ContentAlert extends Component {
  
  render() {
    if(this.props.visible == true)
    {
    return (
      <div className="ContentAlert">
        	ALERT : You received a {this.props.alert[1]} !!!
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