import React, { Component } from 'react';
import './MenuPane.css';
import Checkbox from '../checkbox/CheckBox';

const items = ['Alerts', 'Top Bar', 'Bottom Bar', 'Webcam 16:9'];

class MenuPane extends Component {

	constructor(){
		super(),    
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	toggleCheckbox=(label)=>{
    	
      /*if(label == 'Alerts') { this.setState({alertsHidden:!alertsHidden;}) };
      if(label == 'Top Bar') { this.setState({topbarHidden: !topbarHidden})};
      if(label == 'Bottom Bar') { this.setState({bottombarHidden: !bottombarHidden})};
      if(label == 'Webcam 16:9') {this.setState({webcamHidden: !webcamHidden})};*/
  	}

  	createCheckbox = label => (
    	<Checkbox
      		label={label}
      		toggleCheck={this.toggleCheckbox}
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