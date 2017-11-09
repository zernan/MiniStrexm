import React, { Component } from 'react';
import './ContentWebCam.css';

class ContentWebCam extends Component {
  
  constructor() {
		super(),
		this.state = { isHidden : false }
  }

  render() {
    return (
      <div className="ContentWebCam">
        	WebCam
      </div>
    );
  }
}

export default ContentWebCam;