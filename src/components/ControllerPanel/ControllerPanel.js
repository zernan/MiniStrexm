import React, { Component } from 'react';
import './ControllerPanel.css';
import MenuPane from '../MenuPane/MenuPane';
import PropertiesPane from '../PropertiesPane/PropertiesPane'

class ControllerPanel extends Component {
  render() {
    return (
      <div className="ControlerPanel">
      	<MenuPane />
      	<PropertiesPane />
      </div>
    )
  }
}

export default ControllerPanel;