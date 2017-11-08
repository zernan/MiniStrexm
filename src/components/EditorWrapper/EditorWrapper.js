import React, { Component } from 'react';
import './EditorWrapper.css';
import Topbar from '../TopBar/Topbar';
import ContentContainer from '../ContentContainer/ContentContainer';

class EditorWrapper extends Component {
  render() {
    return (
      <div className="EditorWrapper">
        <Topbar />
        <ContentContainer />
      </div>
    );
  }
}

export default EditorWrapper;