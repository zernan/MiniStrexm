import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './SceneScreen.css';
import ContentTopbar from './ContentTopbar/ContentTopbar';
import ContentBottomBar from './ContentBottomBar/ContentBottomBar';
import ContentWebCam from './ContentWebCam/ContentWebCam';
import ContentAlert from './ContentAlerts/ContentAlert';
import ErrorBoundary from '../../../../ErrorBoundary'
import Tooltip from '../../../../Tooltip'


class SceneScreen extends Component {
  
    render() {

    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    
    let stateList = this.props.stateList;
    let alertTypes = stateList.toggler === undefined ? [] : stateList.toggler['AlertTypes'];
    let background = stateList.background['Background'];
    
    return (
        <div className="SceneScreen" id='scene-screen' style ={ { backgroundImage: 'url('+background+')'}}>
          <ErrorBoundary childName='topbar'>
              <Draggable bounds={{top:0, bottom: 50}} axis='y' {...dragHandlers}>
                <div>
                <Tooltip text='This top bar has very limited movability, just enough to see most of the details'>
                  <ContentTopbar visible={stateList.toggler['TopBar']}/>
                </Tooltip>  
        			 </div>
              </Draggable>
          </ErrorBoundary>

          <ErrorBoundary childName='alerts'>
              <Draggable {...dragHandlers}>
                <div>
                <Tooltip text='Alerts have 5 different types: Tip, Follower, Host, Subscribe and Cheer. 
                                They will pop up immediately upon receipt. 
                                Make sure you position them during design mode in a way that they will not impede your view'>
                  <ContentAlert alert={alertTypes} visible={stateList.toggler['Alerts']}/>
                  </Tooltip>
                </div>
              </Draggable>
          </ErrorBoundary>
          
          <ErrorBoundary childName='webcam'>
              <Draggable  {...dragHandlers}>
                <div>
                 <Tooltip text='Make sure to position this that it would not hinder your view!'>
          			   <ContentWebCam visible={stateList.toggler['WebCam']}/>
                 </Tooltip>
                </div>
              </Draggable>
          </ErrorBoundary>
        			
          <ErrorBoundary childName='bottombar'>
              <Draggable bounds={{top: -50, bottom: 30}}  axis='y' {...dragHandlers}>
                <div>
                <Tooltip text='This bottom bar have limited vertical movability, 
                            just enough so that you can see the details that might be behind it'>
                  <ContentBottomBar visible={stateList.toggler['BottomBar']}/>
                </Tooltip>
                </div>
              </Draggable>
          </ErrorBoundary>
        </div>
    )
  }
}

export default SceneScreen;