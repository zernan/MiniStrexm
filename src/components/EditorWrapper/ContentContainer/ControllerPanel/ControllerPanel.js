import React, { Component } from 'react';
import './ControllerPanel.css';
import MenuPane from './MenuPane/MenuPane';
import PropertiesPane from './PropertiesPane/PropertiesPane'

class ControllerPanel extends Component {
  render() {
    return (
      <div className="ControllerPanel" >
      	<MenuPane toggleCheckbox={this.props.onToggle}/>
      	<PropertiesPane />
      </div>
    )
  }
}

export default ControllerPanel;