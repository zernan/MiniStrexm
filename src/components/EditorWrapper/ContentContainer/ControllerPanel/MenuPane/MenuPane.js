import React, { Component } from 'react';
import './MenuPane.css';
import Checkbox from '../../../../../components/checkbox/CheckBox';

const items = ['Alerts', 'TopBar', 'BottomBar', 'WebCam'];

class MenuPane extends Component {

	constructor(){
		super()
	}

		createCheckbox = label => (
    	<Checkbox
      		label={label}
      		toggleCheck={(e)=>this.props.toggleCheckbox(label)}
      		key={label}
    	/>
  	)

  	createCheckboxes = () => (
    	items.map(this.createCheckbox)
  	)

  render() {
    return (
      <div className="MenuPane">
        	{this.createCheckboxes()}
      </div>
    );
  }
}

export default MenuPane;