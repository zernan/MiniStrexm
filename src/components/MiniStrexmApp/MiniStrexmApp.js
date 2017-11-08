import React, { Component } from 'react';
import logo from '../../logo.svg';
import './MiniStrexmApp.css';
import EditorWrapper from '../EditorWrapper/EditorWrapper'

class MiniStrexmApp extends Component {
  render() {
    return (
      <div className="MiniStrexmApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MiniStrexmApp</h1>
        </header>
        <EditorWrapper />
      </div>
    );
  }
}

export default MiniStrexmApp;
