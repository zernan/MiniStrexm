import React, { Component } from 'react';
import './EditorWrapper.css';
import TopToolbar from './TopToolBar/TopToolbar';
import ContentContainer from './ContentContainer/ContentContainer';
import ErrorBoundary from '../ErrorBoundary'

class EditorWrapper extends Component {
	
  	render() {
             
  	return (

      <div className="EditorWrapper">
        <ErrorBoundary childName='toptoolbar'>
          <TopToolbar changeBackground={this.props.changeBackground} needsToBeSaved={this.props.stateList === undefined ? false : this.props.stateList['NeedsToBeSaved']}/>
        </ErrorBoundary>
        <ContentContainer onToggle={this.props.onToggle} stateList={this.props.stateList} />
      </div>
    );
  }
}

export default EditorWrapper;