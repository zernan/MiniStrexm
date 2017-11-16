import React, { Component } from 'react';
import './SceneScreen.css';
import ContentTopbar from './ContentTopbar/ContentTopbar';
import ContentBottomBar from './ContentBottomBar/ContentBottomBar';
import ContentWebCam from './ContentWebCam/ContentWebCam';
import ContentAlert from './ContentAlerts/ContentAlert';

const alertTypes = ['tip', 'follower', 'host', 'subscribe', 'cheer'];

class SceneScreen extends Component {
  render() {
    let visibility = this.props.visibilityList;
    
    return (
      
      <div className="SceneScreen">
      	<ContentTopbar visible={true}/>
            <ContentAlert alert={alertTypes} visible={true}/>
            <ContentWebCam visible={true}/>
            <ContentBottomBar visible={true}/>
            {/*<ContentTopbar visible={visibility['TopBar']}/>
      			<ContentAlert alert={alertTypes} visible={visibility['Alerts']}/>
      			<ContentWebCam visible={visibility['WebCam']}/>
      			<ContentBottomBar visible={visibility['BottomBar']}/>*/}
      </div>
    )
  }
}

export default SceneScreen;