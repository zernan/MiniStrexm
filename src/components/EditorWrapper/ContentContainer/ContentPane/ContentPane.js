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
   			<SceneScreen stateList={this.props.stateList}/>
      </div>
    );
  }
}

export default ContentPane;