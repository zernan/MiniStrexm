import React, { Component } from 'react';
import './ContentContainer.css';
import ContentPane from './ContentPane/ContentPane';
import ControllerPanel from './ControllerPanel/ControllerPanel'

class ContentContainer extends Component {
  constructor() {
  	super(),
  	this.state = {
  		Alerts: true, 
  		TopBar: true, 
  		BottomBar: true,   		
      WebCam:true,
  		NeedsToBeSaved: false },
  	this.handleChange = this.handleChange.bind(this)
  }

  handleChange(label) {

    this.setState({
      [label]: !this.state[label],
      NeedsToBeSaved: true
    });
  }
  
  render() {
    
    return (
      <div className="ContentContainer">
      	<ControllerPanel onToggle={this.handleChange}/>
        <ContentPane visibilityList={this.state}/>
      </div>
    )
  }
}

export default ContentContainer;