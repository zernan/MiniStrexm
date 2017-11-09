import React, { Component } from 'react';
import './ContentContainer.css';
import ContentPane from '../ContentPane/ContentPane';
import ControllerPanel from '../ControllerPanel/ControllerPanel'

class ContentContainer extends Component {
  constructor() {
  	super(),
  	this.state = {
  		alertsHidden: false, 
  		topbarHidden: false, 
  		bottombarHidden: false, 
  		webcamHidden:false }
  }
  
  render() {
    return (
      <div className="ContentContainer">
      	<ControllerPanel />
      	<ContentPane alertsHidden={this.state.alertsHidden} topbarHidden={this.state.topbarHidden}
      		bottombarHidden={this.bottombarHidden} webcamHidden={this.state.webcamHidden}/>
      </div>
    )
  }
}

export default ContentContainer;