import React, { Component } from 'react';
import './EditorWrapper.css';
import TopToolbar from './TopToolBar/TopToolbar';
import ContentContainer from './ContentContainer/ContentContainer';

class EditorWrapper extends Component {
	
  	render() {
             
  	return (

      <div className="EditorWrapper">
        <TopToolbar changeBackground={this.props.changeBackground} needsToBeSaved={this.props.stateList === undefined ? false : this.props.stateList['NeedsToBeSaved']}/>
        <ContentContainer onToggle={this.props.onToggle} stateList={this.props.stateList} />
      </div>
    );
  }
}

export default EditorWrapper;