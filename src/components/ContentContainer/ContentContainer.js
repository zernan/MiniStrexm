import React, { Component } from 'react';
import './ContentContainer.css';
import ContentPane from '../ContentPane/ContentPane';
import ControllerPanel from '../ControllerPanel/ControllerPanel'

class ContentContainer extends Component {
  render() {
    return (
      <div className="ContentContainer">
      	<ControllerPanel />
      	<ContentPane />
      </div>
    )
  }
}

export default ContentContainer;