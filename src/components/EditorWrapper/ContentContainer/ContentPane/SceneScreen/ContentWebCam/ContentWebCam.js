import React, { Component } from 'react';

import './ContentWebCam.css';

export default class ContentWebCam extends Component {
  
  render() {
    
    if(this.props.visible === true)
    {
    return (
      <div className="ContentWebCam">
        	WebCam
      </div>
    );
    }
    else {return null;}
  }
}

