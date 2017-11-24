import React, { Component } from 'react';

import { DragSource } from 'react-dnd';

import './ContentWebCam.css';

export default class ContentWebCam extends Component {
  
  render() {
    const handleClick=()=>{ 
    alert('MAKE DRAGGABLE');
    console.log('webcam element clicked!')
  };

    if(this.props.visible === true)
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

const webcamDragSource = {
  beginDrag: function() {
    return {}
  }
}

/*export default DragSource('DRAG_WEBCAM', webcamDragSource,
    function(connect) {
      return {
        connectDragSource: connect.dragSource()
      }
    })(ContentWebCam);*/

