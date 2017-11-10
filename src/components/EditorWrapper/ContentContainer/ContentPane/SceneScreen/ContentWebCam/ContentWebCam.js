import React, { Component } from 'react';
import './ContentWebCam.css';

class ContentWebCam extends Component {
  
  constructor() {
		super(),
		this.state = { isHidden : false }
  }

  render() {
    if(this.props.visible == true)
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

export default ContentWebCam;