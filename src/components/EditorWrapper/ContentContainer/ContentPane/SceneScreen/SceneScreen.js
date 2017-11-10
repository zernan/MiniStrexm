import React, { Component } from 'react';
import './SceneScreen.css';
import ContentTopbar from './ContentTopbar/ContentTopbar';
import ContentBottomBar from './ContentBottomBar/ContentBottomBar';
import ContentWebCam from './ContentWebCam/ContentWebCam';
import ContentAlert from './ContentAlerts/ContentAlert';

const alertTypes = ['tip', 'follower', 'host', 'subscribe', 'cheer'];

class SceneScreen extends Component {
  render() {
    const {alerts, top, bottom, webcam, save} = this.props.itemsList;

    return (
      <div className="SceneScreen">
      	<ContentTopbar visible={true}/>
      	<ContentAlert alert={alertTypes} visible={false}/>
      	<ContentWebCam visible={true}/>
      	<ContentBottomBar visible={false}/>
      </div>
    )
  }
}

export default SceneScreen;