import React, { Component } from 'react';
import './ContentPane.css';
import SceneScreen from './SceneScreen/SceneScreen'

class ContentPane extends Component {
	constructor(){
		super()
	}
	
  render() {
    
    return (

      <div className="ContentPane">
   			CONTENT PANE
   			<SceneScreen visibilityList={this.props.visibilityList}/>
      </div>
    );
  }
}

export default ContentPane;