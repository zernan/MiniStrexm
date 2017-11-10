import React, { Component } from 'react';
import './ContentContainer.css';
import ContentPane from './ContentPane/ContentPane';
import ControllerPanel from './ControllerPanel/ControllerPanel'

class ContentContainer extends Component {
  constructor() {
  	super(),
  	this.state = {
  		alertsHidden: false, 
  		topbarHidden: false, 
  		bottombarHidden: false, 
  		webcamHidden:false,
  		needsToBeSaved: false },
  	this.handleChange = this.handleChange.bind(this)
  }

  handleChange(label) {
  	switch(label){
  		case 'Alerts': {
  			this.setState( ({alertsHidden})=> ({alertsHidden: !alertsHidden}) );
  			alert(`Alerts ${this.state.alertsHidden}`);
  		}
  			break;
  		case 'Top Bar': {
  			this.setState( ({topbarHidden})=> ({topbarHidden: !topbarHidden}) );
  			alert(`Top Bar ${this.state.topbarHidden}`);
  		}
  			break;
  		case 'Bottom Bar': {
  			this.setState( ({bottombarHidden})=> ({bottombarHidden: !bottombarHidden}) );
  			alert(`Bottom Bar ${this.state.bottombarHidden}`);
  		}
  			break;
  		case 'Webcam 16:9': {
  			this.setState( ({webcamHidden})=> ({webcamHidden: !webcamHidden}) );
  			alert(`Web Cam ${this.state.webcamHidden}`);
  		}
  	}
  }

  render() {
    return (
      <div className="ContentContainer">
      	<ControllerPanel onToggle={this.handleChange}/>
		<ContentPane itemsList={this.state}/>
      </div>
    )
  }
}

export default ContentContainer;