import React, { Component } from 'react';
import './ContentPane.css';
import SceneScreen from './SceneScreen/SceneScreen'
import ContentTopbar from './SceneScreen/ContentTopbar/ContentTopbar';
import ContentBottomBar from './SceneScreen/ContentBottomBar/ContentBottomBar';
import ContentWebCam from './SceneScreen/ContentWebCam/ContentWebCam';
import ContentAlert from './SceneScreen/ContentAlerts/ContentAlert';

const alertTypes = ['tip', 'follower', 'host', 'subscribe', 'cheer'];

class ContentPane extends Component {
	constructor(){
		super()
	}

	
  render() {

  	let visibility = this.props.visibilityList;

    return (

      <div className="ContentPane">
   			CONTENT PANE
   			<SceneScreen >
   				<ContentTopbar visible={visibility['TopBar']}/>
      			<ContentAlert alert={alertTypes} visible={visibility['Alerts']}/>
      			<ContentWebCam visible={visibility['WebCam']}/>
      			<ContentBottomBar visible={visibility['BottomBar']}/>
   			</SceneScreen>
      </div>
    );
  }
}

export default ContentPane;