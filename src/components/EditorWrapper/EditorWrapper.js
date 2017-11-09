import React, { Component } from 'react';
import './EditorWrapper.css';
import TopToolbar from '../TopToolBar/TopToolbar';
import ContentContainer from '../ContentContainer/ContentContainer';

class EditorWrapper extends Component {
  render() {
    return (
      <div className="EditorWrapper">
        <TopToolbar />
        <ContentContainer />
      </div>
    );
  }
}

export default EditorWrapper;