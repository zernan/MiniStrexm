import React, { Component } from 'react';
import './SceneScreen.css';
import ContentTopbar from './ContentTopbar/ContentTopbar';
import ContentBottomBar from './ContentBottomBar/ContentBottomBar';
import ContentWebCam from './ContentWebCam/ContentWebCam';
import ContentAlert from './ContentAlerts/ContentAlert';

class SceneScreen extends Component {
  render() {
    
    let stateList = this.props.stateList;
    let alertTypes = stateList === undefined ? [] : stateList['AlertTypes'];
    let background = stateList['Background'];
    
    return (
      
      <div className="SceneScreen" style ={ { backgroundImage: 'url('+background+')'}}>
      	    <ContentTopbar visible={stateList['TopBar']}/>
      			<ContentAlert alert={alertTypes} visible={stateList['Alerts']}/>
      			<ContentWebCam visible={stateList['WebCam']}/>
      			<ContentBottomBar visible={stateList['BottomBar']}/>
      </div>
    )
  }
}

export default SceneScreen;