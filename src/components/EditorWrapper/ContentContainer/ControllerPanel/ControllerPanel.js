import React, { Component } from 'react';
import './ControllerPanel.css';
import MenuPane from './MenuPane/MenuPane';
import PropertiesPane from './PropertiesPane/PropertiesPane'

class ControllerPanel extends Component {

	constructor(){
		super()
	}
  
  render() {
  	return (
      <div className="ControllerPanel" >
      	<MenuPane onToggle={this.props.onToggle}/>
      	<PropertiesPane />
      </div>
    )
  }
}

export default ControllerPanel;