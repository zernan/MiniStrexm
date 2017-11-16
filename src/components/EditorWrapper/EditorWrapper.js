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
        <TopToolbar needsToBeSaved={this.props.needsToBeSaved}/>
        <ContentContainer onToggle={this.props.onToggle} visibilityList={this.props.visibilityList} />
        {/*<TopToolbar needsToBeSaved={this.state['NeedsToBeSaved']}/>
        <ContentContainer onToggle={this.handleChange} visibilityList={this.state}/>*/}
      </div>
    );
  }
}

export default EditorWrapper;