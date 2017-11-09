import React, { Component } from 'react';
import './SceneScreen.css';
import ContentTopbar from '../ContentTopbar/ContentTopbar';
import ContentBottomBar from '../ContentBottomBar/ContentBottomBar';
import ContentWebCam from '../ContentWebCam/ContentWebCam';
import ContentAlert from '../ContentAlerts/ContentAlert';

const alertTypes = ['tip', 'follower', 'host', 'subscribe', 'cheer'];

class SceneScreen extends Component {
  render() {
    return (
      <div className="SceneScreen">
      	<ContentTopbar />
      	<ContentAlert alert={alertTypes[0]}/>
      	<ContentWebCam />
      	<ContentBottomBar />
      </div>
    )
  }
}

export default SceneScreen;