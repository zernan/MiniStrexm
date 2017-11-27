import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './SceneScreen.css';
import ContentTopbar from './ContentTopbar/ContentTopbar';
import ContentBottomBar from './ContentBottomBar/ContentBottomBar';
import ContentWebCam from './ContentWebCam/ContentWebCam';
import ContentAlert from './ContentAlerts/ContentAlert';



class SceneScreen extends Component {
  
  
  render() {

    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    
    let stateList = this.props.stateList;
    let alertTypes = stateList === undefined ? [] : stateList['AlertTypes'];
    let background = stateList['Background'];
    
    return (
        <div className="SceneScreen" style ={ { backgroundImage: 'url('+background+')'}}>
        	    <Draggable bounds={{top:0, bottom: 50}} axis='y' {...dragHandlers}>
                <div>
                  <ContentTopbar visible={stateList['TopBar']}/>
        			 </div>
              </Draggable>

              <Draggable {...dragHandlers}>
                <div>
                  <ContentAlert alert={alertTypes} visible={stateList['Alerts']}/>
                </div>
              </Draggable>

              <Draggable  {...dragHandlers}>
                <div>
          			 <ContentWebCam visible={stateList['WebCam']}/>
                </div>
              </Draggable>
        			
              <Draggable bounds={{top: -50, bottom: 30}}  axis='y' {...dragHandlers}>
                <div>
                  <ContentBottomBar visible={stateList['BottomBar']}/>
                </div>
              </Draggable>
        </div>
    )
  }
}

export default SceneScreen;