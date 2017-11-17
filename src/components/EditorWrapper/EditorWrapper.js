import React, { Component } from 'react';
import './EditorWrapper.css';
import TopToolbar from './TopToolBar/TopToolbar';
import ContentContainer from './ContentContainer/ContentContainer';

class EditorWrapper extends Component {
	constructor() {
  	super()
  }

  	render() {
       
  	return (

      <div className="EditorWrapper">
        <TopToolbar needsToBeSaved={this.props.stateList == undefined ? false : this.props.stateList['NeedsToBeSaved']}/>
        <ContentContainer onToggle={this.props.onToggle} stateList={this.props.stateList} />
      </div>
    );
  }
}

export default EditorWrapper;