import React, { Component } from 'react';
import './ControllerPanel.css';
import MenuPane from './MenuPane/MenuPane';
import PropertiesPane from './PropertiesPane/PropertiesPane'
import ErrorBoundary from '../../../ErrorBoundary'

class ControllerPanel extends Component {

	constructor(){
		super()
	}
  
  render() {
  	return (
      <div className="ControllerPanel">
        <ErrorBoundary childName='menupane'>
      	   <MenuPane onToggle={this.props.onToggle}/>
        </ErrorBoundary>
        <ErrorBoundary childName='propertiespane'>
      	   <PropertiesPane id='properties-pane'/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default ControllerPanel;