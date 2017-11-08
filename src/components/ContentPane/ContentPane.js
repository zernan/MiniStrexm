import React, { Component } from 'react';
import './ContentPane.css';
import SceneScreen from '../SceneScreen/SceneScreen'

class ContentPane extends Component {
  render() {
    return (
      <div className="ContentPane">
   			CONTENT PANE
   			<SceneScreen />
      </div>
    );
  }
}

export default ContentPane;