import React, { Component } from 'react';
import './SceneScreen.css';
import ContentTopbar from './ContentTopbar/ContentTopbar';
import ContentBottomBar from './ContentBottomBar/ContentBottomBar';
import ContentWebCam from './ContentWebCam/ContentWebCam';
import ContentAlert from './ContentAlerts/ContentAlert';

class SceneScreen extends Component {
  render() {
    let visibility = this.props.visibilityList;
    
    return (
      
      <div className="SceneScreen">
      	{this.props.children}
      </div>
    )
  }
}

export default SceneScreen;