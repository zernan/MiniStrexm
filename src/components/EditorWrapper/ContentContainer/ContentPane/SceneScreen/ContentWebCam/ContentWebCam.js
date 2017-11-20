import React, { Component } from 'react';
import './ContentWebCam.css';

class ContentWebCam extends Component {
  
  render() {
    const handleClick=()=>{ 
    alert('MAKE DRAGGABLE');
    console.log('webcam element clicked!')
  };

    if(this.props.visible == true)
    {
    return (
      <div className="ContentWebCam" onClick={handleClick}>
        	WebCam
      </div>
    );
    }
    else {return null;}
  }
}

export default ContentWebCam;